/*
0/ filter all the courses (courses screen)
1/ add new course (courses screen + new course screen)
2/ delete a course (courses screen)
3/ edit a course (courses screen + edit course screen) 
*/
import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {},
    reducers:{

    }
});

export const {} = coursesSlice.actions;
export default coursesSlice.reducer;