var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

function openTab(tabname) {
    // Remove active class from all tab links
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // Remove active class from all tab contents
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add active class to the clicked tab link
    event.currentTarget.classList.add("active-link");

    // Add active class to the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}


function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbznGB65SNDrmF3v9JscWfFCHwouCaixXz2o-EyrX2hM1v2fn8k5EWSrKtXhBYpl9fT8TQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

// Clear the message when the page loads
window.addEventListener('DOMContentLoaded', () => {
    msg.textContent = "";
});

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.textContent = "Message sent successfully";
            setTimeout(() => {
                msg.textContent = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
});

msg.style.visibility = 'visible';
