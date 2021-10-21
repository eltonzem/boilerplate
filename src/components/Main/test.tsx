import { render, screen } from '@testing-library/react';

import Main from '.'; //nosso conponente

describe('<Main />', () => {
  //é o que a gente quer começar a testar
  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
