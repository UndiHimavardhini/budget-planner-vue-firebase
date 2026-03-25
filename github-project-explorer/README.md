
# GitHub Project Explorer

A **React-based dashboard** to explore GitHub repositories with advanced features.

**Live Demo:** [https://github-project-explorer-swart.vercel.app/](https://github-project-explorer-swart.vercel.app)

---

## Features

* Search GitHub repositories by username or keyword
* View repository stars, language, and description
* Filter repositories by programming language
* Analytics charts for repository stats
* Add notes **inline** in repository cards
* Bookmark repositories for quick access
* Responsive and modern UI using Tailwind CSS

---

## Technologies Used

* React
* JavaScript (ES6+)
* GitHub REST API
* Chart.js
* Tailwind CSS
* LocalStorage for notes and bookmarks

---

## Project Structure

```text
src/
 ├── components/
 │   ├── RepoCard.jsx         # Repository card with inline notes & bookmark
 │   ├── Filters.jsx
 │   ├── BookmarkPanel.jsx
 │   └── AnalyticsChart.jsx
 │
 ├── pages/
 │   ├── Dashboard.jsx
 │   ├── Trending.jsx
 │   └── Bookmarks.jsx
 │
 ├── utils/
 │   ├── storage.js           # LocalStorage helpers
 │   └── githubApi.js
 │
 ├── App.js
 ├── index.js
 └── index.css
```

> Notes are handled inline in `RepoCard.jsx`. `NoteModal.jsx` is not used.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/UndiHimavardhini/github-project-explorer.git
cd github-project-explorer
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Acknowledgements

* Project developed with guidance from **ChatGPT**

---

## License

Open-source for educational purposes.

---
