import React from 'react';
import { describe, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import GifGrid from '../../src/components/GifGrid';
import * as customHooks from '../../src/hooks/useFetchGifs';
import { CustomGif } from '../../src/interfaces/CustomGif';

vi.mock('../../src/hooks/useFetchGifs');

describe('GifGrid', () => {
  const category = 'Berserk';

  test('should render the loading state on component mount', () => {
    (customHooks as any).useFetchGifs.mockReturnValue({
      data: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByRole('alert')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test('should render the items when the images are loaded', () => {
    const gifs: CustomGif[] = [
      {
        id: 'oNJ3am00JCroA',
        title: 'Berserk GIF',
        url: 'https://media2.giphy.com/media/oNJ3am00JCroA/giphy.gif',
      },
    ];

    (customHooks as any).useFetchGifs.mockReturnValue({
      data: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img')).toHaveLength(gifs.length);
    expect(screen.getByText(category)).toBeTruthy();
  });
});
