/*
0/ filter the payed courses (purchased screen)
1/ pay for the course in the panel (panel screen)
2/ show the payed courses details (purchased screen)
3/ hide the payed courses details (purchased screen)
*/
import { createSlice } from '@reduxjs/toolkit';
const purchasedSlice = createSlice({
    name:"purchase",
    initialState:{
        payedCourses:[],
    },
    reducers:{
        addCoursePurchased: (state, action) => {
            state.payedCourses= action.payload;
        },
    }
});

export const { addCoursePurchased } = purchasedSlice.actions;
export default purchasedSlice.reducer;
