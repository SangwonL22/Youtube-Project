import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import FakeYoutube from '../api/fakeYoutube';

export const YoutubeApiContext = createContext();

const youtube = new FakeYoutube(); //new Youtube();

export function YoutubeApiProvvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
