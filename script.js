// Filter Projects by Category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'block';
        } else {
            project.classList.contains(category) ? project.style.display = 'block' : project.style.display = 'none';
        }
    });
}

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
        event.preventDefault(); // Prevent form submission
        alert('Please fill in all the fields.');
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    }
});