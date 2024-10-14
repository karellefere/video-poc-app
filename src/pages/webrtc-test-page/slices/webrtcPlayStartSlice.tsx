import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { webrtcPlayStartState } from "../types/webRtcPlayStartTypes";

const initialState: webrtcPlayStartState = {
    websocket: undefined,
    peerConnection: undefined,
    audioTrack: undefined,
    videoTrack: undefined,
    connected: false
};

const webrtcPlayStartSlice = createSlice({
    name: 'webrtcPlayStart',
    initialState,
    reducers: {
        setWebsocket(state, action: PayloadAction<any>){
            state.websocket = action.payload;
        },
        setPeerConnection(state, action: PayloadAction<any>){
            state.peerConnection = action.payload;
        },
        setAudioTrack(state, action: PayloadAction<any>){
            state.audioTrack = action.payload;
        },
        setVideoTrack(state, action: PayloadAction<any>){
            state.videoTrack = action.payload;
        },
        setConnected(state, action: PayloadAction<any>){
            state.connected = action.payload;
        }
    },
});

export const { setWebsocket, setPeerConnection, setAudioTrack, setVideoTrack, setConnected } = webrtcPlayStartSlice.actions;
export default webrtcPlayStartSlice.reducer;