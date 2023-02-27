document.addEventListener('DOMContentLoaded', () => {
    const fishes = document.querySelectorAll('.banner-bg-animation-img');
    fishes[1].style.display = 'none';


    // function animateFish2(time) {
    //     fishes[1].animate([
    //         {
    //             transform: `translate(${-start}px, 10px)`,
    //             filter: 'opacity(80%)',
    //         },
    //         {
    //             transform: `translate(${-start * 0.5}px, 0px)`,
    //             filter: 'opacity(100%)',
    //         },
    //         {
    //             transform: `translate(0px, 5px)`,
    //             filter: 'opacity(100%)',
    //         },
    //         {
    //             transform: `translate(0px, 5px)`,
    //             filter: 'opacity(80%)',
    //         },
    //         {
    //             transform: `translate(0px, 10px)`,
    //             filter: 'opacity(0%)',
    //         },
    //     ], {
    //         duration: time,
    //         iterations: 1
    //     });
    // }



    const action = function () {

        const start = fishes[0].clientWidth;

        fishes.forEach(el => {
            el.style.transform = `translateX(${-start}px)`;
        });

        function animateFish1(time) {
            fishes[0].animate([
                {
                    transform: `translate(${-start}px, 40px)`,
                    filter: 'opacity(60%)',
                },
                {
                    transform: `translate(${-start * 0.33}px, 0px)`,
                    filter: 'opacity(80%)',
                },
                {
                    transform: `translate(0px, 5px)`,
                    filter: 'opacity(100%)',
                },
                {
                    transform: `translate(0px, 10px)`,
                    filter: 'opacity(80%)',
                },
                {
                    transform: `translate(0px, 10px)`,
                    filter: 'opacity(0%)',
                },
            ], {
                duration: time,
                iterations: 1
            });
        }

        function animateFish3(time) {
            fishes[2].animate([
                {
                    transform: `translate(${-start}px, 80px)`,
                    filter: 'opacity(50%)',
                },
                {
                    transform: `translate(${-start * 0.5}px, 40px)`,
                    filter: 'opacity(80%)',
                },
                {
                    transform: `translate(${-start * 0.03}px, 0px)`,
                    filter: 'opacity(100%)',
                },
                {
                    transform: `translate(0px, 3px)`,
                    filter: 'opacity(80%)',
                },
                {
                    transform: `translate(0px, 3px)`,
                    filter: 'opacity(0%)',
                },
            ], {
                duration: time,
                iterations: 1
            });
        }

        animateFish1(3500);
        setTimeout(animateFish3, 3000, 3300);
    }

    action();
    setInterval(() => {
        action();
    }, 6000);

})