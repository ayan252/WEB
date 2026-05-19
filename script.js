document.addEventListener("DOMContentLoaded", function () {

    var typed = new Typed(".typing", {

        strings: [

            "Stack Learner",
            "Python Programmer",
            "Information Technology Student",
            "Frontend Developer",
            "Let's Build Something Amazing!"

        ],

        typeSpeed: 70,       // Typing speed
        backSpeed: 40,       // Backspace speed
        startDelay: 500,     // Start delay
        backDelay: 1500,     // Wait before deleting
        smartBackspace: true,
        loop: true,
        showCursor: true,
        cursorChar: "|",

    });
    // Chatbot Elements

const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

// Open Chat

chatToggle.addEventListener("click", () => {

    chatBox.style.display = "flex";

});

// Close Chat

closeChat.addEventListener("click", () => {

    chatBox.style.display = "none";

});

// Send Button

sendBtn.addEventListener("click", sendMessage);

// Enter Key Support

userInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        sendMessage();

    }

});

// Send Message Function

function sendMessage(){

    const message = userInput.value.trim();

    if(message === "") return;

    // User Message

    const userDiv = document.createElement("div");

    userDiv.classList.add("user-message");

    userDiv.innerText = message;

    chatBody.appendChild(userDiv);

    userInput.value = "";

    // Auto Reply Delay

    setTimeout(() => {

        const botDiv = document.createElement("div");

        botDiv.classList.add("bot-message");

        botDiv.innerText = getBotReply(message);

        chatBody.appendChild(botDiv);

        // Auto Scroll

        chatBody.scrollTop = chatBody.scrollHeight;

    }, 800);

}

// Bot Reply Function

function getBotReply(message){

    message = message.toLowerCase();

    // Greetings

    if(
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("hey")
    ){

        return "Hello 👋 Welcome to Ayandip's Portfolio!";

    }

    // Skills

    else if(
        message.includes("skill") ||
        message.includes("technology")
    ){

        return "Ayandip knows Python, Java, C, HTML, CSS, and Database Management.";

    }

    // Education

    else if(
        message.includes("education") ||
        message.includes("college") ||
        message.includes("study")
    ){

        return "Ayandip is pursuing B.Tech in Information Technology at MCKV Institute of Engineering.";

    }

    // Projects

    else if(
        message.includes("project")
    ){

        return "Main Project: Cancer Patient Management & Awareness System.";

    }

    // Contact

    else if(
        message.includes("contact") ||
        message.includes("email")
    ){

        return "You can connect through GitHub, LinkedIn, or Email.";

    }

    // Resume

    else if(
        message.includes("resume") ||
        message.includes("cv")
    ){

        return "Resume download feature will be available soon.";

    }

    // Thanks

    else if(
        message.includes("thank")
    ){

        return "You're welcome 😊";

    }

    // Default Reply

    else{

        return "I'm AI Assistant 🤖. Ask me about skills, education, or projects.";

    }

}

});
const themeToggle = document.getElementById("themeToggle");

// Load Saved Theme

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");

    themeToggle.innerHTML = "☀️";

}

// Toggle Theme

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeToggle.innerHTML = "☀️";

        localStorage.setItem("theme", "light");

    }

    else{

        themeToggle.innerHTML = "🌙";

        localStorage.setItem("theme", "dark");

    }
    // Dark / Light Mode

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    // Change Icon

    if(document.body.classList.contains("light-mode")){

        themeToggle.innerHTML = "☀️";

    }

    else{

        themeToggle.innerHTML = "🌙";

    }

});

});