describe('Покемоны', function () {
   it('покупка скина на тренера', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('islandloveu@gmail.com');
        cy.get('#password').type('20032012Zz');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(10) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5100000000000008');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Ekaterina');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно');
    })

})