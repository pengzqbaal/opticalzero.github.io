class Animations {
    static init() {
    this.addWheelRotation();
    this.addWelcomeAnimation();
    }
    static addWheelRotation() {
    const wheel = document.querySelector('.wheel-svg');
    let rotation = 0;
    setInterval(() => {
    rotation += 0.1;
    wheel.style.transform = rotate(${rotation}deg);
    }, 50);
    }
    static addWelcomeAnimation() {
    const welcome = document.getElementById('welcome');
    welcome.style.opacity = '0';
    welcome.style.transform = 'translateY(20px)';
    setTimeout(() => {
    welcome.style.transition = 'all 0.5s ease';
    welcome.style.opacity = '1';
    welcome.style.transform = 'translateY(0)';
    }, 500);
    }
    }
    // Initialize animations
    Animations.init();