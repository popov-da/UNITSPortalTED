const resizer = document.getElementById('skin-split-pane');
const leftPanel = document.getElementById('structure');
const rightPanel = document.getElementById('contentArea');
const container = document.querySelector('.container');

let isResizing = false;

resizer.addEventListener('mousedown', (e) => {
  e.preventDefault(); // Отменяем выделение текста
  isResizing = true;
  document.body.style.cursor = 'col-resize';
  document.body.style.pointerEvents = 'none';
});

document.addEventListener('mousemove', (e) => {
  if (!isResizing) return;

  e.preventDefault(); // Предотвращаем выделение текста
  const offsetX = e.clientX;
  const newWidth = (offsetX / container.offsetWidth) * 100;

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
