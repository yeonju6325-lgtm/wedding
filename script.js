const reveals = document.querySelectorAll(".reveal");

const revealTexts = document.querySelectorAll(".reveal-text");


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);


reveals.forEach((element) => {

    observer.observe(element);

});


revealTexts.forEach((element) => {

    observer.observe(element);

});
