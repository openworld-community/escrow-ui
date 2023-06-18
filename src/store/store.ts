import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	persistStore,
	persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//slices
import offcanvasWalletSlice from "./slices/offcanvasWalletSlice.ts";
import userSlice from "./slices/userSlice.ts";
import formCreateSlice from "./slices/formCreateSlice.ts";


const rootReducer = combineReducers({
	offcanvasWallet: offcanvasWalletSlice,
	user: userSlice,
	formCreate: formCreateSlice,
});

const persistConfig = {
	key: 'root',
	blacklist: ['offcanvasWallet','formCreate'],
	storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer : persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistedStore = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


//hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
