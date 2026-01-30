---
title: from 2015 macbook to homelab server
date: 2026-01-21
---

# from 2015 macbook to homelab server

sometimes the best projects start with a problem you didn't expect to solve. for me, it was getting suspended from a discord bot hosting service for "multi-account shenanigans." what began as a necessity quickly turned into an exciting weekend homelab experiment.

## the hardware: a 2015 macbook's second life

digging through my old tech, i found my 2015 macbook pro - not exactly cutting edge, but surprisingly capable for server duties:

- **processor**: intel core i7-4770hq
- **memory**: 16gb ddr3 ram
- **storage**: 240gb ssd

these specs, while dated for daily computing, are actually perfect for a home server. the quad-core i7 handles multiple services well, 16gb of ram provides plenty of headroom, and the ssd ensures fast i/o operations.

## the setup: ubuntu server and docker

the first step was wiping macos and installing ubuntu server. this wasn't just about getting linux running - it was about transforming the laptop into a true server. one crucial setting: **disabling suspend mode** so i could close the lid and keep everything running 24/7 while plugged into power.

with ubuntu up and running, i chose docker as my containerization platform. docker makes it incredibly easy to:

- isolate different services
- manage dependencies cleanly
- deploy and update applications with minimal downtime
- keep my homelab organized and scalable

## the discord bots: yuki and xora

my primary motivation was hosting discord bots, and i now have two running successfully:

### yuki - the heavy hitter
yuki is my flagship project, serving a massive discord community with over 22,000 members. this bot handles:
- moderation and admin commands
- user engagement features
- custom integrations and apis
- high-volume message processing

running yuki on my own hardware gives me complete control over performance and uptime - no more worrying about third-party service limitations!

### xora - the personal assistant
xora serves my personal discord server, handling:
- custom server management
- fun commands and games
- integration with other homelab services
- experimental features i'm testing

## the minecraft challenge: better minecraft 5

with the bots running smoothly, i got ambitious - why not host a modded minecraft server? i chose **better minecraft 5**, a popular modpack that offers incredible gameplay enhancements.

### first attempt: crafty control panel
i initially tried using crafty, a web-based minecraft server management tool. the setup looked promising with its clean interface and automated server management features. however, i ran into frustrating network connectivity issues that prevented me from uploading the server files properly.

### the direct approach: manual docker setup
after struggling with crafty's web portal, i pivoted to a more hands-on approach. by creating a custom docker container and manually configuring the server files, i gained:

- complete control over java settings and memory allocation
- direct access to logs and configuration files
- the ability to fine-tune performance for the modpack
- a deeper understanding of how minecraft servers actually work

the result? a stable better minecraft 5 server ready for my friends to join!

## network magic: playit and custom subdomain

here's where it gets really cool. i needed to expose my minecraft server to the internet without dealing with complex port forwarding and router configuration.

### playit.gg tunneling
playit.gg provides secure tunneling services that create public endpoints for your local services. with playit:

- no router configuration needed
- automatic ddns updates
- secure tunneling through their infrastructure
- easy setup with just a few commands

### custom subdomain integration
the cherry on top: i pointed a subdomain from my company website directly to the playit tunnel ip. now instead of sharing some random ip and port, my friends can connect to something clean and professional like `minecraft.mycompany.com`.

## lessons learned

this weekend taught me several valuable lessons about homelabbing:

1. **old hardware has value** - that 2015 macbook i almost forgot about is now a workhorse server
2. **docker is essential** - containerization makes managing multiple services incredibly clean
3. **problem-solving beats convenience** - when crafty didn't work, manual setup gave me better understanding
4. **network services are powerful** - tools like playit make self-hosting accessible without complex networking
5. **start with a real need** - having actual discord bots to host gave me motivation to see this through

## what's next?

now that the foundation is solid, i'm already thinking about expanding the homelab:

- adding monitoring with prometheus/grafana
- setting up automated backups
- exploring self-hosted alternatives to other cloud services
- maybe even hosting a small website or two

## the takeaway

what started as a workaround for a discord bot suspension became a full-blown homelab project that taught me more about linux, docker, networking, and server administration than months of reading tutorials ever could.

the best part? i now have complete control over my digital services, save money on hosting, and gained valuable skills along the way. plus, there's something incredibly satisfying about turning "obsolete" hardware into something useful and powerful.

if you have old hardware lying around and a problem to solve, maybe it's time to start your own homelab adventure. you might be surprised what you can accomplish in a single weekend!
