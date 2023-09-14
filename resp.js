const toggleButton = document.getElementById('toggleContact');
const contactInfo = document.getElementById('contactInfo');

toggleButton.addEventListener('click', () => {
    if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
        contactInfo.style.display = 'block';
        toggleButton.textContent = 'Hide Contact Info';
    } else {
        contactInfo.style.display = 'none';
        toggleButton.textContent = 'Show Contact Info';
    }
});