import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import {carApi} from './slices/api'
import carDescriptionReducer from './slices/carDescriptionSlice'

// Import your reducers here (created in the next step)



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = configureStore({
  reducer: {
    auth: authReducer,
    cardescription: carDescriptionReducer,
    [carApi.reducerPath]: carApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(carApi.middleware)
});

export default store



