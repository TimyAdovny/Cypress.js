
describe('Тестирование авторизации в staya', function () {

    it('Тест авторизации с [+] логином и паролем', function () {

        cy.visit('https://staya.dog/login');
        cy.get('.auth-form > form > [type="email"]').type('tz888@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('asdf1234');
        cy.get('.auth-form__submit > .s-button__content').click();

        cy.contains('Мои заказы');
    })
    
    it('Тест авторизации с [-] логином и паролем', function () {

        cy.visit('https://staya.dog/login');
        cy.get('.auth-form > form > [type="email"]').type('tz888@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('asdf1235');
        cy.get('.auth-form__submit > .s-button__content').click();
        
        cy.contains('Невозможно войти с предоставленными учетными данными');
    })

})










