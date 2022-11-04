import Spinner from 'components/Spinner';
import React from 'react';
import RootPage from './Root';

const LoadingPage: React.FC = () => {
  return (
    <RootPage header="loading">
      <Spinner />
    </RootPage>
  );
};
export default LoadingPage;
