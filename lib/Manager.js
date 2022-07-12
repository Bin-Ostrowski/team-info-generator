const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        //call parent constructor here: - does this call its properties and methods?
        super(name, id, email);
        //how do i call its methods as well as
        this.officeNumber = officeNumber;
    
    };
    officeNumber() {
        return this.officeNumber;
    };
    getRole() {
        return `Manager`;
    };

};

module.exports = Manager