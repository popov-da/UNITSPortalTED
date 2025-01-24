const resizer = document.getElementById('resizer');
const leftPanel = document.getElementById('structure');
const rightPanel = document.getElementById('contentArea');
const container = document.querySelector('.container');

let isResizing = false;
let animationFrameId = null;
let containerWidth = container.offsetWidth; // Кэшируем ширину контейнера

// Обновляем ширину контейнера только при изменении размеров окна
window.addEventListener('resize', () => {
  containerWidth = container.offsetWidth;
});

resizer.addEventListener('mousedown', (e) => {
  isResizing = true;
  document.body.style.cursor = 'col-resize';
  document.body.style.pointerEvents = 'none'; // Отключаем события на другие элементы
});

document.addEventListener('mousemove', (e) => {
  if (!isResizing) return;

  if (animationFrameId) return;
  animationFrameId = requestAnimationFrame(() => {
    const offsetX = e.clientX; // Текущая позиция курсора
    const newWidth = (offsetX / containerWidth) * 100;

    if (newWidth >= 10 && newWidth <= 50) {
      leftPanel.style.width = `${newWidth}%`;
      rightPanel.style.width = `${100 - newWidth}%`;
    }

    animationFrameId = null;
  });
});

document.addEventListener('mouseup', () => {
  if (isResizing) {
    isResizing = false;
    document.body.style.cursor = 'default';
    document.body.style.pointerEvents = ''; // Включаем события обратно
  }
});
