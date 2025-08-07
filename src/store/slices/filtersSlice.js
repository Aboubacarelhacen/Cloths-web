import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    category: 'all',
    priceRange: [0, 1000],
    search: '',
    sortBy: 'featured', // featured, price-low, price-high, newest
    size: '',
    color: '',
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    clearFilters: (state) => {
      state.category = 'all';
      state.priceRange = [0, 1000];
      state.search = '';
      state.sortBy = 'featured';
      state.size = '';
      state.color = '';
    },
  },
});

export const {
  setCategory,
  setPriceRange,
  setSearch,
  setSortBy,
  setSize,
  setColor,
  clearFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer; 