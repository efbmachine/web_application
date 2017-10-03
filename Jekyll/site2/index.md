---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout:  default
title: I am a motherfxcking Goblin
date: 25/52/52
---
# Welcome to this blog ! 
{% assign date = {{site.posts.date}} %}
{% for post in site.posts %}
    
* {{post.date}} - [{{ post.title }}]({{ post.url }})
    
{% endfor %}
{{date}}
 

