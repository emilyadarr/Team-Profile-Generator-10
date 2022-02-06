
const Employee = require("../lib/Employee");

test('create employee object', () => {
  const employee = new Employee('Kevin', '001', 'kev@kev.com');

  expect(employee.name).toBe('Kevin');
  expect(employee.id).toBe('001');
  expect(employee.email).toBe('kev@kev.com');
});

test('gets employee name', () => {
  const employee = new Employee('Kevin', '001', 'kev@kev.com');

  expect(employee.getName()).toBe('Kevin');
});

test('gets employee id', () => {
  const employee = new Employee('Kevin', '001', 'kev@kev.com');

  expect(employee.getId()).toBe('001');
});

test('gets employee email', () => {
  const employee = new Employee('Kevin', '001', 'kev@kev.com');

  expect(employee.getEmail()).toBe('kev@kev.com');
});

test('gets employee role', () => {
  const employee = new Employee('Kevin', '001', 'kev@kev.com');

  expect(employee.getRole()).toBe('Employee');
});