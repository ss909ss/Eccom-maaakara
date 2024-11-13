import { User } from '../../types/User';
import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../../services/auth';
import { RootState } from '../store/store';


const loadUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  console.log("Loaded user from localStorage:", user);  
  return user ? JSON.parse(user) : null;
};


interface InitialState {
  user: User & { token: string } | null;
  isAuthenticated: boolean;
}

const initialState: InitialState = {
  user: loadUserFromLocalStorage(),
  isAuthenticated: !!loadUserFromLocalStorage(),
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      if (action.payload && action.payload.token) {
          state.user = action.payload;
          state.isAuthenticated = true;
          localStorage.setItem('user', JSON.stringify(action.payload));
          localStorage.setItem('token', action.payload.token);  
          console.log("Token saved to localStorage:", localStorage.getItem('token'));  
      }
  })
      .addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    });
  },
});

export const { logout } = slice.actions;
export default slice.reducer;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectUser = (state: RootState) =>
  state.auth.user;
