// Menu toggle for mobile
document.getElementById('menu-btn').addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

// Toggle chatbot interface
document.getElementById("chatbot-toggle").addEventListener("click", function () {
  const chatInterface = document.getElementById("chat-interface");
  chatInterface.classList.toggle("hidden");
});

// Close the chatbot interface
document.getElementById("chatbot-close").addEventListener("click", function () {
  const chatInterface = document.getElementById("chat-interface");
  chatInterface.classList.add("hidden");
});

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
    <button class="bg-green-700 text-white text-end px-4 py-2 rounded" id="closePopup">
      <a href="./SignUp.html">Sign Up</a>
    </button>
  `;

  // Append popup to body
  document.body.appendChild(popup);

  // Close the popup when clicking on the button
  document.getElementById('closePopup').addEventListener('click', () => {
    document.body.removeChild(popup);
  });
}

// Add an event listener to all "Sign Up" buttons
document.querySelectorAll('a[href="CreateRequest.html"]').forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action
    showSignUpPopup(); // Call the popup function
  });
});

// Function to display a login popup
function showLogInPopup() {
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
      Please Log In
    </h2>
    <p class="text-center text-gray-500 mb-6">
      Welcome back! Please log in to continue.
    </p>
    <button class="bg-green-700 text-white text-end px-4 py-2 rounded" id="closeLogInPopup">
      <a href="./LoginPage.html">Log In</a>
    </button>
  `;

  // Append popup to body
  document.body.appendChild(popup);

  // Close the popup when clicking on the button
  document.getElementById('closeLogInPopup').addEventListener('click', () => {
    document.body.removeChild(popup);
  });
}

// Add an event listener to all "Log In" buttons
document.querySelectorAll('a[href="./LoginPage.html"]').forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action
    showLogInPopup(); // Call the popup function
  });
});

// Chatbot toggle
const chatbotToggle = document.querySelector('.chatbot-toggle');
const chatbotWindow = document.querySelector('.chatbot-window');
const closeChatbot = document.querySelector('.close-chatbot');

chatbotToggle.addEventListener('click', () => {
  chatbotWindow.style.display = 'block';
});

closeChatbot.addEventListener('click', () => {
  chatbotWindow.style.display = 'none';
});

// Responsive menu toggle for mobile
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('.menu');

if (mobileMenuToggle && menu) {
  mobileMenuToggle.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
}
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

  //  // JavaScript to handle sliding functionality
  //  const prevButton = document.getElementById('prev');
  //  const nextButton = document.getElementById('next');
  //  const carouselContainer = document.querySelector('.carousel-container');

  //  prevButton.addEventListener('click', () => {
  //    carouselContainer.scrollBy({
  //      left: -carouselContainer.clientWidth,
  //      behavior: 'smooth',
  //    });
  //  });

  //  nextButton.addEventListener('click', () => {
  //    carouselContainer.scrollBy({
  //      left: carouselContainer.clientWidth,
  //      behavior: 'smooth',
  //    });
  //  });