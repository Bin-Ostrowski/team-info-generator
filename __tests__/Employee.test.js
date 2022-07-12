const Employee = require('../lib/Employee.js');

// jest.mock('../lib/?????');

test('create an employee object', () => {
    const employee = new Employee('Robin', 1, 'test@test.com');

    expect(employee.name).toBe('Robin');
    expect(employee.id).toBe(1)
    expect(employee.getName()).toBe('Robin')
    
})

