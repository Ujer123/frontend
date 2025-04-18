// pages/_app.js
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store/store';
import CartLoader from '@/lib/store/features/cart/CartLoader';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';

const store = makeStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar/>
      <CartLoader /> {/* Loads the cart state from localStorage */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
