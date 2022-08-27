
describe('Тестирование поиска яндекс', function () {
   it('Проверка, что при поиске картинок котята в выдаче есть котята картинки', function () {
        cy.visit('https://yandex.ru');
        cy.get('#text').type('котята');
        cy.get('.mini-suggest__button-text').click ();
        cy.contains('Картинки по запросу «Котята»');
        
    })
})
