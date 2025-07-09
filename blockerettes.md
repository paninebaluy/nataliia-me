---
layout: layouts/base.njk
title: "The Blockerettes"
---

<h1>{{ title }}</h1>

## Recent Posts

<ul>
{% for post in collections.blockerettes %}
  <li>
    <p>{{ post.title }}</p>
    <a href="{{ post.url }}">{{ post.data.title }}</a><br />
    <small>{{ post.date | date("yyyy-MM-dd HH:mm") }}</small>
  </li>
{% endfor %}
</ul>

## Socials

[Medium](https://medium.com/@portuguese-toolkit)
