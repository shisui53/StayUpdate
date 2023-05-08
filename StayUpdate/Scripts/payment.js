const form = document.getElementById('payment-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting

    // get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;

    // simulate a successful transaction
    window.location.href = `thankyou.html?amount=${amount}`;
});