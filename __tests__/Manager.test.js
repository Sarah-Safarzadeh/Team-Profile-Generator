const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('test for manager object', () => {
    const manager = new Manager();

    expect(manager.name).toBe('Sarah');
    expect(manager.id).toBe('xyz');
    expect(manager.email).toBe('sarah2@work.com');
    expect(manager.officeNumber).toBe('555');
});