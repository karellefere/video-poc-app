import { useEffect, useRef } from "react";
import { WebRtcPlayerProps } from "../webrtc-test-page/types/playSettingsTypes";
import { WowzaWebRTCPlayer } from "wowza-webrtc-player";

const WowzaWebRtcPlayer = (props: WebRtcPlayerProps) => {
    const videoElement = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if(videoElement.current != null){
            const player = new WowzaWebRTCPlayer(videoElement.current, {
                sdpUrl: props.signalingURL,
                applicationName: props.applicationName,
                streamName: props.streamName,
                secureToken: {hash: props.secureTokenHash, starttime: props.secureTokenStartTime, endtime: props.secureTokenEndTime}
            });

            player.playRemote().then();
        }
    },[videoElement, props]);

    return (
        <video id="player-video" ref={videoElement} autoPlay playsInline muted controls></video>
    );
};

export default WowzaWebRtcPlayer;