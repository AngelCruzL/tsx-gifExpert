import { describe } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('useFetchGifs', function () {
  it('should return the initial state', function () {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const { data, isLoading } = result.current;

    expect(data).toEqual([]);
    expect(isLoading).toBeTruthy();
  });

  it('should return an array of images and isLoading in false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Berserk')
    );
    await waitForNextUpdate();

    const { data, isLoading } = result.current;

    expect(data.length).toBe(10);
    expect(isLoading).toBeFalsy();
  });
});
