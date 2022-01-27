function graduate(credential) {
  return fullName => {
    return `${fullName} ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('Value of medicalSchool(Dan Abramov,):', medicalSchool('Dan Abramov, '));
console.log('Value of lawSchool(Ryan Florence,):', lawSchool('Ryan Florence, '));
