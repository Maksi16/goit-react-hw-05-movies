import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { moviesId } = useParams();
  return <div>{moviesId}</div>;
};
