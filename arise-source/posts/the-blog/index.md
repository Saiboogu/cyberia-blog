<!-- BEGIN ARISE ------------------------------
Title:: "The Blog"

Author:: "Ben Robeson"
Description:: "Blog - So far"
Language:: "en"
Thumbnail:: ""
Published Date:: "2025-01-20"
Modified Date:: "2025-01-20"

content_header:: "true"
rss_hide:: "false"
comments:: "true"
---- END ARISE \\ DO NOT MODIFY THIS LINE ---->

# The Project

OK, so I've submitted the blog to Google, and turned on crawling in the robots.txt so I guess I've "launched." There is still CSS work to do, and I have some ideas for improvements to Arise itself, but that's for down the road. 

As I already mentioned, the blog is run with [Arise](https://github.com/spectrasecure/arise), a static website / blog generator that runs on Bash. It's hardly the only static site generator out there, but this one had a few things going for it. 

* Simple thing but I like the default theme. I'm not up to creating a whole theme from scratch (yet) so that was a nice perk. 
* It's built in Bash. I live in Bash all day long for work, and we're encouraged to script tasks and share. More practice is always great.
* Arise is cloud-ready. Sure, I can run the Bash script locally and get generated output and I do that when I edit the Bash script itself, but the publication process depends on Github actions.
* Cloud-ready means I'm practicing using tools like Github Actions, Cloudflare Pages, and playing more with Cloudflare rules. I can also move the project to a few different cloud and Git platforms for practice down the line.
  * I've been in hosting support for a few years now and have had to support clients using these tools, so the hands on work is indispensable. 
* The [comment](/posts/we_have_comments) system is also self hosted. It is a more classic self hosted app, running in a docker container on my home server - then using a Cloudflare tunnel to host worldwide. 

****

<img height="136px" width="500px" src="github_activity.webp?v0" alt="A grid of all the days in a year. All of them are black except the last week which is green">

And it does great things for my Github contributions chart. 

Of course, I need to start working with public repos too. Tempted to fork Cusdis because it's not clear how active it is, and the self hosted instance is full of plan information for their hosted version - but I may be speaking too optimistically right now. We'll see. 