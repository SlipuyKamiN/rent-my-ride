import SharedLayout from 'components/SharedLayout/SharedLayout';
import CatalogPage from 'pages/Catalog';
import FavoritesPage from 'pages/Favorites';
import HomePage from 'pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';

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
