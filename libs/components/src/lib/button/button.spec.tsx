import Button from './button';
import { render } from '@testing-library/react';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>Hello</Button>);
    expect(baseElement).toBeTruthy();
  });
});
