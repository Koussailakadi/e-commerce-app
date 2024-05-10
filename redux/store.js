import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import courseReducer from './slices/courseSlice';
import purchasedReducer from './slices/purchaseSlice';

const store = configureStore({
    reducer:{
        cart: cartReducer,
        courses: courseReducer,
        purchase: purchasedReducer,
    }
});

export default store;