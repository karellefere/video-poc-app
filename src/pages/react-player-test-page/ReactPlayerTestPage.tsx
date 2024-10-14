import ReactPlayer from "react-player";

/* https://www.npmjs.com/package/react-player */
function ReactPlayerTestPage() {
    return(
        <ReactPlayer 
        url="http://wowza-custom.westeurope.azurecontainer.io:1935/---test-operation---/---test-operation---_---drone-1---_camera_0.stream/playlist.m3u8?wowzatokenendtime=1716907035&wowzatokenstarttime=1716302235&wowzatokenhash=2lkOz6ihDI6b8KkCwDc-Zgw6J99udsVbKKcRx-ndt30=" 
        playing={true}
        controls={true}
         />
    );
}

export default ReactPlayerTestPage;