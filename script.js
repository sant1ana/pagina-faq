document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.faq-item');

    accordionItems.forEach(item => {
        const question = item.querySelector('.pergunta');
        const answer = item.querySelector('.resposta');

        question.addEventListener('click', function () {
            answer.classList.toggle('active');
            

            question.dataset.active = answer.classList.contains('active') ? '-' : '+';
        });
    });
});