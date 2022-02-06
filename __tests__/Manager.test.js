const Manager = require('../lib/Manager');

test('creates manager object', () => {
  const manager = new Manager('Bill', '002', 'bill@bill.com', '102');

  expect(manager.name).toBe('Bill');
  expect(manager.id).toBe('002');
  expect(manager.email).toBe('bill@bill.com');
  expect(manager.officeNumber).toBe('102');
});

test('gets manager role', () => {
  const manager = new Manager('Bill', '002', 'bill@bill.com', '102');

  expect(manager.getRole()).toBe('Manager');
});