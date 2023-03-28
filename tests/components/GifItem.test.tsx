import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import GifItem from '../../src/components/GifItem';

describe('GifItem', () => {
  const title = 'Berserk';
  const url = 'https://media2.giphy.com/media/oNJ3am00JCroA/giphy.gif';

  test('should render', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toBeTruthy();
  });

  test('should match snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('should render the image with the correct src and alt', () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole('img') as HTMLImageElement;
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should render the title', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
