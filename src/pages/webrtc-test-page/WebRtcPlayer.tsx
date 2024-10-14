import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setInitialSettings, setPlayFlags } from "./slices/playSettingsSlice";
import { setAudioTrack, setConnected, setPeerConnection, setVideoTrack, setWebsocket } from "./slices/webrtcPlayStartSlice";
import startPlay from "./webrtc/startPlay";
import stopPlay from "./webrtc/stopPlay";
import { WebRtcPlayerProps } from "./types/playSettingsTypes";

const WebRtcPlayer = (props: WebRtcPlayerProps) => {
    const videoElement = useRef<HTMLVideoElement>(null);

    const dispatch = useAppDispatch();
    const playSettings = useAppSelector((state) => state.playSettings);
    const { peerConnection, websocket, connected, audioTrack, videoTrack } = useAppSelector((state) => state.webrtcPlayStart);

    if(!playSettings.playStarting && !connected){
        dispatch(setInitialSettings(props));
    }

    useEffect(() => {
        if (playSettings.playStart && !playSettings.playStarting && !connected)
        {
          dispatch(setPlayFlags({playStart: false, playStarting: true}));
          startPlay(playSettings,websocket,{
            onError: (error) => {
              console.log(error.message);
            },
            onConnectionStateChange: (result) => {
              dispatch(setConnected(result.connected));
            },
            onSetPeerConnection: (result) => {
              dispatch(setPeerConnection(result.peerConnection));
            },
            onSetWebsocket: (result) => {
              dispatch(setWebsocket(result.websocket));
            },
            onPeerConnectionOnTrack: (event) => {
              if (event.track != null && event.track.kind != null)
              {
                if (event.track.kind === 'audio')
                {
                  dispatch(setAudioTrack(event.track));
                }
                else if (event.track.kind === 'video')
                {
                  dispatch(setVideoTrack(event.track));
                }
              }
            }
          });
        }        
        if (playSettings.playStarting && connected)
        {
            dispatch(setPlayFlags({ playStarting: false }));
        }

        if (playSettings.playStop && !playSettings.playStopping && connected)
        {
            dispatch(setPlayFlags({ playStop: false, playStopping: true }));
            stopPlay(peerConnection, websocket,{
                onSetPeerConnection: (result) => {
                dispatch(setPeerConnection(result.peerConnection));
                },
                onSetWebsocket: (result) => {
                dispatch(setWebsocket(result.websocket));
                },
                onPlayStopped: () => {
                dispatch(setConnected(false));
                }
            });
        }
        if (playSettings.playStopping && !connected)
        {
            dispatch(setPlayFlags({playStopping:false}));
        }
    }, [dispatch,videoElement,playSettings,peerConnection,websocket,connected]);

    useEffect(() => {

        if (connected)
        {
          let newStream = new MediaStream();
          if (audioTrack != null)
            newStream.addTrack(audioTrack);
    
          if (videoTrack != null)
            newStream.addTrack(videoTrack);
    
          if (videoElement != null && videoElement.current != null)
            videoElement.current.srcObject = newStream;
        }
        else
        {
          if (videoElement != null && videoElement.current != null)
            videoElement.current.srcObject = null;
        }
    
      }, [audioTrack, videoTrack, connected, videoElement]);
    
      if (!connected)
        return null;

    return (
        <video id="player-video" ref={videoElement} autoPlay playsInline muted controls></video>
    );
}

export default WebRtcPlayer;
