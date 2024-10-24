// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9wpzpI2Bjv1YqW7U01q2bz7s2SGdByQ8",
    authDomain: "login-form-5853d.firebaseapp.com",
    projectId: "login-form-5853d",
    storageBucket: "login-form-5853d.appspot.com",
    messagingSenderId: "518112213922",
    appId: "1:518112213922:web:bb1c5fa297247442a890fb"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app); // Firebase Auth service

// Handle the login form submission
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            successMessage.textContent = 'Login successful!';
            errorMessage.textContent = '';
            loginForm.reset();
            window.location.href = 'home.html'; // Redirect to home page
        })
        .catch((error) => {
            const errorMsg = error.message;
            errorMessage.textContent = errorMsg; // Display the error message
            successMessage.textContent = '';
        });
});
