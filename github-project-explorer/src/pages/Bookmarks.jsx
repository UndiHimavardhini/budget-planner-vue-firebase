import { useEffect, useState } from "react";
import { getBookmarks, removeBookmark } from "../utils/storage";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);

  const handleRemove = (id) => {
    removeBookmark(id);
    setBookmarks(getBookmarks());
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">⭐ Bookmarked Repositories</h1>

      {bookmarks.length === 0 && <p>No bookmarks yet.</p>}

      {bookmarks.map((repo) => (
        <div key={repo.id} className="border p-4 rounded mb-4">
          <h2 className="font-bold">{repo.name}</h2>
          <p>{repo.description}</p>

          <button
            onClick={() => handleRemove(repo.id)}
            className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}