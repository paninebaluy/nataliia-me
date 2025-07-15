---
layout: layouts/post-pt.njk
title: "My First Blog Post"
date: 2025-06-26T10:30:07
tags: -toolkit-
permalink: "/blog/{{ title | slug }}/"
---

# {{title}}
Date: {{date | date("dd/MM/yyyy HH:mm:ss") }}

Welcome to my new blog! This post has both a date and a time.

<figure>
  <img src="../../images/freyja-clinic.png" alt="Freyja in a vet clinic">
  <figcaption>
    Freyja in a vet clinic
  </figcaption>
</figure>