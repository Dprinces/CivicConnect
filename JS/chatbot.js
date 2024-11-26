// Toggle Chatbot Visibility
document.getElementById("chatbot-toggle").addEventListener("click", function () {
    const chatInterface = document.querySelector("#chatbot-toggle > div");
    chatInterface.classList.toggle("hidden");
  });
  
  // Close Chatbot
  document.querySelector(".close-chatbot").addEventListener("click", function () {
    const chatInterface = document.querySelector("#chatbot-toggle > div");
    chatInterface.classList.add("hidden");
  });
  
  // Handle User Message Sending
  document.querySelector(".chatbot-window .send-btn").addEventListener("click", function () {
    const inputField = document.querySelector(".chatbot-window input");
    const message = inputField.value.trim();
  
    if (message !== "") {
      // Display the user's message
      displayMessage(message, "user");
  
      // Clear the input field
      inputField.value = "";
  
      // Simulate a chatbot response (you can replace this with real AI interaction)
      setTimeout(() => {
        displayMessage("Hello, how can I assist you today?", "chatbot");
      }, 1000);
    }
  });
  