// Function to approve organization requests
function approveRequest(type) {
    alert(`Request for ${type} approved.`);
}

// Function to reject organization requests
function rejectRequest(type) {
    alert(`Request for ${type} rejected.`);
}

// Function to update account information
document.querySelector("#updateAccountForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    alert(`Updating account with Email: ${email} and Password: ${password}`);
});

// Function to handle search for donation items
document.querySelector("#searchDonationItemsByCategory .btn.search").addEventListener("click", function() {
    const searchCategory = document.querySelector("#searchDonationItemsByCategory input").value;
    alert(`Searching donation items for category: ${searchCategory}`);
});

// Function to handle filter for registered organizations
document.querySelector("#filterRegisteredOrganizations .btn.filter").addEventListener("click", function() {
    const selectedCategory = document.querySelector("#filterRegisteredOrganizations select").value;
    alert(`Applying filter for category: ${selectedCategory}`);
});
