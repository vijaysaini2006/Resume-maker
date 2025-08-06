document.getElementById("resume-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Update text values
  document.getElementById("preview-name").innerText = document.getElementById("name").value;
  document.getElementById("preview-email").innerText = document.getElementById("email").value;
  document.getElementById("preview-phone").innerText = document.getElementById("phone").value;
  document.getElementById("preview-summary").innerText = document.getElementById("summary").value;
  document.getElementById("preview-education").innerText = document.getElementById("education").value;
  document.getElementById("preview-experience").innerText = document.getElementById("experience").value;
  document.getElementById("preview-skills").innerText = document.getElementById("skills").value;
  document.getElementById("preview-projects").innerText = document.getElementById("projects").value;
  document.getElementById("preview-hobbies").innerText = document.getElementById("hobbies").value;

  // Image preview
  const fileInput = document.getElementById("photo");
  const previewPhoto = document.getElementById("preview-photo");

  if (fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewPhoto.src = e.target.result;
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
});

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

