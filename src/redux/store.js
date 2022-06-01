import { 
    configureStore, 
    combineReducers
} from "@reduxjs/toolkit"
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import myBook from './favouritesSlice'
import readDone from './readSlice'
import filter from './filterSlice'
import {commentsApi} from "./commetsSrvice"

const rootReducer = combineReducers({
    myBook,
    readDone,
    filter,
    [commentsApi.reducerPath]: commentsApi.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter', 'commentsApi']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(commentsApi.middleware),
})

export const persistor = persistStore(store)
