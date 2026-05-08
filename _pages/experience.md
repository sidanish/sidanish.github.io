---
layout: page
title: experience
permalink: /experience/
description: My professional experience and career journey.
nav: true
nav_order: 4
---

<!-- _pages/experience.md -->

<div class="experience">

{% if site.data.experience %}
  {% for role in site.data.experience %}
    <div class="experience-item">
      <h3>{{ role.title }}</h3>
      <p class="company"><strong>{{ role.company }}</strong></p>
      <p class="period">{{ role.start_date }} - {{ role.end_date }}</p>
      {% if role.description %}
        <p class="description">{{ role.description }}</p>
      {% endif %}
    </div>
  {% endfor %}
{% else %}
  <p>Add your experience data to <code>_data/experience.yml</code> to display it here.</p>
{% endif %}

</div>
