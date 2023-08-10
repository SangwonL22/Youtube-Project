import './App.css';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvvider>
    </>
  );
}

export default App;
