import { Todo } from '@react-org/data';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TodosProps {
  todos: Todo[];
}
const StyledTodos = styled.div`
  color: pink;
`;

export function Todos(props: TodosProps) {
  return (
    <ul>
      {props.todos.map((t) => (
        <li className={'todo'}>{t.title}-bbb</li>
      ))}
    </ul>
  );
}
export default Todos;
