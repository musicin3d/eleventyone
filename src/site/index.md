---
title: EleventyOne
subtitle: A project scaffold for getting building with Eleventy quickly.
layout: layouts/base.hbs
---


## This site is a starting point

From this point we should already have:

- [Eleventy](https://11ty.io) with a skeleton site
- A date format filter for Nunjucks
- Sass pipeline
- JS pipeline
- JS [search index](/search.json) generator
- Serverless (FaaS) development pipeline with Netlify Functions for Lambda


## Post pages

The pages found in in the posts

<ul class="listing">
{{#each collections.post }}
  <li>
    <a href="{{ this.url }}">{{ this.data.title }}</a> -
    <time datetime="{{ this.date }}">{{ dateDisplay this.date }}</time>
  </li>
{{/each}}
</ul>



