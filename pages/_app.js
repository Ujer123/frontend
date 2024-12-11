// pages/_app.js
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store/store';
import CartLoader from '@/lib/store/features/cart/CartLoader';
import '@/app/globals.css';

const store = makeStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CartLoader /> {/* Loads the cart state from localStorage */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
