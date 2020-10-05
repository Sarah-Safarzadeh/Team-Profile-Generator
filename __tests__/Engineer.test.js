const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');


test ('test for Engineer object', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe("object");
});

test ('test for Engineer name', () => {
    const engineer = new Engineer('Fleur');

    expect(engineer.name).toBe('Fleur')
});
    
test ('test for Engineer id', () => {
    const engineer = new Engineer('oui');

    expect(engineer.id).toBe('oui');
});

test ('test for Engineer email', () => {
    const engineer = new Engineer();

    expect(engineer.email).toBe('fleur@work.com');
});

test ('test for Engineer role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
});

test ('test for Engineer github', () => {
    const engineer = new Engineer(github);

    expect(engineer.getRole()).toBe('Engineer');
});