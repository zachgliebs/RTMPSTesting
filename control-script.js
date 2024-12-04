// Initialize communication channel
const channel = new BroadcastChannel('screenControlChannel');

// Function to add a screen to the control panel
function addScreenToControlPanel(screenId) {
  const screenElement = document.createElement('div');
  screenElement.innerHTML = `Screen ${screenId}`;
  const switchButton = document.createElement('button');
  switchButton.textContent = 'Switch to RTMPS';
  switchButton.onclick = function() {
    channel.postMessage({ action: 'switchToRTMP' });
  };
  screenElement.appendChild(switchButton);
  document.getElementById('screenList').appendChild(screenElement);

  const switchFTCButton = document.createElement('button');
  switchFTCButton.textContent = 'Switch to FTC Live';
  switchFTCButton.onclick = function() {
    channel.postMessage({ action: 'switchToFTC' });
  };
  screenElement.appendChild(switchFTCButton);
}

// Add screens (simulate 3 screens for testing)
for (let i = 1; i <= 3; i++) {
  addScreenToControlPanel(i);
}

function toggleAllScreens() {
  // This function sends the command to switch all screens at once
  channel.postMessage({ action: 'switchToRTMP' });
}
