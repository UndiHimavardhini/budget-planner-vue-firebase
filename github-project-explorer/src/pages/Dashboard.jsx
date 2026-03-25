import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RepoList from "../components/RepoList";
import { searchRepositories } from "../utils/githubApi";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearch = async () => {
    if (!search) return;
    const results = await searchRepositories(search);
    setRepos(results);
  };

  return (
    <div className="p-6">
      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      <RepoList repos={repos} />
    </div>
  );
}