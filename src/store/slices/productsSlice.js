import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching products (will use mock data for now)
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (filters = {}) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Import mock data
    const { mockProducts } = await import('../../data/mockData');
    
    let filteredProducts = mockProducts;
    
    // Apply filters
    if (filters.category && filters.category !== 'all') {
      filteredProducts = filteredProducts.filter(product => 
        product.category === filters.category
      );
    }
    
    if (filters.priceRange) {
      filteredProducts = filteredProducts.filter(product => 
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
    }
    
    if (filters.search) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    return filteredProducts;
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const { mockProducts } = await import('../../data/mockData');
    return mockProducts.find(product => product.id === productId);
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    currentProduct: null,
    loading: false,
    error: null,
    categories: ['all', 'men', 'women', 'kids', 'accessories'],
    totalPages: 1,
    currentPage: 1,
  },
  reducers: {
    clearCurrentProduct: (state) => {
      state.currentProduct = null;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.totalPages = Math.ceil(action.payload.length / 12);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearCurrentProduct, setCurrentPage } = productsSlice.actions;
export default productsSlice.reducer; 