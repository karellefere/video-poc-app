import React, { useRef } from "react";
import Flowplayer, { useFlowplayer } from "@flowplayer/react-flowplayer";
import OVPPlugin from "@flowplayer/player/plugins/ovp"
import HLSPlugin from "@flowplayer/player/plugins/hls"
import flowplayer from "@flowplayer/player"

/* https://developer.wowza.com/docs/wowza-flowplayer/player/components/react/ */

//flowplayer(chromecast, HLSPlugin, OVPPlugin);

flowplayer(HLSPlugin, OVPPlugin);

type FlowplayerTestProps = {
    streamUrl: string
}

function FlowplayerTest(props: FlowplayerTestProps) {
  const playerRef = useRef(null)
  //const playerApi = useFlowplayer(playerRef)


  const token = 'eyJraWQiOiJUVUlXd3RQeHRPcUQiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjIjoie1wiYWNsXCI6MzgsXCJpZFwiOlwiVFVJV3d0UHh0T3FEXCJ9IiwiaXNzIjoiRmxvd3BsYXllciJ9.hzYwOgBWDFjA8px16ROR178u4Toyfcempd2P5yGe7ZNfHPmkk4FkPn-Z1UiyA5qK7Edv0JxQgnJgf9qqRV88Ig';

  return (
      <Flowplayer 
        token={token} 
        ref={playerRef}
        
        src={
        [{
          src: props.streamUrl,
          type: 'hls'
        },]} />
  );
}

function FlowplayerTestPage(){
    return(
        <FlowplayerTest streamUrl="http://wowza-custom.westeurope.azurecontainer.io:1935/---test-operation---/---test-operation---_---drone-1---_camera_0.stream/playlist.m3u8?wowzatokenendtime=1717515994&wowzatokenstarttime=1716911194&wowzatokenhash=bo9OjiCB-rL_GW6ezmnO1BukvOmQfFEsqIXb3h576tg=" />
    )
}

export default FlowplayerTestPage;