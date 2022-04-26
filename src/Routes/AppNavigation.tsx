import React, { FC, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import ContactMe from 'Screens/ContactMe';
import HomeScreen from 'Screens/HomeScreen';

const Appnavigation: FC = () => {
  return (
    <>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/register" exact component={ContactMe} />
          <Route path="/*" exact component={HomeScreen} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Appnavigation;
