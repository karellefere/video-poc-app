import WowzaWebRtcPlayer from "./WowzaWebRtcPlayer";

const WowzaWebRtcPlayerTestPage = () => {
    //const signalingURL = 'wss://6670cd4d4546e.streamlock.net:443/webrtc-session.json';
    //const applicationName = 'live';
    //const streamName = 'sensetest.stream';
    
    const signalingURL = 'wss://6670cd4d4546e.streamlock.net:443/webrtc-session.json';
    const applicationName = '---test-operation---';
    const streamName = '---test-operation---_---drone-1---_camera_0.stream';
    const secureTokenHash = 'iBB6L1ZlWTXzmXT6k72x3n9oWvtQR4_A-m6xTW7EksY=';
    const secureTokenStartTime = 1721917121;
    const secureTokenEndTime = 1753453121;



    return(
        <WowzaWebRtcPlayer 
            signalingURL={signalingURL}
            applicationName={applicationName}
            streamName={streamName} 
            secureTokenHash={secureTokenHash} 
            secureTokenStartTime={secureTokenStartTime} 
            secureTokenEndTime={secureTokenEndTime} />         
    );
};

export default WowzaWebRtcPlayerTestPage;