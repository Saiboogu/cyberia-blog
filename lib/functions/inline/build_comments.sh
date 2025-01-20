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
                               
                # Replace all tags in {{this format}} with their value. We do this using Bash pattern replacement.
                comment_block="$(cat $config/comments.html)"

                comment_block="${comment_block//\{\{title\}\}/"$title"}"
                comment_block="${comment_block//\{\{author\}\}/"$author"}"
                comment_block="${comment_block//\{\{description\}\}/"$description"}"
                comment_block="${comment_block//\{\{language\}\}/"$language"}"
                comment_block="${comment_block//\{\{thumbnail\}\}/"$thumbnail"}"
                comment_block="${comment_block//\{\{published_date\}\}/"$published_date"}"
                comment_block="${comment_block//\{\{modified_date\}\}/"$modified_date"}"
                comment_block="${comment_block//\{\{canonical_url\}\}/"$canonical_url"}"
                comment_block="${comment_block//\{\{base_url\}\}/"$base_url"}"
                comment_block="${comment_block//\{\{relative_url\}\}/"$relative_url"}"
                comment_block="${comment_block//\{\{global_name\}\}/"$global_name"}"

                echo "$comment_block" >> $1
                comment_block=""
        }
}
