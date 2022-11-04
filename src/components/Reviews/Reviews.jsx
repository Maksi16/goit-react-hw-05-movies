import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from '../../API';
import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader/Loader';
import { Titile, Text, Item } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchReviews(movieId)
      .then(data => {
        setReviews(data.data.results);
      })
      .catch(error => {
        console.log(error);
        toast.error('Oops, something went wrong. Repeat one more time!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      {isLoading && <Loader />}
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <Titile>{author}</Titile>
              <Text> {content}</Text>
            </Item>
          ))}
        </ul>
      ) : (
        <Titile>
          Unfortunately, we do not have information about the actors of this
          film.{' '}
        </Titile>
      )}{' '}
    </div>
  );
};

export default Reviews;
