import { LoaderFunction, redirect, useLoaderData, useNavigate } from 'react-router-dom';

import { todoListStore } from '../App';
import { Card } from '../components/base';
import { Todo } from '../components/todo/Todo';
import TodoListModel from '../models/TodoListModel';
import TodoModel from '../models/TodoModel';
import { absolute, flexCenter, fullSize, padding } from '../styles';

export interface TodoPageProps {
  todoListStore: TodoListModel;
}

export interface TodoPageLoaderData {
  id: number;
  todo: TodoModel;
}
export const todoPageLoader: LoaderFunction = ({
  params,
}): TodoPageLoaderData | Response => {
  const id = parseFloat(params.id ?? '');
  const todo = todoListStore.getTodoById(id);
  if (!todo) {
    return redirect('/todo');
  }
  return { id, todo };
};

export function TodoPage({ todoListStore }: TodoPageProps) {
  const { todo } = useLoaderData() as TodoPageLoaderData;
  const navigate = useNavigate();

  return (
    <div css={[absolute(), fullSize, flexCenter]}>
      <Card
        css={[{ width: 'min(90%, 400px)', height: 'min(90%, 400px)' }, padding('xl')]}
      >
        <Todo
          todo={todo}
          onDelete={() => {
            todoListStore.removeTodo(todo);
            navigate('/todo');
          }}
        />
      </Card>
    </div>
  );
}
