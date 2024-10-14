import { configureStore } from "@reduxjs/toolkit";
import playSettingsReducer from '../slices/playSettingsSlice';
import webrtcPlayStartReducer from '../slices/webrtcPlayStartSlice';

export const store= configureStore({
    reducer: {
        playSettings: playSettingsReducer,
        webrtcPlayStart: webrtcPlayStartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
      }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;