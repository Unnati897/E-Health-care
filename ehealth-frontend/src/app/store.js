// ehealth-frontend/src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import patientsReducer from '../features/patients/patientsSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    patients: patientsReducer
  }
});
