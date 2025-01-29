// Скрытие стартовой страницы
function hideStartPage() {
  const startPage = document.getElementById('startPage');
  startPage.style.display = 'none';

  // Снимаем активный класс у всех вкладок
  resetActiveTabs();
}

// Сброс активных вкладок
function resetActiveTabs() {
  document.querySelectorAll('.file-item').forEach(item => item.classList.remove('active'));
}

// Показ стартовой страницы
function showStartPage() {
  document.getElementById('loadingIndicator').style.display = 'none';
  document.getElementById('contentFrame').src = 'about:blank';
  document.getElementById('startPage').style.display = 'flex';
  document.querySelectorAll('.skin-tree').forEach(section => section.style.display = 'block'); //показ всех секций
  document.querySelectorAll('.skin-tree > .file-item').forEach(item => item.style.display = 'flex'); // показ всех элементов, входящих в секции

  // Сбрасываем активные вкладки при возврате на стартовую страницу
  resetActiveTabs();
}

// Загрузка контента
function loadContent(element, pageUrl) {
  hideStartPage(); // Скрываем стартовую страницу
  const loadingIndicator = document.getElementById('loadingIndicator');
  loadingIndicator.style.display = 'flex';

  // Снимаем активный класс у всех вкладок и добавляем его к текущей
  resetActiveTabs();
  element.classList.add('active');

  const iframe = document.getElementById('contentFrame');
  iframe.onload = () => loadingIndicator.style.display = 'none';
  iframe.src = pageUrl;
}

// Функция загрузки PDF и предотвращения всплытия
function loadPdf(event, pdfUrl) {
  hideStartPage(); // Скрыть стартовую страницу при загрузке любого PDF
  event.stopPropagation();
  loadContent(event.target.closest('.file-item'), pdfUrl);
}
// Функция для скрытия/показа структуры
function toggleStructure() {
  const structure = document.getElementById('structure');
  const contentArea = document.getElementById('contentArea');
  const resizer = document.getElementById('skin-split-pane');
  const toggleIcon = document.getElementById('toggleIcon');

  if (structure.classList.contains('hidden')) {
    // Показываем структуру и разделитель
    structure.classList.remove('hidden');
    contentArea.classList.remove('full-width');
    resizer.classList.remove('hidden');
    toggleIcon.textContent = '◀';
    structure.style.width = '20%'; // Восстанавливаем стандартную ширину
    contentArea.style.width = '80%';
  } else {
    // Скрываем структуру и разделитель
    structure.classList.add('hidden');
    contentArea.classList.add('full-width');
    resizer.classList.add('hidden');
    toggleIcon.textContent = '▶';
    structure.style.width = '0'; // Скрываем структуру
    contentArea.style.width = '100%';
  }
}

// Поиск по документации
function searchDocuments() {
  const searchText = document.getElementById('searchInput').value.toLowerCase();
  const fileItems = document.querySelectorAll('.file-item');

  fileItems.forEach(item => {
    const itemText = item.textContent.toLowerCase();
    if (itemText.includes(searchText)) {
      item.style.display = 'flex'; // Показываем элемент
    } else {
      item.style.display = 'none'; // Скрываем элемент
    }
  });
}

// Очистка поиска
function clearSearch() {
  document.getElementById('searchInput').value = ''; // Очищаем поле поиска
  searchDocuments(); // Возвращаем все элементы
}
// Показ раздела для Большой траверсы
function showExploitationDocs() {
  hideStartPage();
  document.getElementById('selectMessage').style.display = 'flex';
  document.getElementById('exploitationSection').style.display = 'block';
  document.querySelectorAll('.skin-tree:not(#exploitationSection)').forEach(section => section.style.display = 'none');
}

// Показ раздела для Модуля
function showTechnicalDocs() {
  hideStartPage();
  document.getElementById('selectMessage').style.display = 'flex';
  document.getElementById('technicalSection').style.display = 'block';
  document.querySelectorAll('.skin-tree:not(#technicalSection)').forEach(section => section.style.display = 'none');
  // функция для отображения элементов с ID PresentMDL
  document.getElementById('PresSection').style.display = 'block';
  // Получаем все элементы с классом .file-item внутри секции с ID PresSection
  document.querySelectorAll('#PresSection .file-item').forEach(item => {
    if (!item.id.includes('PresentMDL')) {
      // Скрываем элементы, ID которых не содержит "PresentMDL"
      item.style.display = 'none';
    } else {
      // Показываем элементы, ID которых содержит "PresentMDL"
      item.style.display = 'block';
    }
  });

}

// Показ только раздела "Линейная траверса"
function showIETPDocs() {
  hideStartPage();
  document.getElementById('selectMessage').style.display = 'flex';
  document.getElementById('EducateSection').style.display = 'block';
  document.getElementById('IETPSection').style.display = 'block';
  document.querySelectorAll('.skin-tree:not(#EducateSection):not(#IETPSection)').forEach(section => section.style.display = 'none');
}


// Анимация и сообщение о повороте устройства
function checkOrientation() {
  const rotateMessage = document.getElementById('rotateMessage');

  if (window.matchMedia("(orientation: portrait)").matches) {
    // Устройство в портретной ориентации
    rotateMessage.style.display = 'flex';
  } else {
    // Устройство в ландшафтной ориентации
    rotateMessage.style.display = 'none';
  }
}

// Проверяем ориентацию при загрузке страницы
window.addEventListener('load', checkOrientation);

// Отслеживаем изменения ориентации
window.addEventListener('orientationchange', checkOrientation);

// Убираем сообщение, если пользователь вручную изменяет ориентацию
window.addEventListener('resize', () => {
  const rotateMessage = document.getElementById('rotateMessage');
  if (!window.matchMedia("(orientation: portrait)").matches) {
    rotateMessage.style.display = 'none';
  }

});
