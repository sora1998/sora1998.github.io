---
layout: academic
title: "AI, Memory & Reasoning"
description: "Enze Ma is a Computer Science Ph.D. student at UIC researching AI agents, memory, skills, reasoning, and multimodal intelligence."
permalink: /
---
<section class="hero" id="about" aria-labelledby="intro-title">
  <div class="hero-copy">
    <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Ph.D. student · Computer Science</p>
    <h1 id="intro-title">Enze Ma<span class="name-period">.</span></h1>
    <p class="hero-affiliation">University of Illinois Chicago</p>
    <div class="intro-text">
      <p>I'm a Ph.D. student at <a href="https://cs.uic.edu/">UIC</a>, advised by <a href="https://cs.uic.edu/profiles/philip-yu/">Prof. Philip S. Yu</a> in the <a href="https://bdsc-uic.github.io/people.html">Big Data and Social Computing Lab</a>.</p>
      <p>Previously, I earned my B.S. and M.S. in Computer Science at <strong>UC San Diego</strong>, where I worked with <a href="https://zhiting.ucsd.edu/">Prof. Zhiting Hu</a>.</p>
    </div>
    <p class="current-focus"><span aria-hidden="true">↳</span> Exploring how AI agents use memory and skills to understand and interact with the world, and help people accomplish tasks.</p>
    <div class="social-links" aria-label="Contact and academic profiles">
      <a class="button button-primary" href="mailto:{{ site.author.email }}">Say hello <span aria-hidden="true">↗</span></a>
      <a href="{{ site.author.googlescholar }}">Scholar <span aria-hidden="true">↗</span></a>
      <a href="https://github.com/{{ site.author.github }}">GitHub <span aria-hidden="true">↗</span></a>
      <a href="{{ site.author.orcid }}">ORCID <span aria-hidden="true">↗</span></a>
    </div>
  </div>
  <figure class="portrait">
    <div class="portrait-frame"><img src="{{ '/my_pho_v2.jpg' | relative_url }}" alt="Enze Ma with a city skyline at sunset" width="864" height="1184" fetchpriority="high"></div>
    <figcaption><span class="portrait-caption-line" aria-hidden="true"></span> Based in Chicago, Illinois <span aria-hidden="true">↗</span></figcaption>
  </figure>
</section>

<section class="section news-section" id="news" aria-labelledby="news-title">
  <div class="section-heading"><p class="eyebrow">01 / Latest updates</p><h2 id="news-title">News<span class="name-period">.</span></h2><a class="text-link" href="{{ '/news/' | relative_url }}">All updates <span aria-hidden="true">↗</span></a></div>
  {% include news-list.html limit=5 %}
</section>

<section class="section research-section" id="research" aria-labelledby="research-title">
  <div class="section-heading"><p class="eyebrow">02 / Research</p><h2 id="research-title">AI agents: <br>memory, skills, and reasoning.</h2></div>
  <div class="research-content">
    <p class="section-intro">I study how AI agents understand the world, learn from experience, and act to help people accomplish tasks. My work spans long-term memory, skill learning and use, language-model reasoning, and multimodal learning, with applications in scientific discovery.</p>
    <div class="research-grid">
      <div class="research-topic"><span class="topic-number">01</span><h3>Memory & skills</h3><p>Remembering users and the world, learning reusable skills, and applying them to new tasks.</p></div>
      <div class="research-topic"><span class="topic-number">02</span><h3>Reasoning & evaluation</h3><p>Understanding how language models reason, update beliefs, and learn from feedback.</p></div>
      <div class="research-topic"><span class="topic-number">03</span><h3>Worlds & discovery</h3><p>Multimodal world models and AI systems that help make sense of complex scientific data.</p></div>
    </div>
  </div>
</section>

<section class="section publications-section" id="publications" aria-labelledby="papers-title">
  <div class="section-topline"><div><p class="eyebrow">03 / Selected work</p><h2 id="papers-title">Recent publications</h2></div><a class="text-link" href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">↗</span></a></div>
  <div class="paper-list">
    {% assign selected_papers = site.publications | where: 'selected', true | sort: 'date' | reverse %}
    {% for paper in selected_papers limit:4 %}{% include paper-card.html paper=paper %}{% endfor %}
  </div>
</section>

<section class="section experience-section" id="experience" aria-labelledby="experience-title">
  <div class="section-heading"><p class="eyebrow">04 / The journey</p><h2 id="experience-title">Education <br>& experience</h2></div>
  <ol class="experience-list">
    <li><span class="experience-date">2024 — Present</span><div><h3>University of Illinois Chicago</h3><p>Ph.D. in Computer Science</p><span class="experience-note">Advisor: Prof. Philip S. Yu · BDSC Lab</span></div><span class="experience-tag">Research</span></li>
    <li><span class="experience-date">2024 — 2025</span><div><h3>University of California San Diego</h3><p>Research Intern</p><span class="experience-note">Advisor: Prof. Zhiting Hu</span></div></li>
    <li><span class="experience-date">2022 — 2024</span><div><h3>University of California San Diego</h3><p>M.S. in Computer Science</p></div></li>
    <li><span class="experience-date">2018 — 2022</span><div><h3>University of California San Diego</h3><p>B.S. in Computer Science</p></div></li>
  </ol>
</section>

<section class="contact-section" aria-labelledby="contact-title"><div><p class="eyebrow">Let's connect</p><h2 id="contact-title">Good research starts <br>with a conversation.</h2><p>Always happy to talk about research, collaborations, or an interesting idea.</p></div><a class="contact-link" href="mailto:{{ site.author.email }}">{{ site.author.email }} <span aria-hidden="true">↗</span></a></section>
