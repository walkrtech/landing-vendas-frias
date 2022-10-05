const video = document.getElementById('video');

const btn = document.getElementById('btn-video');
const btnRestart = document.getElementById('btn-restart');

const imageButton = document.getElementById('image-button');

let width = 0;

window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach(reveal => {
        let windowHeight = window.innerHeight;
        let revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - 200) {
            reveal.classList.add('slidein')
        } else {
            reveal.classList.remove('slidein')
        }
    })
})

function display(module) {

    document.querySelectorAll(`.module-${module}`).forEach(element => {
        if (element.classList.contains("mobile")) {
            element.classList.remove("mobile")
            document.getElementById(`arrow-${module}`).setAttribute("src", "https://landing-vendas.s3.amazonaws.com/icons/simple-arrow-down.svg")
        } else {
            document.getElementById(`arrow-${module}`).setAttribute("src", "https://landing-vendas.s3.amazonaws.com/icons/simple-arrow-up.svg")
            element.classList.add("mobile")
        }
    });
}

function showFaq(btn) {
    let icon = event.srcElement.textContent

    if (icon == "+") {
        document.getElementById(`btn-faq-${btn}`).classList.remove('d-none')
        event.srcElement.innerHTML = "-"
    } else {
        document.getElementById(`btn-faq-${btn}`).classList.add('d-none')
        event.srcElement.innerHTML = "+"
    }
}


function videoStatus() {
    let duration = ((video.duration / 60) * 100).toFixed(0);
    if (video.paused) {
        video.play();
        imageButton.src = 'https://landing-vendas.s3.amazonaws.com/landing-fria/icons/pause.svg'
        if (width == 0) {
            document.documentElement.style.setProperty('--animation-status', "running");
            document.documentElement.style.setProperty('--video-duration', duration + 's');
        }
    } else {
        video.pause();
        imageButton.src = 'https://landing-vendas.s3.amazonaws.com/landing-fria/icons/play.svg'
        document.documentElement.style.setProperty('--animation-status', "paused");
    }
}

function restartVideo() {
    video.load()
}

video.addEventListener('ended', () => {
    btn.style.display = 'none'
    btnRestart.style.display = 'unset'
})