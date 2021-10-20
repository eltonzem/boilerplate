import { render, screen } from '@testing-library/react';

import Main from '.'; //nosso conponente

describe('<Main />', () => {
  //é o que a gente quer começar a testar
  it('should render the heading', () => {
    //it serve para escrever o que de fato vc quer
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();
  });
});
