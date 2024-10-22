// Dark Mode Toggle Functionality
const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Toggle the dark-mode class on body
});

// Profile picture preview functionality
document.getElementById('signup-profile-pic').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            document.getElementById('profile-pic').setAttribute('src', e.target.result);
        };
        
        reader.readAsDataURL(file); // Read the file as a Data URL to preview
    }
});

// Form submission functionality
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object to capture form data
    
        window.location.href = "dashboard.html"
        alert('Account created successfully!');
   
    
});
