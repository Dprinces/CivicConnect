function showPopup(title, message, link, linkText) {
    const popup = document.createElement("div");
    popup.className =
      "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50";
  
    popup.innerHTML = `
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-2xl font-bold text-center mb-4">${title}</h2>
        <p class="text-center text-gray-600 mb-6">${message}</p>
        <div class="flex justify-center">
          <a href="${link}" class="bg-green-700 text-white px-4 py-2 rounded">${linkText}</a>
        </div>
        <button class="absolute top-2 right-2 text-gray-500 hover:text-black close-popup">
          &times;
        </button>
      </div>
    `;
  
    document.body.appendChild(popup);
  
    // Close popup
    popup.querySelector(".close-popup").addEventListener("click", () => {
      document.body.removeChild(popup);
    });
  }
  
  // Add event listeners for Create Request links
  document.querySelectorAll('a[href="CreateRequest.html"]').forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      showPopup(
        "Sign Up Required",
        "Please sign up before creating a request.",
        "./SignUp.html",
        "Sign Up"
      );
    });
  });
  
  // Add event listeners for Login links
  document.querySelectorAll('a[href="./LoginPage.html"]').forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      showPopup(
        "Log In Required",
        "Please log in to continue.",
        "./LoginPage.html",
        "Log In"
      );
    });
  });
  