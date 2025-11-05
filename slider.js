/**
 * 初始化一個滑動器 (Slider)
 * @param {string} sliderId - 滑動器容器的 ID
 */
function initializeSlider(sliderId) {
    const sliderContainer = document.getElementById(sliderId);
    if (!sliderContainer) {
        console.error(`Slider container with id "${sliderId}" not found.`);
        return;
    }

    const sliderWrapper = sliderContainer.querySelector('.slider-wrapper');
    const slides = sliderContainer.querySelectorAll('.slide');
    const prevBtn = sliderContainer.querySelector('.prev-btn');
    const nextBtn = sliderContainer.querySelector('.next-btn');
    const dotsContainer = sliderContainer.querySelector('.slider-dots');

    if (!sliderWrapper || slides.length === 0 || !prevBtn || !nextBtn || !dotsContainer) {
        console.warn(`Slider component(s) missing inside "${sliderId}". Skipping initialization.`);
        return;
    }

    let currentIndex = 0;
    const totalSlides = slides.length;

    // --- 1. 創建指示點 (Dots) ---
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        if (i === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll('.slider-dot');

    // --- 2. 更新滑動位置的函式 ---
    function goToSlide(index) {
        if (index < 0) {
            index = 0; // 防止滑到最左邊之外
        }
        if (index >= totalSlides) {
            index = totalSlides - 1; // 防止滑到最右邊之外
        }

        // 移動 slider-wrapper
        sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;

        // 更新按鈕狀態
        updateButtons();
        // 更新指示點狀態
        updateDots();
    }

    // --- 3. 更新按鈕的可見性 ---
    function updateButtons() {
        // 如果在第一張，隱藏「上一張」按鈕
        prevBtn.style.display = (currentIndex === 0) ? 'none' : 'block';
        // 如果在最後一張，隱藏「下一張」按鈕
        nextBtn.style.display = (currentIndex === totalSlides - 1) ? 'none' : 'block';
    }

    // --- 4. 更新指示點的啟用狀態 ---
    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // --- 5. 綁定按鈕事件 ---
    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    // --- 6. 支援觸控滑動 (Touch Swipe) ---
    let touchStartX = 0;
    let touchEndX = 0;

    sliderWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true }); // 使用 passive 提升效能

    sliderWrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50; // 最小滑動距離 (px)
        if (touchStartX - touchEndX > swipeThreshold) {
            // 向左滑 (看下一張)
            goToSlide(currentIndex + 1);
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // 向右滑 (看上一張)
            goToSlide(currentIndex - 1);
        }
        // 重置觸控點
        touchStartX = 0;
        touchEndX = 0;
    }


    // --- 7. (可選) 支援鍵盤左右箭頭 ---
    // 確保容器可被聚焦，以便接收鍵盤事件
    sliderContainer.setAttribute('tabindex', '0'); 
    sliderContainer.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault(); // 防止頁面滾動
            goToSlide(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault(); // 防止頁面滾動
            goToSlide(currentIndex + 1);
        }
    });

    // --- 8. 初始化狀態 ---
    goToSlide(0);
}