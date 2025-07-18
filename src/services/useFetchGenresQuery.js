import { useFetchGenresQuery } from '../services/TMDB';

const Genres = () => {
  const { data, isLoading, error } = useFetchGenresQuery();

  if (isLoading) return <p>Loading genres...</p>;
  if (error) return <p>Something went wrong.</p>;

  return (
    <ul>
      {data.genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};
