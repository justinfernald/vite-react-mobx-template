import { useNavigate } from 'react-router-dom';

import { Card } from '../components/base';
import TodoList from '../components/todo/TodoList';
import TodoListModel from '../models/TodoListModel';
import { absolute, flexCenter, fullSize, padding } from '../styles';

export interface TodoListPageProps {
  todoListStore: TodoListModel;
}

export function TodoListPage({ todoListStore }: TodoListPageProps) {
  const navigate = useNavigate();
  return (
    <div css={[absolute(), fullSize, flexCenter]}>
      <Card
        css={[{ width: 'min(90%, 400px)', height: 'min(90%, 400px)' }, padding('xl')]}
      >
        <TodoList
          onTodoClick={(id) => {
            navigate(`/todo/${id}`);
          }}
          store={todoListStore}
        />
      </Card>
    </div>
  );
}
