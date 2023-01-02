import FormPage from './page/form.page.js';

beforeEach(() => {
  cy.visit('https://demoqa.com/');
  cy.viewport(1940, 1080);
})



describe('Go to Forms and check Registration Form', () => {
  it('passes', () => {

    FormPage.goToForm();
    FormPage.fillNameForm();
    FormPage.chooseGender();
    FormPage.actionDateOfBirth();
    FormPage.actionSubject();
    FormPage.actionCheckBox();

  })
})