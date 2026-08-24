# Pulseboard

A small dashboard built for the practical challenge. It pulls public mock data from [JSONPlaceholder](https://jsonplaceholder.typicode.com) and turns it into a quick operational overview.

## Live demo

The dashboard is published with GitHub Pages:

[https://pedroemanuel42.github.io/visionecommerce-api/](https://pedroemanuel42.github.io/visionecommerce-api/)

## What it shows

- Number of users and posts returned by the API
- Completed and pending tasks
- Task completion rate, the main useful metric:

```text
completed tasks / total tasks * 100
```

The current mock data returns 90 completed tasks out of 200, resulting in a 45% completion rate.

## Run locally

```bash
npm install
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000).

The dashboard calls these public endpoints directly from the browser:

- `GET /users`
- `GET /posts`
- `GET /todos`

An internet connection is required because the mock data comes from JSONPlaceholder.

## Deployment

GitHub Actions publishes the `public/` directory to GitHub Pages whenever changes are pushed to the `main` branch. The workflow is defined in `.github/workflows/deploy-pages.yml`.

## Implementation note

The Node server only serves `public/index.html`. The browser performs the API requests, handles loading and error states, calculates the metrics, and renders the results. The `Refresh data` button repeats all three requests.
