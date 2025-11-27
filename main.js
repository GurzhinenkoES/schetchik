class Counter {
    constructor() {
        this.value = 0;
        this.counterDisplay = document.getElementById('counterDisplay');
        this.counterValue = document.getElementById('counterValue');
        this.plusBtn = document.getElementById('plusBtn');
        this.minusBtn = document.getElementById('minusBtn');
        this.messageBox = document.getElementById('messageBox');
        
        this.init();
    }
    
    init() {
        this.updateDisplay();
        this.attachEventListeners();
    }
    
    attachEventListeners() {
        this.plusBtn.addEventListener('click', () => this.increment());
        this.minusBtn.addEventListener('click', () => this.decrement());
    }
    
    increment() {
        if (this.value < 10) {
            this.value++;
            this.updateDisplay();
            this.animateCounter();
        }
    }
    
    decrement() {
        if (this.value > -10) {
            this.value--;
            this.updateDisplay();
            this.animateCounter();
        }
    }
    
    updateDisplay() {
        this.counterValue.textContent = this.value;
        this.updateBackgroundColor();
        this.updateButtonStates();
        this.updateMessage();
    }
    
    updateBackgroundColor() {
        // Удаляем все классы цветов
        this.counterDisplay.classList.remove('positive', 'negative', 'zero');
        
        if (this.value > 0) {
            this.counterDisplay.classList.add('positive');
        } else if (this.value < 0) {
            this.counterDisplay.classList.add('negative');
        } else {
            this.counterDisplay.classList.add('zero');
        }
    }
    
    updateButtonStates() {
        // Деактивируем кнопку плюс при достижении 10
        this.plusBtn.disabled = (this.value >= 10);
        
        // Деактивируем кнопку минус при достижении -10
        this.minusBtn.disabled = (this.value <= -10);
    }
    
    updateMessage() {
        if (this.value === 10 || this.value === -10) {
            this.messageBox.textContent = 'Вы достигли экстремального значения!';
            this.messageBox.classList.add('show');
        } else {
            this.messageBox.textContent = '';
            this.messageBox.classList.remove('show');
        }
    }
    
    animateCounter() {
        this.counterDisplay.classList.add('animate');
        setTimeout(() => {
            this.counterDisplay.classList.remove('animate');
        }, 300);
    }
}

// Инициализация приложения после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    new Counter();
});