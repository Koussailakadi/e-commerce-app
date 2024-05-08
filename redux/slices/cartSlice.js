/*
0/ filter the added courses to cart (panel screen)
1/ add a course to cart (panel screen)
2/ remove a course from cart (panel screen)
*/ 
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        addedCourses:[],
    },
    reducers:{
        addCourseCart: (state, action) => {
            //state.addedCourses = [...state.addedCourses,action.payload];
            state.addedCourses.push(action.payload); 
        },
        removeCourseCart: (state, action) => {
            state.addedCourses = state.addedCourses.filter(course => course.id !== action.payload.id);
        }

    }
});

export const { addCourseCart, removeCourseCart} = cartSlice.actions;
export default cartSlice.reducer;