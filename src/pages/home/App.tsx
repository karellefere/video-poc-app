import PageLayout from '../../components/layout';
import FlowplayerTestPage from '../flowplayer-test-page/FlowplayerTestPage';
import FluidPlayerTestPage from '../fluid-player-test-page/FluidPlayerTestPage';
import ReactHlsPlayerTestPage from '../react-player-test-page';
import VideoJsTestPage from '../video-js-test-page';
import WebrtcTestPage from '../webrtc-test-page/WebrtcTestPage';
import WowzaWebRtcPlayerTestPage from '../wowza-webrtc-player-page/WowzaWebRtcPlayerTestPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<VideoJsTestPage />} />
        <Route path="/videojs" element={<VideoJsTestPage />} />
        <Route path="/ReactHlsPlayer" element={<ReactHlsPlayerTestPage />} />
        <Route path="/FluidPlayer" element={<FluidPlayerTestPage />} />
        <Route path="/FlowPlayer" element={<FlowplayerTestPage />} />
        <Route path="/webrtc" element={<WebrtcTestPage />} />
        <Route path="/wowzawebrtcplayer" element={<WowzaWebRtcPlayerTestPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
