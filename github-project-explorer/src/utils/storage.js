export const getBookmarks = () => {
  const bookmarks = localStorage.getItem("bookmarks");
  return bookmarks ? JSON.parse(bookmarks) : [];
};

export const saveBookmark = (repo) => {
  const bookmarks = getBookmarks();

  const exists = bookmarks.find((item) => item.id === repo.id);
  if (exists) return;

  bookmarks.push(repo);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};

export const removeBookmark = (repoId) => {
  const bookmarks = getBookmarks().filter((repo) => repo.id !== repoId);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};
export const saveNote = (repoId, note) => {
  const notes = JSON.parse(localStorage.getItem("repoNotes")) || {};
  notes[repoId] = note;
  localStorage.setItem("repoNotes", JSON.stringify(notes));
};

export const getNote = (repoId) => {
  const notes = JSON.parse(localStorage.getItem("repoNotes")) || {};
  return notes[repoId] || "";
};