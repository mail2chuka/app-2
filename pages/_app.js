import { StoreProvider } from '@/utils/Store';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />{' '}
    </StoreProvider>
  );
}
