import React, { FC, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import ContactMe from 'Screens/ContactMe';
import HomeScreen from 'Screens/HomeScreen';
import Page404 from 'Screens/Page404';
import EventsScreen from 'Screens/EventsScreen';
import TeamsScreen from 'Screens/TeamsScreen';
import SponsorsPage from 'Screens/SponsorsScreen';

const Appnavigation: FC = () => {
  return (
    <>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/events" exact component={EventsScreen} />
          <Route path="/teams" exact component={TeamsScreen} />
          <Route path="/register" exact component={ContactMe} />
          <Route path="/sponsors" exact component={SponsorsPage} />
          <Route path="/*" exact component={Page404} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Appnavigation;
