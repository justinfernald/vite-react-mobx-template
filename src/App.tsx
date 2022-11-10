import './App.css';

import TodoListModel from './models/TodoListModel';

export const todoListStore = new TodoListModel();

import './App.css';

import { createHashRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage } from './routes/ErrorPage';
import { Root } from './routes/RootPage';
import { TodoListPage } from './routes/TodoListPage';
import { TodoPage, todoPageLoader } from './routes/TodoPage';

// A hash router is used here such that the app can be deployed to GitHub pages
// depending on your deployment strategy, you may want to use a different router
const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/todo/:id',
    element: <TodoPage todoListStore={todoListStore} />,
    loader: todoPageLoader,
  },
  {
    path: '/todo',
    element: <TodoListPage todoListStore={todoListStore} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
