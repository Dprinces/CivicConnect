document.getElementById('menu-btn').addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const dropdownToggle = document.querySelector(".dropdown > span");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

document.getElementById("requestForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const requestData = {
    image: document.getElementById("requestImage").files[0],
    header: document.getElementById("requestHeader").value,
    description: document.getElementById("requestDescription").value,
    category: document.getElementById("requestCategory").value,
    location: document.getElementById("requestLocation").value,
  };

  if (!requestData.header || !requestData.description || !requestData.category || !requestData.location) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  console.log("Form Submitted:", requestData);
  alert("Request submitted successfully!");
});


const requestImageInput = document.getElementById("requestImage");
requestImageInput.addEventListener("change", (event) => {
const fileName = event.target.files[0]?.name;
if (fileName) {
const label = event.target.nextElementSibling;
label.textContent = `Selected file: ${fileName}`;
}
});

document.getElementById('requestImage').addEventListener('change', function (event) {
const file = event.target.files[0];
const previewImage = document.getElementById('previewImage');

if (file) {
const reader = new FileReader();
reader.onload = function (e) {
previewImage.src = e.target.result;
previewImage.classList.remove('hidden');
};
reader.readAsDataURL(file);
} else {
previewImage.src = '';
previewImage.classList.add('hidden');
}
});