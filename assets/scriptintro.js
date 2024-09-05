

tsParticles.load("tsparticles", {
    background: {
        repeat: "no-repeat",
        size: "40%",
        position: "60% 50%"
    },
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "repulse"
            },
            onHover: {
                enable: true,
                mode: "bubble"
            }
        },
        modes: {
            bubble: {
                distance: 200,
                duration: 2,
                opacity: 0,
                size: 0,
                speed: 3
            },
            repulse: {
                distance: 400,
                duration: 0.4
            }
        }
    },
    particles: {
        color: { value: "#ff98a2" },
        move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: true,
            speed: 0.3
        },
        number: {
            density: {
                enable: true
            },
            value: 900
        },
        opacity: {
            animation: {
                enable: true,
                speed: 5
            },
            value: { min: 0.3, max: 0.6 }
        },
        shape: {
            type: "circle"
        },
        size: {
            value: 1
        }
    }
});


const cursor = document.querySelector('#cursor');
let mouse = { x: 300, y: 300 };
let pos = { x: 0, y: 0 };
const speed = 0.1; // between 0 and 1

const updatePosition = () => {
    pos.x += (mouse.x - pos.x) * speed;
    pos.y += (mouse.y - pos.y) * speed;
    cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
};

const updateCoordinates = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);

function loop() {
    updatePosition();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);


const ghostText3 = new SplitType(".split-text-3");

gsap.registerPlugin(ScrollTrigger);

const tlGhost3 = gsap.timeline();

tlGhost3.from(".text-container-3 .char", {
    filter: "blur(20px)",
    willChange: "filter",
    scaleY: 0.1,
    stagger: 0.07,
    scrollTrigger: {
        trigger: ".text-container-3",
        start: "top center",
        end: "bottom top+=100",
        scrub: true,
        ease: "power4.out"
    }
});


const leniss = new Lenis();

function raf(time) {
    leniss.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


const ghostTextt3 = new SplitType(".split-text-2");

gsap.registerPlugin(ScrollTrigger);

const tlGhostt3 = gsap.timeline();

tlGhostt3.from(".text-container-2 .char", {
    filter: "blur(20px)",
    willChange: "filter",
    scaleY: 0.1,
    stagger: 0.07,
    scrollTrigger: {
        trigger: ".text-container-2",
        start: "top center",
        end: "bottom top+=100",
        scrub: true,
        ease: "power4.out"
    }
});

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
const allPhotos = gsap.utils.toArray(".desktopPhoto");

gsap.set(photos, { yPercent: 101 });

const query = window.matchMedia("(min-width: 600px)");

function setupScrollTriggers() {
    if (query.matches) {
        console.log("desktop");

        ScrollTrigger.create({
            trigger: ".gallery",
            start: "top top",
            end: "bottom bottom",
            pin: ".right"
        });

        details.forEach((detail, index) => {
            let headline = detail.querySelector("h1");
            let animation = gsap.timeline()
                .to(photos[index], { yPercent: 0 })
                .set(allPhotos[index], { autoAlpha: 0 });

            ScrollTrigger.create({
                trigger: headline,
                start: "top 80%",
                end: "top 50%",
                animation: animation,
                scrub: true,
                markers: false
            });
        });
    }
}

setupScrollTriggers();
query.addListener(setupScrollTriggers);

gsap.timeline({ delay: 0.7 })
    .to('#hero div', { duration: 0.5, y: 0, stagger: 0.3 });

function updateBoxShadow() {
    const image = document.querySelector('.image');
    const page = document.querySelector('.page');

    if (page.classList.contains('black-background')) {
        image.classList.add('black-background');
        image.classList.remove('white-background');
    } else if (page.classList.contains('white-background')) {
        image.classList.add('white-background');
        image.classList.remove('black-background');
    }
}

ScrollTrigger.create({
    trigger: "#about",
    start: "top top",
    end: "bottom top",

});

ScrollTrigger.create({
    trigger: "#projects",
    start: "top top",
    end: "bottom top",

});

ScrollTrigger.create({
    trigger: "#contact",
    start: "top top",
    end: "bottom top",

});


















