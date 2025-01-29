import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, vi } from 'vitest';

describe('Hello World', () => {
  it('should log hello world', () => {
    const { getByText } = render(<h1>Hello World</h1>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
