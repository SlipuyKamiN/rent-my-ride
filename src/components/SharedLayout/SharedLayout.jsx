import Header from 'components/Header/Header';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
