import { userActionTypes } from "./user.type";

export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
});

export const signUpStudentStart = ()=>({
    type: userActionTypes.SIGN_UP_STUDENT_START
});

export const signUpStudentSuccess = user=>({
    type: userActionTypes.SIGN_UP_STUDENT_SUCCESS,
    payload: user
});

export const signUpStudentFailure = error =>({
    type: userActionTypes.SIGN_UP_STUDENT_FAILURE,
    payload: error
});


export const signInStudentStart =()=>({
    type: userActionTypes.SIGN_IN_STUDENT_START
});

export const signInStudentSuccess = user=>({
    type: userActionTypes.SIGN_IN_STUDENT_SUCCESS,
    payload: user
});

export const signInStudentFailure = error =>({
    type: userActionTypes.SIGN_IN_STUDENT_FAILURE,
    payload: error
});