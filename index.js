
// const createRequestBtn = document.getElementById('create-request-btn');
// const signUpModal = document.getElementById('sign-up-modal');

// createRequestBtn.addEventListener('click', () => {
//   signUpModal.classList.remove('hidden');
// });

// const signUpButton = document.getElementById('sign-up-button');
// signUpButton.addEventListener('click', () => {
//   signUpModal.classList.add('hidden'); 
//   alert('Thank you for signing up!');
// });

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Select the "Create Request" button
    const createRequestButton = document.querySelector('a[href="CreateRequest.html"] button');
  
    // Add an event listener to the button
    createRequestButton.addEventListener("click", (event) => {
      // Prevent the default navigation
      event.preventDefault();
  
      // Create the signup modal content
      const signupModal = document.createElement("div");
      signupModal.style.position = "fixed";
      signupModal.style.top = "0";
      signupModal.style.left = "0";
      signupModal.style.width = "100%";
      signupModal.style.height = "100%";
      signupModal.style.backgroundColor = "white";
      signupModal.style.display = "flex";
      signupModal.style.flexDirection = "column";
      signupModal.style.justifyContent = "center";
      signupModal.style.alignItems = "center";
      signupModal.style.zIndex = "1000";
  
      signupModal.innerHTML = `
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">Please Sign Up</h1>
        <span style="margin-bottom: 2rem; font-size: 1rem; color: #555;">Don't worry, we won't take your real details</span>
        <button style="padding: 10px 20px; font-size: 1rem; color: white; background-color: green; border: none; border-radius: 5px; cursor: pointer;">Sign Up</button>
      `;
  
      // Append the modal to the body
      document.body.appendChild(signupModal);
  
      // Add an event listener to close the modal when the "Sign Up" button is clicked
      const signUpButton = signupModal.querySelector("button");
      signUpButton.addEventListener("click", () => {
        document.body.removeChild(signupModal);
      });
    });
  });
  
