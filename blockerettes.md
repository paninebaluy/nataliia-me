---
layout: layouts/base.njk
title: "The Blockerettes"
---

<h1>{{ title }}</h1>

This is a blog about female leaders in Web3 and their projects exploring the way women do things is the field. 

The name "Blockerettes" is a play on "bachelorettes", who do well just on their own. It's a collection of articles on innovation, bravery, vision and compassion. 

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

[Substack](https://substack.com/@blockerette)
