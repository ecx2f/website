---
title: building yuki - my discord bot for loveplace
date: 2025-01-21
---

# building yuki - my discord bot for loveplace

every discord server needs its own personality, and for the loveplace community, that personality comes from yuki. what started as a simple bot project evolved into a comprehensive moderation and engagement system that keeps our server safe and welcoming.

## the origin story: the nekotina incident

it all began with a frustrating experience. a user asked nekotina - a popular discord bot - how they could make friends to play roblox. nekotina's response? spamming other discord server invitations. this wasn't just annoying; it was actively pulling members away from communities they were trying to build.

that's when i realized we needed better control over our server's bot ecosystem. instead of relying on third-party bots that might not align with our community values, i decided to build yuki from scratch.

## yuki's core responsibilities

yuki serves as the digital backbone of loveplace, handling several critical functions:

### custom embed system
yuki creates beautiful, consistent embeds for all major server sections. whether it's welcome messages, announcements, or channel descriptions, yuki ensures everything looks professional and on-brand. these aren't just text messages - they're rich, interactive embeds that enhance the user experience.

### intelligent greetings
when new users join loveplace, yuki is there to welcome them. but this isn't just a generic "welcome to the server!" message. yuki's greeting system:
- provides essential server information
- highlights important channels
- encourages new members to introduce themselves
- sets the tone for our community culture

### autoroles system
yuki manages a comprehensive autoroles system that lets users customize their server experience. members can self-assign roles for:
- **age groups** (helping users find peers in similar life stages)
- **gaming preferences** (connecting players with similar favorite games)
- **interests and hobbies** (facilitating conversations around shared passions)
- **availability** (letting others know when they're typically online)

this isn't just about role assignment - it's about community building. the autoroles system helps members find like-minded people and fosters genuine connections based on shared interests.

### advanced antispam protection

this is where yuki really shines. after the nekotina incident, i implemented a sophisticated antispam system specifically designed to prevent discord invite spam.

#### the bot whitelist system
here's the clever part: yuki's antispam filter only applies to other bots in the server. this means:
- human users can still share invites (when appropriate)
- bots are restricted from sending discord links
- trusted bots can be whitelisted for specific purposes

#### the security exception
we have a security bot that needs to send appeal server links when users get banned. yuki's whitelist system allows this specific bot to share discord invites while blocking all others. it's the perfect balance between security and functionality.

## technical implementation

building yuki taught me a lot about discord bot development and community management:

### event-driven architecture
yuki responds to various discord events:
- `GUILD_MEMBER_ADD` for new user greetings
- `MESSAGE_CREATE` for spam filtering
- interaction events for custom commands

### smart content filtering
the antispam system uses pattern matching to detect:
- discord invite links (discord.gg, discord.com/invite)
- variations and obfuscated attempts
- context-aware filtering based on user type

### modular design
each feature is built as an independent module:
- greeting system
- embed generator
- spam filter
- whitelist management

this makes yuki easy to maintain and extend with new features.

## the impact on loveplace

since deploying yuki, we've seen significant improvements:

- **zero spam incidents** from discord invite bots
- **consistent branding** across all server communications
- **faster new user integration** with intelligent greetings
- **reduced moderation workload** through automated filtering

## lessons learned

building yuki taught me several valuable lessons:

1. **community-specific solutions beat generic tools** - a custom bot built for your community's needs will always outperform off-the-shelf solutions

2. **automation enhances human moderation** - yuki doesn't replace our moderation team; it empowers them to focus on meaningful interactions

3. **flexibility is key** - the whitelist system shows how important it is to build exceptions into automated systems

4. **user experience matters** - beautiful embeds and thoughtful greetings make a real difference in how users perceive your community

## what's next for yuki?

yuki is constantly evolving. future plans include:
- ai-powered content moderation
- custom games and activities
- integration with other community tools
- advanced analytics for server insights

## the bigger picture

yuki isn't just a discord bot - it's a case study in solving real community problems with custom technology. by building yuki, i not only solved our spam issues but also created a more engaging, professional, and welcoming environment for the loveplace community.

sometimes the best solutions come from frustration with existing tools. nekotina's spam might have been annoying, but it ultimately led to something much better: a bot that truly serves our community's needs.

if you're running a discord server and finding that existing bots don't quite meet your needs, maybe it's time to consider building your own. the learning experience alone makes it worthwhile, and the end result could be exactly what your community has been missing.