// Initialize communication channel
const channel = new BroadcastChannel('screenControlChannel');

// Listen for control messages
channel.onmessage = function(event) {
  if (event.data.action === 'switchToRTMP') {
    switchToRTMP();
  } else if (event.data.action === 'switchToFTC') {
    switchToFTC();
  }
};

function switchToRTMP() {
  document.getElementById('ftcLive').classList.add('hidden');
  document.getElementById('videoContainer').classList.remove('hidden');
}

function switchToFTC() {
  document.getElementById('videoContainer').classList.add('hidden');
  document.getElementById('ftcLive').classList.remove('hidden');
}

// Check for an initial state or default to RTMP
switchToRTMP();
