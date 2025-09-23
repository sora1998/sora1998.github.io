---
layout: single
title: "Enze Ma"
permalink: /
author_profile: true
classes: wide
---

Hi! I’m **Enze Ma**, a Ph.D. student in the [Department of Computer Science at UIC](https://cs.uic.edu/), advised by [Prof. Philip S. Yu](https://cs.uic.edu/profiles/philip-yu/).  
I’m a member of the **[Big Data and Social Computing (BDSC) Lab](https://bdsc.lab.uic.edu/)**.

Research interests: **LLMs**, **AI Agents**, **Multimodality**.

---

## Selected Publications
{% assign pubs = site.publications | sort: 'year' | reverse %}
{% for p in pubs limit:5 %}
- {{ p.authors }}. **{{ p.title }}**. *{{ p.venue }}*, {{ p.year }}.
  {% if p.paperurl %}[PDF]({{ p.paperurl }}){% endif %}{% if p.code %} · [Code]({{ p.code }}){% endif %}{% if p.doi %} · [DOI]({{ p.doi }}){% endif %}
{% endfor %}
[All publications →](/publications/)

## Talks
{% assign talks = site.talks | sort: 'date' | reverse %}
{% for t in talks limit:3 %}
- **{{ t.title }}**, {{ t.event }} · {{ t.location }}（{{ t.date | date: "%Y-%m-%d" }}）
  {% if t.url %}[Details]({{ t.url }}){% endif %}
{% endfor %}
[More talks →](/talks/)

## Contact
Email: you@example.com · GitHub: [sora1998](https://github.com/sora1998)
