document.addEventListener("DOMContentLoaded", function () {
    // GSAP Loading Animation
    gsap.from(".loading-text", {
        opacity: 0,
        duration: 1,
        repeat: -1,
        yoyo: true
    });

    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('fullscreen').style.display = 'block';

        // Typewriter Effect for Main Title and <title>
        const mainTitle = document.getElementById("main-title");
        const pageTitle = document.getElementById("page-title");
        const text = "WE ARE RUN YOUR APP";

        function typeWriter(target, content) {
            let index = 0;

            function write() {
                if (index < content.length) {
                    target.innerHTML += content.charAt(index);
                    index++;
                    setTimeout(write, 100);
                } else {
                    setTimeout(() => {
                        target.innerHTML = "";
                        index = 0;
                        write();
                    }, 1000);
                }
            }
            write();
        }

        typeWriter(mainTitle, text);
        typeWriter(pageTitle, text);

        gsap.from("#signboard", {
            opacity: 0,
            y: -100,
            duration: 1,
            ease: "bounce.out"
        });

        gsap.from(".button-section .btn", {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            stagger: 0.2,
            delay: 1.5,
            ease: "back.out(1.7)"
        });

        // Card Animation with GSAP
        gsap.set(".card", {
            perspective: 1000,
        });

        gsap.fromTo(".card", {
            rotationY: -180,
            opacity: 0,
        }, {
            rotationY: 0,
            opacity: 1,
            duration: 1.5,
            stagger: 0.3,
            ease: "power3.out",
        });

    }, 3000);

    // Force audio to play and loop
    const audio = document.getElementById("background-music");
    audio.play();
    audio.loop = true;
    audio.volume = 1; // Maximum volume
    audio.setAttribute("muted", "false");
    audio.setAttribute("autoplay", "true");

    // Popup Opening Animations
    window.openFeaturesPopup = () => openPopupAnimation(document.getElementById('features-popup'));
    window.closeFeaturesPopup = () => closePopupAnimation(document.getElementById('features-popup'));

    window.openContactPopup = () => openPopupAnimation(document.getElementById('contact-popup'));
    window.closeContactPopup = () => closePopupAnimation(document.getElementById('contact-popup'));

    function openPopupAnimation(popup) {
        gsap.to(popup, {
            duration: 0.5,
            opacity: 1,
            scale: 1,
            display: 'block'
        });
        gsap.fromTo(popup.querySelector(".popup-content"), {
            scale: 0.8,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)"
        });
    }

    function closePopupAnimation(popup) {
        gsap.to(popup.querySelector(".popup-content"), {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: "back.in(1.7)"
        });
        gsap.to(popup, {
            opacity: 0,
            display: 'none',
            duration: 0.5,
            delay: 0.5,
        });
    }
});
