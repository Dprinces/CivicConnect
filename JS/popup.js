// Function to display a signup popup
function showSignUpPopup() {
  const popup = document.createElement('div');
  popup.style.position = 'fixed';
  popup.style.top = '20%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.width = '300px';
  popup.style.padding = '20px';
  popup.style.backgroundColor = '#fff';
  popup.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  popup.style.borderRadius = '8px';
  popup.style.zIndex = '1000';
  
  popup.innerHTML = `
  <h2 class="text-2xl font-bold text-center text-black-700 mb-4">
    Please Sign Up
  </h2>
  <p class="text-center text-gray-500 mb-6">
    Don't worry, we won't take your real details.
  </p>
  <button class="bg-green-700 text-white text-end px-4 py-2 rounded close-popup">
    <a href="./SignUp.html">Sign Up</a>
  </button>
`;

console.log('Button clicked!');

popup.querySelector('.close-popup').addEventListener('click', () => {
  document.body.removeChild(popup);
});

  // Append popup to body
  document.body.appendChild(popup);


// Add an event listener to all "Sign Up" buttons
document.querySelectorAll('a[href="CreateRequest.html"]').forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action
    showSignUpPopup(); // Call the popup function
  });
});
}