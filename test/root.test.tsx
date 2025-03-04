import {
  ReactTestingLibrary,
  createRemixStub,
  renderComponent,
} from '@kurocado-studio/qa';
import React from 'react';

import { Welcome } from 'app/components/Welcome';
import { Layout } from 'app/root';

const { screen } = ReactTestingLibrary;

describe('App component', () => {
  beforeEach(() => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => (
          <Layout>
            <Welcome />
          </Layout>
        ),
      },
    ]);

    renderComponent(<RemixStub />);
  });

  test('should display the loader initially', () => {
    expect(screen.getByTestId(/loader/i)).toBeInTheDocument();
  });
});
