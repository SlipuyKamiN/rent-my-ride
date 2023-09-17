import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomePage from 'pages/Home';
const CatalogPage = lazy(() => import('pages/Catalog'));
const FavoritesPage = lazy(() => import('pages/Favorites'));

const App = () => {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
