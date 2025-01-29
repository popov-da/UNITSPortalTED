const resizer = document.getElementById('skin-split-pane');
const leftPanel = document.getElementById('structure');
const rightPanel = document.getElementById('contentArea');
const container = document.querySelector('.container');

let isResizing = false;
let startX = 0;
let startWidth = 0;

resizer.addEventListener('mousedown', (e) => {
  e.preventDefault(); // Отменяем выделение текста
  isResizing = true;
  startX = e.clientX;
  startWidth = leftPanel.offsetWidth; // Запоминаем текущую ширину
  document.body.style.cursor = 'col-resize';
  document.body.style.pointerEvents = 'none';
});

document.addEventListener('mousemove', (e) => {
  if (!isResizing) return;

  e.preventDefault();
  const deltaX = e.clientX - startX; // Разница между начальной и текущей позицией
  const newWidth = ((startWidth + deltaX) / container.offsetWidth) * 100; // Вычисляем новую ширину в процентах

  if (newWidth >= 15 && newWidth <= 40) {
    leftPanel.style.width = `${newWidth}%`;
    rightPanel.style.width = `${100 - newWidth}%`;
  }
});

document.addEventListener('mouseup', () => {
  if (isResizing) {
    isResizing = false;
    document.body.style.cursor = 'default';
    document.body.style.pointerEvents = '';
  }
});
