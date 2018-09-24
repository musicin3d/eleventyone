---
layout: layouts/base.hbs
pageClass: posts
templateEngineOverride: hbs, md
---

<h1>{{ title }}</h1>
<p class="date">
  Posted as an example, on <time datetime="{{ date }}">{{ dateDisplay date }}</time>
</p>
<main>
  {{{ content }}}
  <div class="footnote">
    <p>
      This page is part of the posts section.
    </p>
  </div>
</main>
