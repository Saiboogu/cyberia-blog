#!/bin/bash
#############                                                                                            
# DESCRIPTION
#############
# Optimizes images in the project
#
#############
# Usage:
# build_footer destination.html

optimize_img() {
        img_list = $(find . -iregex '.*\.\(jpg\|gif\|png\|jpeg\)$' $(printf "! -path %s " $(</config/webp_ignore.conf)))
        if [[ $? -eq 0 ]]; then
          for $i in $(echo $img_list); do
            cwebp -q 60 $i -o $i.webp
        else
          failure
        fi
}
