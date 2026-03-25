import { useEffect, useState } from "react";
import RepoCard from "./RepoCard";
import RepoCharts from "./RepoCharts";

export default function RepoList() {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("react");
  const [sort, setSort] = useState("stars");
  const [language, setLanguage] = useState("");

  useEffect(() => {
  fetch(`https://api.github.com/search/repositories?q=${query}+language:${language}&sort=${sort}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.items) {
        setRepos(data.items);
      } else {
        setRepos([]);
      }
    });
}, [query, sort, language]);
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setQuery(search);
    }
  };

  return (
    <div>
      <RepoCharts repos={repos} />  
      <div className="mb-6 flex gap-3">
        <input
          type="text"
          placeholder="Search repositories and press Enter..."
          className="border p-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
        />

        <select
          className="border p-2 rounded"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="stars">Sort by Stars</option>
          <option value="updated">Recently Updated</option>
        </select>
        <select
         className="border p-2 rounded"
         onChange={(e) => setLanguage(e.target.value)}
        >
         <option value="">All Languages</option>
         <option value="javascript">JavaScript</option>
         <option value="python">Python</option>
         <option value="java">Java</option>
         <option value="typescript">TypeScript</option>
         <option value="go">Go</option>
        </select>
      </div>

      {repos.length === 0 ? (
        <p>No repositories found.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
}