import { fetchFilmsHomepage } from '../../API';
import { useState, useEffect } from 'react';
import { Wrap, Titile, NavItem, Img, Item, List } from './Home.styled';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader/Loader';

const Home = () => {
  // console.log(fetchFilmsHomepage());

  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const filmPosterUrl = `https://image.tmdb.org/t/p/w500`;
  const noImages = `https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png`;

  useEffect(() => {
    setIsLoading(true);
    fetchFilmsHomepage()
      .then(data => {
        const { results, total_results } = data.data;
        // console.log(results);
        setFilms(results);
        if (total_results === 0) {
          toast.warn('Oops, we did not find anything for your request!');
        }
      })
      .catch(error => {
        console.log(error);
        toast.error('Oops, something went wrong. Repeat one more time!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Wrap>
      <Titile>Trending today</Titile>
      {isLoading && <Loader />}
      <List>
        {films.map(({ id, original_title, title, poster_path }) => (
          <Item key={id}>
            <NavItem
              to={`movies/${id}`}
              state={{
                from: location,
              }}
            >
              {poster_path ? (
                <Img src={`${filmPosterUrl}${poster_path}`} alt={title} />
              ) : (
                <Img src={`${noImages}`} alt={title} />
              )}
              {original_title}
              {/* {name} */}
            </NavItem>
          </Item>
        ))}
      </List>
    </Wrap>
  );
};
export default Home;
