console.log(`В списке ${document.querySelectorAll('.item').length} категории.`);

document.querySelectorAll('.item').forEach(category => console.log(`Категория: ${category.querySelector('h2').textContent}. `, `Количество элементов: ${category.querySelectorAll('li').length}`));
