import { screen, render } from '@testing-library/react';
import { List } from './list';
import '@testing-library/jest-dom';

describe('Given List component', () => {
  describe('When we instantiate', () => {
    render(<List children={[]}></List>);

    test('It should be in the document', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
