    // Функция скрытия стартовой страницы
    function hideStartPage() {
      const startPage = document.getElementById('startPage');
      startPage.style.display = 'none';
    }
    // Функция отображения стартовой страницы
    function showStartPage() {
      // Скрываем индикатор загрузки и останавливаем загрузку фрейма
      document.getElementById('loadingIndicator').style.display = 'none';
      document.getElementById('contentFrame').src = 'about:blank';
      // Отображаем стартовую страницу и обе секции
      document.getElementById('startPage').style.display = 'flex';
      document.getElementById('exploitationSection').style.display = 'block';
      document.getElementById('technicalSection').style.display = 'block';
      document.getElementById('IETPSection').style.display = 'block';
      document.querySelector('.exploitation-docs').style.display = 'block';
      document.querySelector('.technical-docs').style.display = 'block';
      document.querySelector('.IETP-docs').style.display = 'block';
      document.getElementById('PresSection').style.display = 'block';
      document.querySelector('.Pres-mat').style.display = 'block';
    }
    // Функция загрузки HTML-контента или PDF в iframe с подсветкой активной вкладки
    function loadContent(element, pageUrl) {
      hideStartPage(); // Скрыть стартовую страницу при загрузке любого элемента
      const loadingIndicator = document.getElementById('loadingIndicator');
      loadingIndicator.style.display = 'flex';
      // Снятие активного класса с предыдущей вкладки
      document.querySelectorAll('.file-item').forEach(item => item.classList.remove('active'));
      // Установка активного класса на текущую вкладку
      element.classList.add('active');
      const iframe = document.getElementById('contentFrame');
      iframe.onload = function () {
        loadingIndicator.style.display = 'none';
      };
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
      const toggleIcon = document.getElementById('toggleIcon');
      structure.classList.toggle('hidden');
      contentArea.classList.toggle('full-width');
      toggleIcon.textContent = structure.classList.contains('hidden') ? '▶' : '◀';
    }

    function showExploitationDocs() {
      hideStartPage();
      document.getElementById('selectMessage').style.display = 'flex';
      // Показ только раздела "Эксплуатационная документация"
      document.getElementById('exploitationSection').style.display = 'block';
      document.querySelector('.exploitation-docs').style.display = 'block';
      document.getElementById('technicalSection').style.display = 'none';
      document.querySelector('.technical-docs').style.display = 'none';
      document.getElementById('IETPSection').style.display = 'none';
      document.querySelector('.IETP-docs').style.display = 'none';
      document.getElementById('PresSection').style.display = 'none';
      document.querySelector('.Pres-mat').style.display = 'none';
    }

    function showTechnicalDocs() {
      hideStartPage();
      document.getElementById('selectMessage').style.display = 'flex';
      // Показ только раздела "Технологическая документация"
      document.getElementById('exploitationSection').style.display = 'none';
      document.querySelector('.exploitation-docs').style.display = 'none';
      document.getElementById('technicalSection').style.display = 'block';
      document.querySelector('.technical-docs').style.display = 'block';
      document.getElementById('IETPSection').style.display = 'none';
      document.querySelector('.IETP-docs').style.display = 'none';
      document.getElementById('PresSection').style.display = 'none';
      document.querySelector('.Pres-mat').style.display = 'none';
    }

    function showIETPDocs() {
      hideStartPage();
      document.getElementById('selectMessage').style.display = 'flex';
      // Показ только раздела "Интерактивная документация"
      document.getElementById('exploitationSection').style.display = 'none';
      document.querySelector('.exploitation-docs').style.display = 'none';
      document.getElementById('technicalSection').style.display = 'none';
      document.querySelector('.technical-docs').style.display = 'none';
      document.getElementById('IETPSection').style.display = 'block';
      document.querySelector('.IETP-docs').style.display = 'block';
      document.getElementById('PresSection').style.display = 'none';
      document.querySelector('.Pres-mat').style.display = 'none';
    }

    function loadContent(element, pageUrl) {
      hideStartPage();
      document.getElementById('selectMessage').style.display = 'none'; // Скрываем сообщение
      const loadingIndicator = document.getElementById('loadingIndicator');
      loadingIndicator.style.display = 'flex';
      document.querySelectorAll('.file-item').forEach(item => item.classList.remove('active'));
      element.classList.add('active');
      const iframe = document.getElementById('contentFrame');
      iframe.onload = function () {
        loadingIndicator.style.display = 'none';
      };
      iframe.src = pageUrl;
    }
