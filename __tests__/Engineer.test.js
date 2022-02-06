const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
  const engineer = new Engineer('Shelly', '003', 'shelly@shelly.com', 'shellster');

  expect(engineer.name).toBe('Shelly');
  expect(engineer.id).toBe('003');
  expect(engineer.email).toBe('shelly@shelly.com');
  expect(engineer.github).toBe('shellster');
});

test('gets engineer github', () => {
  const engineer = new Engineer('Shelly', '003', 'shelly@shelly.com', 'shellster');

  expect(engineer.getGithub()).toBe('shellster');
});

test('gets engineer role', () => {
  const engineer = new Engineer('Shelly', '003', 'shelly@shelly.com', 'shellster');

  expect(engineer.getRole()).toBe('Engineer');
});