// Загрузка модальных окон из файла modal.html
document.addEventListener('DOMContentLoaded', function() {
    loadModal();  // Ваши действия сразу после загрузки структуры страницы
});

function loadModal() {
    fetch('modal.html')
        .then(response => response.text())  // Получаем текстовое содержимое
        .then(data => {
            const modalContainer = document.getElementById('modalContainer');
            modalContainer.innerHTML = data; // Вставляем содержимое в контейнер

            // Получаем кнопки для открытия модальных окон и устанавливаем обработчик
            const buttons = document.querySelectorAll('.knopka');
		
			// Добавляем обработчик для каждой кнопки
            buttons.forEach(button => {
                button.onclick = function() {
                    const modalId = button.getAttribute('data-modal') || 'modalNotFound';
                    openModalById(modalId);  // Открытие окна по id
                };
            });

			// Функция для открытия модального окна по ID
			function openModalById(modalId) {
				const modal = document.getElementById(modalId);
				if (modal) {
					modal.style.display = "block"; // Открываем модальное окно
				}
			}
		
            // Закрытие модального окна при клике по фону
            document.querySelectorAll('.modal').forEach(modalElement => {
                modalElement.onclick = function(event) {
                    if (event.target === modalElement) {
                        modalElement.style.display = "none";
                    }
                };
            });
		
			// Закрытие модальных окон при нажатии клавиши Escape
			window.onkeydown = function(event) {
				if (event.key === "Escape") {
					const modals = document.querySelectorAll(".modal");
					modals.forEach(modal => modal.style.display = "none");
				}
			}
        })
		.catch(error => console.error('Ошибка при загрузке модальных окон:', error));
}


