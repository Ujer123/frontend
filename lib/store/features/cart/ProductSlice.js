import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  filteredProducts: [],
  sortOption: '', // e.g., 'price-asc', 'price-desc'
  filterOption: '', // e.g., 'category1'
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      state.filteredProducts = action.payload; // Initialize filteredProducts
    },
    sortProducts(state, action) {
      const sortOption = action.payload;
      state.sortOption = sortOption;

      state.filteredProducts = [...state.filteredProducts].sort((a, b) => {
        if (sortOption === 'price-asc') return a.price - b.price;
        if (sortOption === 'price-desc') return b.price - a.price;
        return 0;
      });
    },
    filterProducts(state, action) {
      const filterOption = action.payload;
      state.filterOption = filterOption;

      if (filterOption) {
        state.filteredProducts = state.products.filter(
          (product) => product.category === filterOption
        );
      } else {
        state.filteredProducts = state.products;
      }
    },
  },
});

export const { setProducts, sortProducts, filterProducts } = productSlice.actions;
export default productSlice.reducer;
