import { describe, expect, it } from 'vitest';

import { getGifs } from '../../src/helpers/getGifs';

describe('getGifs', function () {
  it('should return an array of gifs', async function () {
    const gifs = await getGifs('One Punch');
    expect(gifs).toBeInstanceOf(Array);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
