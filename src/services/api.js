import "dotenv/config";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${process.env.BASE_URL}/movie/popular?api_key=${process.env.API_KEY}`
  );
  const data = response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${process.env.BASE_URL}/search/movie?api_key=${
      process.env.API_KEY
    }&query=${encodeURIComponent(query)}`
  );
  const data = response.json();
  return data.results;
};
