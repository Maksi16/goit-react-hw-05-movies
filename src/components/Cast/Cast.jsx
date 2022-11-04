import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchFilmsCast } from '../../API';
import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader/Loader';
import { List, Img, Item, Titile, Text } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const noImages = `https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png`;
  const filmPosterUrl = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    setIsLoading(true);
    fetchFilmsCast(movieId)
      .then(data => {
        setCast(data.data.cast);
      })
      .catch(error => {
        console.log(error);
        toast.error('Oops, something went wrong. Repeat one more time!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <div>
      {isLoading && <Loader />}
      {cast.length !== 0 ? (
        <List>
          {cast.map(({ id, name, profile_path, character }) => (
            <Item key={id}>
              {profile_path ? (
                <Img src={`${filmPosterUrl}${profile_path}`} alt={name} />
              ) : (
                <Img src={`${noImages}`} alt={name} />
              )}
              <Titile>{name}</Titile>
              <Text>Character: {character}</Text>
            </Item>
          ))}
        </List>
      ) : (
        <Titile>
          Unfortunately, we do not have information about the actors of this
          film.{' '}
        </Titile>
      )}{' '}
    </div>
  );
};
export default Cast;
