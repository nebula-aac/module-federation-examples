import React from 'react';
import { Row, Col } from 'antd';
import { loadRemoteModule } from '@softarc/native-federation';
import { sendMessage } from './analytics';
import HeroImage from './HeroImage';

const Button = React.lazy(async () => {
  const module = await loadRemoteModule({
    remoteName: 'dsl',
    exposedModule: './Button',
  });

  return module;
});

const PageMimi = () => {
  sendMessage('PageMimi Loaded');
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '25% 50% 20%',
        gridGap: '1em',
      }}
    >
      <HeroImage src="https://placedog.net/520/280?random" style={{ width: '100%' }} />
      <div>
        <h2>Mimi</h2>
        <p>Mimi is a great dog.</p>
      </div>
      <React.Suspense fallback={<div />}>
        <Button>Adopt this dog!</Button>
      </React.Suspense>
    </div>
  );
};

export default PageMimi;
