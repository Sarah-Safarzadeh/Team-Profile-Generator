const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('test for manager object', () => {
    const manager = new Manager();

    expect(manager.name).toBe('Sarah');
    expect(manager.id).toBe('xyz');
    expect(manager.email).toBe('sarah2@work.com');
    expect(manager.officeNumber).toBe('555');
});

test('test for manager name', () => {
    const manager = new Manager('Sarah');

    expect(manager.name).toBe('Sarah');
});

test('test for manager id', () => {
    const manager = new Manager('xyz');

    expect(manager.id).toBe('xyz');
});

test('test for manager email', () => {
    const manager = new Manager('sarah2@work.com');

    expect(manager.email).toBe('sarah2@work.com');
});

test('test for manager office number', () => {
    const manager = new Manager('555');

    expect(manager.officeNumber).toBe('555');
});

test('test for manager role', () => {
    const manager = new Manager;

    expect(employee.getRole()).toBe('Manager');
});