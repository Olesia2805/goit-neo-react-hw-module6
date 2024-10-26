import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';


const rootReducer = combineReducers({})

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
