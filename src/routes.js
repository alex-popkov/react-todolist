import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from 'components/app/App';
import Layout from 'components/layout/Layout';
import List from 'components/list/List';
import ExecutedList from 'components/executedlist/ExecutedList';

export default(

    <Route
        component={App}
        path='/'>
        <Route
          component={Layout}
          path='/'>
          <IndexRoute
            component={List} />
          <Route
            component={ExecutedList} path='executedlist' />
        </Route>
    </Route>
);