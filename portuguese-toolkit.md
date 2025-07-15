---
layout: layouts/base.njk
title: "The Portuguese Toolkit"
---

<h1>{{ title }}</h1>

## Recent Posts

<ul>
{% for post in collections.toolkit | reverse %}
  <li>
    <p>{{ post.title }}</p>
    <a href="{{ post.url }}">{{ post.data.title }}</a><br />
    <small>{{ post.date | date("yyyy-MM-dd HH:mm") }}</small>
  </li>
{% endfor %}
</ul>

## Socials

- [Medium](https://medium.com/@portuguese-toolkit)

- [Instagram](https://www.instagram.com/portuguese_toolkit/)