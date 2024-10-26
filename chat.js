// Elements
const chatButton = document.getElementById('chatButton');
const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

// Toggle chat box visibility
chatButton.addEventListener('click', () => {
  chatBox.classList.toggle('hidden');
});

// Handle chat input and display messages
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && chatInput.value.trim() !== '') {
    const message = chatInput.value;
    displayMessage('You', message);
    chatInput.value = ''; // Clear input field
  }
});

// Display message in chat box
function displayMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
}
