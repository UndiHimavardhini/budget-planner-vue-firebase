import RepoList from "../components/RepoList";

export default function Home() {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 min-h-screen dark:text-white">
      <RepoList />
    </div>
  );
}