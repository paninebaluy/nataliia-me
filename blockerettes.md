---
layout: layouts/base.njk
title: "The Blockerettes"
---

<h1>{{ title }}</h1>

This is a blog about female leaders in Web3 and their projects. 

I once moderated an event called "Blockchain 4 Her" by Bitget in Porto. I was a bit sceptical at first, having attended other genera events: why make a separate conference for women only? I realized why very quickly. The three women I spoke to (these were Kirstin Allen from the UK, Irina Koksharova from Ukraine and Carolina Gama from Uruguay) created a professional but calm atmosphere where all were heard and understood. It was qualitatively different from the usual conferences for everyone: there was no competition for attention and no empty ambition, the focus of every member of the panel was on the community and adoption.

I think every woman interested in her firld should try to see for herself how different the approach to business is in women when they're left to their own devices. Maybe you already know. 

Anyway, I wanted to explore Web3 project led by women and write about it, so here it is.

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
