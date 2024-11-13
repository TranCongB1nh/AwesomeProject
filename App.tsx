import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import TaskManager from './src/components/TaskManager';

const App = () => (
  <Provider store={store}>
    <TaskManager />
  </Provider>
);

export default App;
