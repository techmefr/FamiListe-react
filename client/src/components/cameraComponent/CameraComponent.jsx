import { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import { RefreshCw, Zap } from 'lucide-react';
import './CameraComponent.css';

const CameraComponent = () => {
  const webcamRef = useRef(null);
  const [deviceId, setDeviceId] = useState(null);
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    if (webcamRef.current?.video) {
      const track = webcamRef.current.video.srcObject?.getVideoTracks()[0];
      if (track?.applyConstraints) {
        track.applyConstraints({ advanced: [{ zoom: zoomLevel }] });
      }
    }
  }, [zoomLevel]);

  const handleSwitchCamera = () => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const videoDevices = devices.filter((device) => device.kind === 'videoinput');
      const currentDeviceIndex = videoDevices.findIndex((device) => device.deviceId === deviceId);
      const nextDeviceIndex = (currentDeviceIndex + 1) % videoDevices.length;
      setDeviceId(videoDevices[nextDeviceIndex].deviceId);
    });
  };

  const toggleFlash = () => {
    setFlashEnabled((prev) => !prev);
  };

  const handleZoomChange = (event) => {
    setZoomLevel(Number(event.target.value));
  };

  return (
    <div className="zoom-camera">
      <div className="camera-container">
        <div className="camera-view">
          <Webcam
            audio={false}
            ref={webcamRef}
            videoConstraints={{
              deviceId: deviceId,
              facingMode: 'environment',
              width: 1280,
              height: 720,
            }}
            screenshotFormat="image/jpeg"
            className="camera"
            style={{
              transform: 'rotate(-90deg)',
              filter: flashEnabled ? 'brightness(2)' : 'brightness(1)',
            }}
          />
        </div>
        <div className="camera-controls">
          <button type="button" onClick={handleSwitchCamera} className="camera-button">
            <RefreshCw />
          </button>
          <div className="zoom-slider-container">
            <input
              type="range"
              min="1"
              max="3"
              step="0.1"
              value={zoomLevel}
              onChange={handleZoomChange}
              className="zoom-slider"
            />
          </div>
          <button type="button" onClick={toggleFlash} className="camera-button">
            <Zap color={flashEnabled ? 'yellow' : 'white'} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraComponent;
