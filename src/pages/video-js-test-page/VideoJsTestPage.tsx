import React from "react";
import VideoJS from "../../components/VideoJs/VideoJs";
import videojs from "video.js";
import Player from "video.js/dist/types/player";

/* https://videojs.com/ */

type VideoJsTestProps = {
    streamUrl: string
}

function VideoJsTest(props: VideoJsTestProps) {
    const playerRef = React.useRef<Player | null>(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    //sources: [{
      //src: props.streamUrl,
      //type: 'application/x-mpegURL'
    //}]
  };

  const handlePlayerReady = (player: Player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });

    player.on('pause', function() {

        // Modals are temporary by default. They dispose themselves when they are
        // closed; so, we can create a new one each time the player is paused and
        // not worry about leaving extra nodes hanging around.
        var modal = player.createModal('This is a modal!');
      
        // When the modal closes, resume playback.
        modal.on('modalclose', function() {
          player.play();
        });
      });

  };

  return (
    <>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </>
  );
}

function VideoJsTestPage(){
    return(
        <VideoJsTest streamUrl="http://wowza-custom.westeurope.azurecontainer.io:1935/---test-operation---/---test-operation---_---drone-1---_camera_0.stream/playlist.m3u8?wowzatokenendtime=1717515994&wowzatokenstarttime=1716911194&wowzatokenhash=bo9OjiCB-rL_GW6ezmnO1BukvOmQfFEsqIXb3h576tg=" />
    )
}

export default VideoJsTestPage;