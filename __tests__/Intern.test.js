const Intern = require('../lib/Intern');

test('creates intern object', () => {
  const intern = new Intern('Alleca', '004', 'al@alleca.com', 'Butler');

  expect(intern.name).toBe('Alleca');
  expect(intern.id).toBe('004');
  expect(intern.email).toBe('al@alleca.com');
  expect(intern.school).toBe('Butler');
});

test('gets intern school', () => {
  const intern = new Intern('Alleca', '004', 'al@alleca.com', 'Butler');

  expect(intern.getSchool()).toBe('Butler');
});

test('gets intern role', () => {
  const intern = new Intern('Alleca', '004', 'al@alleca.com', 'Butler');

  expect(intern.getRole()).toBe('Intern');
});