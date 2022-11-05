import { fetchFilmsHomepage } from '../../API';
import { useState, useEffect } from 'react';
import { Wrap, Titile, NavItem } from './Home.styled';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader/Loader';

const Home = () => {
  // console.log(fetchFilmsHomepage());

  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

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
      <ul>
        {films.map(({ id, original_title, name }) => (
          <li key={id}>
            <NavItem
              to={`movies/${id}`}
              state={{
                from: location,
              }}
            >
              {original_title}
              {name}
            </NavItem>
          </li>
        ))}
      </ul>
    </Wrap>
  );
};
export default Home;
