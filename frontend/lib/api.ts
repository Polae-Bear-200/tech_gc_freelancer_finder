export async function fetchRecommendations(query: string) {
  const response = await fetch(`/api/recommend?q=${encodeURIComponent(query)}`);
  return response.json();
}