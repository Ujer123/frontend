'use client';
// import { store } from '@/lib/store/store'
import React, {useRef} from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '@/lib/store/store'
// import { addToCart } from '@/lib/store/features/cart/cartSlice';

export default function StoreProvider ({children}) {
    const storeRef = useRef()
    if (!storeRef.current) {
      // Create the store instance the first time this renders
      storeRef.current = makeStore()
    //   storeRef.current.dispatch(addToCart("testproductid"))
    }
  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider>
  )
}

