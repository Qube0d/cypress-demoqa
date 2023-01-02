import Credential, { cred } from "./credential.js"
//const credentialsPage = new Credential()
class FormPage {

    locator = {
        mainPageForms() {
            return cy.contains('Forms')//.should('have.text', 'Forms')
        },
        practiceForm() {
            return cy.contains('Practice Form')
        },
        firstName() {
            return cy.get('#firstName')
        },
        lastName() {
            return cy.get('#lastName')
        },
        emailForm() {
            return cy.get('#userEmail')
        },
        genderMale() {
            return cy.get('#gender-radio-1')
        },
        genderFemale() {
            return cy.get('#gender-radio-2')
        },
        genderOther() {
            return cy.get('#gender-radio-3')
        },
        phoneMobile() {
            return cy.get('#userNumber')
        },
        dateOfBirth() {
            return cy.get('#dateOfBirthInput')
        },
        monthSelect() {
            return cy.get('.react-datepicker__month-select')
        },
        yearSelect() {
            return cy.get('.react-datepicker__year-select')
        },
        datePicker() {
            return cy.get('.react-datepicker__month')
        },
        subjects() {
            return cy.get('#subjectsContainer')
        },
        subjectsElements() {
            return cy.get('.subjects-auto-complete__value-container')
        },
        hobbiesSportChkBox() {
            return cy.get('#hobbies-checkbox-1')
        },
        hobbiesReadingChkBox() {
            return cy.get('#hobbies-checkbox-2')
        },
        hobbiesMusicChkBox() {
            return cy.get('#hobbies-checkbox-3')
        },

    }
    goToForm() {
        this.locator.mainPageForms().click();
        this.locator.practiceForm().click();
    }
    fillNameForm() {
        this.locator.firstName().click({ force: true }).type(cred.firstName);
        this.locator.lastName().type(cred.lastName);
        this.locator.emailForm().type(cred.email);
        this.locator.phoneMobile().type(cred.mobile);
    }
    chooseGender() {
        this.locator.genderMale().click({ force: true });
        //this.locator.genderFemale().click();
        //this.locator.genderOther().click();
    }
    actionDateOfBirth() {
        this.locator.dateOfBirth().click({ force: true });
        this.locator.monthSelect().select('11');
        this.locator.yearSelect().select('2022');
        this.locator.datePicker().click({ force: true });
    }
    actionSubject() {
        this.locator.subjects().type('M {downArrow}');
        this.locator.subjects().type('{downArrow}');
    }
    actionCheckBox() {
        this.locator.hobbiesSportChkBox().click({force: true});
        this.locator.hobbiesReadingChkBox().click({force: true});
        this.locator.hobbiesMusicChkBox().click({ force: true });
        this.locator.hobbiesSportChkBox().click({force: true});
        this.locator.hobbiesReadingChkBox().click({force: true});
        this.locator.hobbiesMusicChkBox().click({ force: true });
    }



    // actionSubject() {
    //     this.locator.subjects().type('M');
    //     this.locator.subjectsElements().each(function ($ele, index, $list) {
    //         if ($ele.text().includes("Maths")){
    //             cy.wrap($ele).click();
    //         }
    //         else
    //         {
    //             cy.log($ele.text())
    //         }
    //     })
        
    // }
    // fill({ name, lastName}) {
    //     if (name) {
    //         this.locator.firstName().type(name)
    //     }
    //     if (lastName) {
    //         this.locator.lastName().type(lastName)
    //     }
    // }











}
module.exports = new FormPage();
//module.exports = new FormPage();