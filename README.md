# Enze Ma — academic website

Personal research website at **https://sora1998.github.io**, built with Jekyll and hosted on GitHub Pages. The main pages use a custom responsive layout with a cool white palette with navy and blue accents inspired by UC San Diego. The repository retains the original [Academic Pages](https://github.com/academicpages/academicpages.github.io) template and its MIT license.

## Update the content

- **Bio, research, and education:** `_pages/about.md`
- **News:** add an entry to `_data/news.yml`. The homepage shows the five most recent entries; `/news/` shows the full archive. Use a quoted ISO date, a short label, Markdown text, and a source URL. State paper-release and acceptance dates accurately.
- **Publications:** add a Markdown file to `_publications/`. Use the existing front matter as a template: `title`, `authors`, `date`, `category`, `venue`, `paperurl`, `short_title`, `summary`, `topic`, and `selected`. Optional links are `codeurl` and `projecturl`. Set `selected: true` to feature a paper on the homepage; the four most recent selected entries appear automatically. Use `conferences` or `preprints` for the category. Keep existing `permalink` values when updating papers so incoming links continue to work.
- **Contact and profiles:** `_config.yml` under `author`.
- **Portrait:** `my_pho_v2.jpg`.

Publication records distinguish preprints from accepted conference papers. PAN links to the v3 author version that includes Enze Ma. Sources and version notes are retained in the relevant publication records. Research information was checked in September 2026.

## Design and behavior

- `_layouts/academic.html`: shared header, metadata, footer.
- `_layouts/publication.html`: paper detail page.
- `_includes/paper-card.html` and `_includes/news-list.html`: reusable content views.
- `assets/css/academic.css`: styles and responsive layouts.
- `assets/js/academic.js`: publication category filters and text search. All content remains available without JavaScript.

The primary layout uses system fonts and local assets; it does not require a JavaScript framework or a frontend build. Legacy template pages continue to use their original layouts.

## Preview locally

Install Ruby and Bundler, then run:

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. For a production-style build:

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

Changes pushed to `master` are built and published by GitHub Pages. Never add access tokens or local credential files to this repository.
