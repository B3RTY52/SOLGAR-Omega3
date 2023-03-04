document.addEventListener('DOMContentLoaded', () => {
    const fishes = document.querySelectorAll('.bannerbg-animation-frames-2');
    console.log(window.innerWidth);

    fishes.forEach(el => {
        if (window.innerWidth > 991) {
            el.style.display = 'block';
            const fishesWidth = el.clientWidth;
            console.log(fishesWidth);
            el.animate([
                {
                    transform: `translateX(${-fishesWidth * 2}px)`,
                },
                {
                    transform: `translateX(${window.innerWidth + fishesWidth}px)`,
                },
            ], {
                duration: 30000,
                iterations: Infinity
            });
        }
    })
})
