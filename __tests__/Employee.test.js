const Employee = require('../lib/Employee.js');


test('test for employee object', () => {
    const employee = new Employee('Sarah', 0, 'sarah@work.com' );
    
    expect(employee.name).toBe('Sarah');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('sarah@work.com');
  });

  test("test employee name", () => {
    const employee = new Employee('Sarah');

    expect(employee.name).toBe('Sarah');
});

test("test employee id", () => {
  const employee = new Employee('Sarah', 0);

  expect(employee.id).toEqual(expect.any(Number));
});

test("test employee email", () => {
  const employee = new Employee('sarah@work.com');

  expect(employee.email).toBe('sarah@work.com');
});

test("test employee role", () => {
  const employee = new Employee;

  expect(employee.getRole()).toBe('Employee');
});