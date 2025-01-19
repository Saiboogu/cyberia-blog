#!/bin/bash
#############                                                                                            
# DESCRIPTION
#############
# Builds the page header
#
# This function assumes that metadata has already been fetched in the current subshell. If no metadata is present, it will do nothing.
# 
#############
# Usage:
# build_header destination.html

build_comments() {
        # Verify that metadata variables are populated before running.
        [[ $title != '' ]] && {
                cat $config/comments.html > $1
                
                # Replace all tags in {{this format}} with their value. We do this using Bash pattern replacement.
                comment_block="$(cat $1)"

                comment_block="${comment_block//\{\{title\}\}/"$title"}"
                comment_block="${comment_block//\{\{canonical_url\}\}/"$canonical_url"}"


                echo "$comment_block" > $1
                comment_block=""
        }
}
