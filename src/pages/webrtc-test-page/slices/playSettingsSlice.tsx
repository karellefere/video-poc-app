import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PlayFlags, PlaySettingsState, WebRtcPlayerProps } from "../types/playSettingsTypes";

const initialState: PlaySettingsState = {
    signalingURL: '',
    applicationName: '',
    streamName: '',
    playStart: false,
    playStarting: false,
    playStop: false,
    playStopping: false
}

const playSettingsSlice = createSlice({
    name: 'playSettings',
    initialState,
    reducers: {
        setInitialSettings(state, action: PayloadAction<WebRtcPlayerProps>){
            state.signalingURL = action.payload.signalingURL;
            state.applicationName = action.payload.applicationName;
            state.streamName = action.payload.streamName;
            state.playStart = true;
        },
        setSignalUrl(state, action: PayloadAction<string>){
            state.signalingURL = action.payload;
        },
        setApplicationName(state, action: PayloadAction<string>){
            state.applicationName = action.payload;
        },
        setStreamName(state, action: PayloadAction<string>){
            state.streamName = action.payload;
        },
        setPlayFlags(state, action: PayloadAction<PlayFlags>){
            if(action.payload.playStart != null) state.playStart = action.payload.playStart;
            if(action.payload.playStarting != null) state.playStarting = action.payload.playStarting;
            if(action.payload.playStop != null) state.playStop = action.payload.playStop;
            if(action.payload.playStopping != null) state.playStart = action.payload.playStopping;
        }
    }
});

export const {setSignalUrl, setApplicationName, setStreamName, setPlayFlags, setInitialSettings } = playSettingsSlice.actions;
export default playSettingsSlice.reducer;