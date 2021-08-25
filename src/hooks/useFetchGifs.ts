import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { CustomGif } from '../interfaces/CustomGif';

interface CustomFetchState {
  data: CustomGif[];
  isLoading: boolean;
}

export const useFetchGifs = (category: string) => {
  const [state, setState] = useState<CustomFetchState>({
    data: [],
    isLoading: true,
  });

  useEffect(() => {
    getGifs(category).then(img => {
      setState({
        data: img,
        isLoading: false,
      });
    });
  }, [category]);

  return state;
};
