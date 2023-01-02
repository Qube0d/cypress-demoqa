class Credential{
    constructor(help) {
        this.help = help;
        this.cred = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'example@example.com',
            mobile: '80960000000'
        };
        

    }
}

module.exports = new Credential()