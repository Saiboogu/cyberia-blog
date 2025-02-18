<!-- BEGIN ARISE ------------------------------
Title:: "We Have Comments"

Author:: "Ben Robeson"
Description:: "Blog improvements - Adding self hosted comments."
Language:: "en"
Thumbnail:: "comments.svg"
Published Date:: "2025-01-17"
Modified Date:: "2025-02-16"

content_header:: "true"
rss_hide:: "false"
comments:: "true"
---- END ARISE \\ DO NOT MODIFY THIS LINE ---->

# Comment away.. 
<div class="article_pic" style="float:left;margin-right:8px;"><svg xmlns="http://www.w3.org/2000/svg" width="64px" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg></div>
Bit of a "Build it, and they (might) come (eventually). That's fine, this is all practice and education.
<p/>

I thought I would toss something like Disqus on here, but I remembered to search "self hosted" first and found [Cusdis](https://github.com/djyde/cusdis). I tried their hosted version just long enough to see it was workable, then put up a self hosted instance so I could dig in and start tweaking it. 

Had to tweak the iframe height already, it was claustrophobically short and I didn't like the CSS hacks I was using to try and make it taller from Arise instead of Cusdis. 


*02/12/25 Update* - I finally stopped hacking away at generated JavaScript and learned how to build my own Cusdis Docker image from a fork of the repo. I spent a long time figuring out how to get old branches that must have compiled at that time to compile today - turns out the simplest solution was just removing every caret ^ from the packages file, so nothing can get upgraded. But after figuring that out and poking around some more I found the newest branch and got it compiling. I learned how to apply the hacks I had in the JavaScript into the TypeScript, and it's been a lot easier. 

Cusdis uses Tailwind CSS styling, which I actually thought about learning at one point -- But I decided I need to learn CSS itself first, so I've been slowly stripping away the Tailwind classes and styling things with "Cyberia Theme" classes from the blog theme. 

I'm still not a fan of the height - it's tall enough, until it's not and you wind up scrolling again. I'm looking at ways to resize it, but evidently they're all a bit hacky - and require adding more JavaScript. I've been trying to stick to CSS only, but Cusdis definitely needs some JavaScript, so a tiny bit more for the iframe resizing is probably OK. 