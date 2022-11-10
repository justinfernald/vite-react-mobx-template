import { Link } from 'react-router-dom';

import { Card } from '../components/base';
import { absolute, flexCenter, fullSize, padding } from '../styles';

export function Root() {
  return (
    <div css={[absolute(), fullSize, flexCenter]}>
      <Card
        css={[{ width: 'min(90%, 400px)', height: 'min(90%, 400px)' }, padding('xl')]}
      >
        <h2>
          Welcome to Vite React with MobX and React Router and Emotion CSS with ESLint and
          Prettier along with Storybook template.
        </h2>
        <p>(Rolls right off the tongue, doesn&apos;t it?)</p>
        <Link to="/todo">Go to Todo List</Link>
      </Card>
    </div>
  );
}
