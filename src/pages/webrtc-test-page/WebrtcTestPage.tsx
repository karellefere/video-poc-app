import WebRtcPlayer from "./WebRtcPlayer";

const WebrtcTestPage = () => {
    const signalingURL = 'wss://6670cd4d4546e.streamlock.net:443/webrtc-session.json';
    const applicationName = 'live';
    const streamName = 'sensetest.stream';
    //const signalingURL = 'wss://6670cd4d4546e.streamlock.net:443/webrtc-session.json';
    //const applicationName = '---test-operation---';
    //const streamName = '---test-operation---_---drone-1---_camera_0.stream';

    return(
        <WebRtcPlayer 
            signalingURL={signalingURL}
            applicationName={applicationName}
            streamName={streamName} 
            secureTokenHash={""} 
            secureTokenStartTime={0} 
            secureTokenEndTime={0} />         
    );
};

export default WebrtcTestPage;