/*
0/ filter all the courses (courses screen)
1/ add new course (courses screen + new course screen)
2/ delete a course (courses screen)
3/ edit a course (courses screen + edit course screen) 
*/
import { createSlice } from '@reduxjs/toolkit';

// import data:
import data from '../../data/testData';

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        courses: data,
    },
    reducers:{
        addCourseData: (state, action) => {
            state.courses.push(action.payload);
        },
        deleteCourseData: (state, action) => {
            state.courses = state.courses.filter(course => course.id != action.payload);
        }
    }
});

export const {addCourseData, deleteCourseData} = courseSlice.actions;
export default courseSlice.reducer;