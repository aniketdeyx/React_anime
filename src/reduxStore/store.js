import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'

// import { composeWithDevTools } from 'redux-devtools-extension';

export default configureStore({
  reducer: {
    auth: authReducer,
    
  },
// devTools: composeWithDevTools()

})