document.querySelectorAll('.aura').forEach(parent => {
    let interval = null;
    
    parent.addEventListener('mouseenter', () => {
        const turbulence = parent.querySelector('feTurbulence'); // Select only within this parent

        if (!interval) { // Prevent multiple intervals
            interval = setInterval(() => {
                turbulence.setAttribute('seed', Math.floor(Math.random() * 100));
            }, 100);
        }
    });

    parent.addEventListener('mouseleave', () => {
        clearInterval(interval);
        interval = null;
    });
});