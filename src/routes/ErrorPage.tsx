import { Link } from 'react-router-dom';

import { Card } from '../components/base';
import { absolute, flexCenter, fullSize, padding } from '../styles';

export function ErrorPage() {
  return (
    <div css={[absolute(), fullSize, flexCenter]}>
      <Card
        css={[{ width: 'min(90%, 400px)', height: 'min(90%, 400px)' }, padding('xl')]}
      >
        <h2>404</h2>
        <Link to="/">Go home</Link>
      </Card>
    </div>
  );
}
