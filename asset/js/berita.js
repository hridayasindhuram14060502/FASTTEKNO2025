// header
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      header = document.getElementById('header');

if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   });
}

if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   });
}

// scroll header
function scrollHeader() {
    if (window.scrollY > 50) { 
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// modal form hubungi kami
const modal = document.getElementById("contactModal");
const openBtn = document.getElementById("openForm");
const closeBtn = document.getElementById("closeForm");

if (openBtn && closeBtn && modal) {
    openBtn.addEventListener("click", () => {
        modal.classList.add("show"); 
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show"); 
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });
}

// animate text home
const txts = document.querySelector(".animate-text")?.children;
if (txts) {
    let txtsLen = txts.length;
    let index = 0;
    const textInTimer = 3000,
        textOutTimer = 2800;

    function animateText() {
        for (let i = 0; i < txtsLen; i++) {
            txts[i].classList.remove("text-in", "text-out");
        }
        txts[index].classList.add("text-in");

        setTimeout(() => {
            txts[index].classList.add("text-out");
        }, textOutTimer);

        setTimeout(() => {
            index = (index + 1) % txtsLen;
            animateText();
        }, textInTimer);
    }

    window.onload = animateText;
}

// chatbot
function sendMessage() {
    const userInput = document.getElementById("user-input")?.value;

    if (!userInput || userInput.trim() === "") return;

    appendMessage(userInput, 'user');
    let botResponse = getBotResponse(userInput);

    setTimeout(() => {
        appendMessage(botResponse, 'bot');
    }, 500);

    document.getElementById("user-input").value = "";
}

function getBotResponse(userInput) {
    const lowerCaseInput = userInput.toLowerCase().trim();

    if (lowerCaseInput.includes('halo') || lowerCaseInput.includes('hai')) {
        return "Halo! Ada yang bisa saya bantu?";
    } else if (lowerCaseInput.includes('dimana alamat sma makati')) {
        return "SMA Makati terletak di Jl. Raya Kampus Udayana No. 20 Jimbaran Badung Bali";
    } else {
        return "Maaf, saya tidak mengerti pesan Anda. Bisakah Anda menjelaskannya kembali?";
    }
}

function appendMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    if (!chatBox) return;

    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add("chat-message", sender);
    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// chatbot toggle
document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.querySelector(".buttonschatbot");
    const chatContainer = document.querySelector(".chattbott");

    function updateChatPosition() {
        if (window.innerWidth >= 1025) {
            chatContainer.style.top = "auto";
            chatContainer.style.bottom = "110px";  
            chatContainer.style.right = "20px";  
            chatContainer.style.left = "auto";
            chatContainer.style.transform = "none";
        } else {
            chatContainer.style.top = "50%";
            chatContainer.style.left = "50%";
            chatContainer.style.bottom = "auto";
            chatContainer.style.right = "auto";
            chatContainer.style.transform = "translate(-50%, -50%)";
        }
    }

    if (chatContainer && chatButton) {
        updateChatPosition();
        window.addEventListener("resize", updateChatPosition);

        chatContainer.style.display = "none";
        chatContainer.style.opacity = "0";

        chatButton.addEventListener("click", function (event) {
            event.preventDefault();
            if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
                chatContainer.style.display = "block";
                setTimeout(() => {
                    chatContainer.style.opacity = "1";
                }, 10);
            } else {
                chatContainer.style.opacity = "0";
                setTimeout(() => {
                    chatContainer.style.display = "none";
                }, 300);
            }
        });
    }
});

// to top button
const toTopBtn = document.getElementById("toTopBtn");

if (toTopBtn) {
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 200) { 
            toTopBtn.classList.add("show");
        } else {
            toTopBtn.classList.remove("show");
        }
    };

    toTopBtn.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// blogs 
function showContent(page) {
    document.querySelectorAll('.blogs-content').forEach(div => {
        div.classList.remove('active');
    });

    const pageElement = document.getElementById(`page-${page}`);
    if (pageElement) {
        pageElement.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    showContent('1'); 
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button-blogs");

    const firstButton = document.querySelector(".button-blogs");
    if (firstButton) {
        firstButton.classList.add("active");
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});