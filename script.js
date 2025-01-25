// Smooth scrolling for navigation links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dynamic greeting based on the time of day
function updateGreeting() {
    const hour = new Date().getHours();
    const greetingText = document.querySelector('.hero h1');
    
    if (hour < 12) {
        greetingText.textContent = 'Good Morning! Welcome to Digital Academic Submission System';
    } else if (hour < 18) {
        greetingText.textContent = 'Good Afternoon! Welcome to Digital Academic Submission System';
    } else {
        greetingText.textContent = 'Good Evening! Welcome to Digital Academic Submission System';
    }
}

// Button click alert
document.querySelector('.btn').addEventListener('click', () => {
    alert('Discover our features to simplify your academic submissions!');
});

// Call functions on page load
window.onload = updateGreeting;
