const BASE_URL = "https://api.github.com";

export const searchRepositories = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/repositories?q=${query}&sort=stars&order=desc`
  );

  const data = await response.json();
  return data.items;
};

export const getTrendingRepositories = async () => {
  const response = await fetch(
    `${BASE_URL}/search/repositories?q=stars:>10000&sort=stars&order=desc`
  );

  const data = await response.json();
  return data.items;
};