import { observer } from 'mobx-react-lite';

import TodoModel from '../../models/TodoModel';
import { flexBetween, margin } from '../../styles';

export interface TodoProps {
  todo: TodoModel;
  onDelete: () => void;
  onClick?: () => void;
}

export const Todo = observer<TodoProps>(({ todo, onDelete, onClick }) => (
  <li css={[{ backgroundColor: '#eee' }, margin('xs'), flexBetween]}>
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
    <span onClick={onClick} css={{ cursor: 'pointer' }}>
      <input
        type="checkbox"
        checked={todo.finished}
        onChange={() => (todo.finished = !todo.finished)}
      />
      <span> {todo.title}</span>
    </span>
    <button onClick={onDelete}>X</button>
  </li>
));
