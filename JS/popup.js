// Function to display a login popup
function showLogInPopup() {
  const popup = document.createElement('div');
  popup.style.position = 'fixed';
  popup.style.top = '20%';
  popup.style.left = '80%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.width = '300px';
  popup.style.padding = '20px';
  popup.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  popup.style.borderRadius = '8px';
  popup.style.zIndex = '1000';

  popup.innerHTML = ` 
 <div class="bg-white w-[449px] h-[149px] border border-gray-300 flex justify-center items-center gap-4">
  <button class="border border-green-700 font-bold text-green-700 px-2 py-2 rounded hover:bg-green-700 hover:text-white">
   <a href="../LogIn.html"> Login as Citizen <a/>
  </button>
  <button class="border border-green-700 font-bold text-green-700 px-4 py-2 rounded hover:bg-green-700 hover:text-white">
    <a href="../LogIn.html"> Login as Government Official</a>
  </button>
</div>
`;
  // Append popup to body
  document.body.appendChild(popup);

  overlay.addEventListener('click', closePopup);
  popup.querySelector('closeLogInPopup').addEventListener('click', closePopup);
  
  function closePopup() {
    document.body.removeChild(popup);
    document.body.removeChild(overlay);
  }
  }

// Add an event listener to all "Log In" buttons
document.querySelectorAll('a[href="./LoginPage.html"]').forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action
    showLogInPopup(); // Call the popup function
  });
});