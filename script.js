const users = [];

function registerUser(username, password, userType) {
    const newUser = { username, password, userType };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful');
}

function loginUser(username, password, userType) {
    const user = users.find((user) => user.username === username && user.password === password && user.userType === userType);
    if (user) {
        alert('Login successful');
        // Redirect or show success message here
    } else {
        alert('Invalid username or password');
    }
}

function filterDonationRequests(category) {
    // Function to filter donation requests based on a specific category
    alert('Filtering donation requests by category: ' + category);
}

function createDonationPost(category, details) {
    // Function to allow organization representatives to create a donation post with category and details
    alert('Creating donation post in category: ' + category);
}

function viewRequestedDonationItems() {
    // Function to display a list of all requested donation items
    alert('Viewing requested donation items');
}

function manageDonorRequests(decision) {
    // Function to manage donor requests by either accepting or rejecting them
    alert('Managing donor requests: ' + decision);
}

function manageOrganizationRequests(decision) {
    // Function to manage organization requests by either accepting or rejecting them
    alert('Managing organization requests: ' + decision);
}

function changePassword(username, newPassword) {
    // Function to change the password for a specific user
    alert(username + ' changed their password to: ' + newPassword);
}
