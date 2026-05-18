window.addEventListener("load", function () {

    if (window.innerWidth <= 768) {
    // Disable side animations on mobile
    gsap.set(".profilename", { x: 0, y: 0 });
    gsap.set(".profileimage", { x: 0, y: 0 });
    gsap.set(".profile", { x: 0 });
}

    // ===== LOCOMOTIVE =====
    const scroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        lerp: 0.08,
        smartphone: {         
        smooth: false
        },
        tablet: {             
            smooth: false
        }
    });

    gsap.registerPlugin(ScrollTrigger);

    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? scroll.scrollTo(value, 0, 0)
                : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();




    // ===== HERO =====
    gsap.from(".profilename h1", {
        y: 100, opacity: 0, duration: 1.2,
        stagger: 0.2, ease: "power4.out"
    });
    gsap.from(".profilename p", {
        y: 30, opacity: 0, duration: 1,
        delay: 0.5, ease: "power3.out"
    });
    gsap.from(".profileimage img", {
        y: 80, opacity: 0, duration: 1.5,
        delay: 0.3, ease: "power4.out"
    });

    // ===== SUMMARY =====
    gsap.from(".summ", {
        scrollTrigger: { trigger: ".summ", start: "top 85%", scroller: ".main" },
        y: 60, opacity: 0, duration: 1.2, ease: "power3.out"
    });

    // ===== JOURNEY =====
    gsap.from(".journey-title", {
        scrollTrigger: { trigger: ".journey", start: "top 80%", scroller: ".main" },
        y: 50, opacity: 0, duration: 1, ease: "power3.out"
    });
    gsap.from(".education", {
        scrollTrigger: { trigger: ".journey", start: "top 70%", scroller: ".main" },
        x: -80, opacity: 0, duration: 1, ease: "power3.out"
    });
    gsap.from(".internship", {
        scrollTrigger: { trigger: ".journey", start: "top 70%", scroller: ".main" },
        x: 80, opacity: 0, duration: 1, ease: "power3.out"
    });

    // ===== SKILLS =====
    gsap.from(".skills-title", {
        scrollTrigger: { trigger: ".skills", start: "top 80%", scroller: ".main" },
        y: 40, opacity: 0, duration: 1, ease: "power3.out"
    });

    gsap.set(".bento-item", { opacity: 0, y: 40 });
    gsap.to(".bento-item", {
        scrollTrigger: { trigger: ".bento-grid", start: "top 75%", scroller: ".main" },
        opacity: 1, y: 0, duration: 0.7,
        stagger: { each: 0.1, from: "start" },
        ease: "power3.out"
    });

    Shery.makeMagnet(".bento-item", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)", duration: 1,
    });

    // ===== ADDITIONAL SKILLS =====
    gsap.from(".additional-title", {
        scrollTrigger: { trigger: ".additional-skills", start: "top 85%", scroller: ".main" },
        y: 20, opacity: 0, duration: 0.6, ease: "power3.out"
    });
    gsap.from(".add-skill", {
        scrollTrigger: { trigger: ".additional-skills", start: "top 85%", scroller: ".main" },
        y: 30, opacity: 0, duration: 0.5,
        stagger: 0.08, ease: "back.out(1.7)"
    });

    Shery.makeMagnet(".add-skill", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)", duration: 1,
    });

    // ===== PROJECTS =====
    gsap.fromTo(".projects-title",
        { y: 50, opacity: 0 },
        {
            scrollTrigger: { trigger: ".projects", start: "top 85%", scroller: ".main" },
            y: 0, opacity: 1, duration: 1, ease: "power3.out"
        }
    );

    document.querySelectorAll(".project-item").forEach((el) => {
        gsap.fromTo(el,
            { y: 80, opacity: 0 },
            {
                scrollTrigger: { trigger: el, start: "top 85%", scroller: ".main" },
                y: 0, opacity: 1, duration: 1, ease: "power3.out"
            }
        );
    });

    Shery.makeMagnet(".project-content", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)", duration: 1,
    });

    // ===== CERTIFICATIONS =====
    Shery.makeMagnet(".cert-row", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)", duration: 1,
    });

    // ===== CONTACT =====
    Shery.makeMagnet(".contact-item", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)", duration: 1,
    });

    this.document.querySelector("#Home").addEventListener("click",function(){
        scroll.scrollTo(".profile")
    })

    this.document.querySelector("#about").addEventListener("click",function(){
    scroll.scrollTo(".journey")
    })

    this.document.querySelector("#skills").addEventListener("click",function(){
    scroll.scrollTo(".skills")
    })

    this.document.querySelector("#contact").addEventListener("click",function(){
    scroll.scrollTo(".contact")
    })

});