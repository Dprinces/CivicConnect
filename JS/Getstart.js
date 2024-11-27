  // Show Sign Up Popup
  function showGetStartedPopup() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    document.body.appendChild(overlay);
  
    // Create popup
    const popup = document.createElement('div');
    popup.className = 'popup shadow-lg';
    popup.innerHTML = `
    <div class="text-center">
      <h2 class="text-xl font-bold text-black mb-2">Please Sign up</h2>
      <p class="text-gray-700 mb-4">Don’t worry, we won’t take your real details</p>
      <div class="flex flex-end justify-end">
        <a href="./SignUp.html" class="bg-green-700 text-white px-4 py-2 rounded">Sign up</a>
      </div>
    </div>
  `;
    document.body.appendChild(popup);
  
    // Add close event listener
    overlay.addEventListener('click', closePopup);
    popup.querySelector('.close-popup').addEventListener('click', closePopup);
  
    function closePopup() {
      document.body.removeChild(popup);
      document.body.removeChild(overlay);
    }
  }
  
  // Add Event Listeners to Create Request Links
  document.querySelectorAll('[data-action="get-started"]').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      showSignUpPopup();
    });
  });
  