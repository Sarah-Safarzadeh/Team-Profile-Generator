const Employee = require('../lib/Employee');


test('test for employee object', () => {
    const employee = new Employee('Sarah');

    expect(employee.name).toBe('Sarah');
    expect(employee.id).toBe('abc');
    expect(employee.email).toBe('sarah@work.com');
  });
  