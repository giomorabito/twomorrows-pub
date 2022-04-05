const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.57142}`
            }
        });

        burger.classList.toggle('toggle');
    });
}

var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

function sendEmail(){
    const name = document.getElementById('form-name');
    const email = document.getElementById('form-email');
    const phone = document.getElementById('form-phone');
    const message = document.getElementById('form-message');
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "891e8b07d217ba",
        Password : "fe72f7a7a95d99",
        To : 'twomorrowsofpatchogue@gmail.com',
        From : email.value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + name.value
        + "<br> Email: " + email.value
        + "<br> Phone Number: " + phone.value
        + "<br> Message: " + message.value
    }).then(
      message => alert("Message Sent Successfully")
    );
}

navSlide();