document.addEventListener('DOMContentLoaded', () => {
    const fishes = document.querySelectorAll('.bannerbg-animation-frames-2');
    console.log(window.innerWidth);

    fishes.forEach(el => {
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
            duration: 32000,
            iterations: Infinity
        });
    })
})
