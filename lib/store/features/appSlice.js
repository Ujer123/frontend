import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    backendUrl: "https://backend-tfcp.onrender.com",
    isLoggedIn: false,
    userData: null,
    loading: false,
    error: null,
};

export const fetchUserData = createAsyncThunk(
    "app/fetchUserData",
    async (userId, {getState, rejectWithValue}) => {
        try {
            const backendUrl = getState().app;
        const response = await axios.get(`${backendUrl}/user/${userId}`);
        return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
        
    }
);

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers:{
        setIsLoggedIn: (state, action)=>{
            state.isLoggedIn = action.payload;
            if(!action.payload){
                state.userData = null;
            }
        },
        setUserData: (state, action)=>{
            state.userData = action.payload;
        },
        clearUserData: (state)=> {
            state.userData = null;
            state.isLoggedIn = false;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchUserData.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUserData.fulfilled, (state, action)=>{
            state.loading = false;
            if(action.payload.success){
                state.userData = action.payload.userData;
                state.isLoggedIn = true;
            }
        })
        .addCase(fetchUserData.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export const {setIsLoggedIn, setUserData, clearUserData} = appSlice.actions;
export default appSlice.reducer;