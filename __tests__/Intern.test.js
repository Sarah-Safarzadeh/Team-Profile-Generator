const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

jest.mock('../lib/Intern');

test('test for intern object', () => {
    const intern = new Intern();
});

test('test for intern name', () => {
    const intern = new Intern();

    expect(intern.name).toBe('Pineapple');
});

test('test for intern id', () => {
    const intern = new Intern();

    expect(intern.id).toBe('pin');
});

test('test for intern email', () => {
    const intern = new Intern();

    expect(intern.email).toBe('pineapple@work.com');
});

test('test for intern role', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});

    test('test for intern school', () => {
        const intern = new Intern();

        expect(intern.school).toBe('University of Texas');
});