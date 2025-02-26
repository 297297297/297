document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.photo-slider');
    let currentIndex = 0;
    const totalImages = slider.children.length;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        slider.scrollTo({
            left: slider.children[currentIndex].offsetLeft,
            behavior: 'smooth'
        });
    }

    setInterval(nextSlide, 3000); // 每3秒切换到下一张照片
});