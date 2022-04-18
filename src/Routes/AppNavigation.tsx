import React, { FC, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import Page404 from '../Screens/Page404';
import lazyImport from '../lazy-import';
import ContactMe from 'Screens/ContactMe';

const Appnavigation: FC = () => {
  return (
    <>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path="/register" exact component={ContactMe} />
          <Route path="/*" exact component={Page404} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Appnavigation;
