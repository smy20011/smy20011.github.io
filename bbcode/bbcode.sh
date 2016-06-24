#!/bin/bash
mkdir _bbcodes
for markdown in _posts/*.md
do
  filename=$(basename "$markdown" .md)
  pandoc -t bbcode/bbcode.lua -markdown_github $markdown -o _bbcodes/${filename}.bbcode
done
