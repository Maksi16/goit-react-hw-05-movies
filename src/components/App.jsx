import { Route, Routes } from 'react-router-dom';
import { HeaderLayout } from './HeaderLayout';
import { Home } from '../page/Home/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
