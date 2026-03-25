import { useState } from "react";
import { saveNote, getNote } from "../utils/storage";
import { saveBookmark } from "../utils/storage";

export default function RepoCard({ repo }) {
  const [note, setNote] = useState(getNote(repo.id));
  const handleBookmark = () => {
    saveBookmark(repo);
    alert("Repository bookmarked ⭐");
  };

  return (
    <div className="border rounded p-4 shadow">
      <h2 className="text-xl font-bold">{repo.name}</h2>

      <p className="text-gray-600">
        {repo.description || "No description"}
      </p>

      <textarea
        placeholder="Write notes about this repository..."
        className="border p-2 rounded w-full mt-3"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button
       onClick={() => saveNote(repo.id, note)}
       className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
      >
       Save Note
      </button>

      <div className="flex justify-between mt-3">
        <span>⭐ {repo.stargazers_count}</span>
        <span>{repo.language}</span>
      </div>

      {/* ADDED THIS PART */}
      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 block mt-2"
      >
        Visit Repository
      </a>

      <button
        onClick={handleBookmark}
        className="mt-3 bg-yellow-400 px-3 py-1 rounded"
      >
        Bookmark
      </button>
    </div>
  );
}