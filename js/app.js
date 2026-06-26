// ======================
// BRAINBOOST APP.JS
// ======================

// Save User
function saveUser(userData){

    localStorage.setItem(
        "brainboostUser",
        JSON.stringify(userData)
    );

}

// Get User
function getUser(){

    return JSON.parse(
        localStorage.getItem("brainboostUser")
    ) || {};

}

// Logout
function logout(){

    localStorage.removeItem("loggedIn");

    alert("Logged Out Successfully");

    window.location.href = "login.html";

}

// ======================
// SEARCH FUNCTION
// ======================

function searchTopic(){

    const input =
    document.getElementById("searchTopic");

    if(!input) return;

    const filter =
    input.value.toLowerCase();

    const cards =
    document.querySelectorAll(".topic-card");

    cards.forEach(card=>{

        const text =
        card.innerText.toLowerCase();

        card.style.display =
        text.includes(filter)
        ? "block"
        : "none";

    });

}

// ======================
// PROGRESS SYSTEM
// ======================

function saveProgress(
    topic,
    round,
    score,
    accuracy
){

    let progress =
    JSON.parse(
        localStorage.getItem("progress")
    ) || {};

  progress[topic] = {

        currentRound: round,
        score,
        accuracy

};

    localStorage.setItem(
        "progress",
        JSON.stringify(progress)
    );

}

// ======================
// GET PROGRESS
// ======================

function getProgress(){

    return JSON.parse(
        localStorage.getItem("progress")
    ) || {};

}

// ======================
// CERTIFICATE CHECK
// ======================

function checkCertificate(
    topic,
    accuracy
){

    if(accuracy >= 80){

        localStorage.setItem(
            "completedTopic",
            topic
        );

        alert(
            "🏆 Congratulations! Certificate Unlocked"
        );

        return true;
    }

    return false;

}

// ======================
// CERTIFICATE SAVE
// ======================

function saveCertificate(topic){

    let certificates =
    JSON.parse(
        localStorage.getItem("certificates")
    ) || [];

    if(!certificates.includes(topic)){

        certificates.push(topic);

        localStorage.setItem(
            "certificates",
            JSON.stringify(certificates)
        );

    }

}

// ======================
// GET CERTIFICATES
// ======================

function getCertificates(){

    return JSON.parse(
        localStorage.getItem("certificates")
    ) || [];

}

// ======================
// DARK MODE
// ======================

function toggleDarkMode(){

    document.body.classList.toggle(
        "dark-mode"
    );

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains(
            "dark-mode"
        )
    );

}

window.onload = function(){

    if(
        localStorage.getItem("darkMode")
        === "true"
    ){

        document.body.classList.add(
            "dark-mode"
        );

    }

};

// ======================
// PROFILE IMAGE
// ======================

function previewImage(event){

    const reader =
    new FileReader();

    reader.onload = function(){

        const output =
        document.getElementById(
            "profileImage"
        );

        if(output){

            output.src =
            reader.result;

        }

    };

    reader.readAsDataURL(
        event.target.files[0]
    );

}

// ======================
// LOGIN CHECK
// ======================

function isLoggedIn(){

    return localStorage.getItem(
        "loggedIn"
    ) === "true";

}


// ======================
// TOTAL TOPICS
// ======================

function totalTopics(){

    return 24;

}

// ======================
// COMPLETED TOPICS
// ======================

function completedTopics(){

    const progress =
    getProgress();

    let count = 0;

    for(let topic in progress){

        if(
            progress[topic].accuracy >= 80
        ){

            count++;

        }

    }

    return count;

}

// ======================
// ACCURACY
// ======================

function overallAccuracy(){

    const progress =
    getProgress();

    let total = 0;
    let count = 0;

    for(let topic in progress){

        total += Number(
            progress[topic].accuracy
        );

        count++;

    }

    if(count === 0){

        return 0;

    }

    return Math.round(
        total / count
    );

}

document.addEventListener("DOMContentLoaded",()=>{

const input =
document.getElementById("searchTopic");

if(input){

input.addEventListener("input",searchTopic);

}

});