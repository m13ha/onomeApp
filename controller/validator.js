const bcrypt = require('bcrypt');

const validator =  async (faculty, firstname, lastname, pswd) => {
    let studentEmail = `${firstname}.${lastname}@${faculty}.uniben.edu`
    let validationCode = Math.floor(Math.random() * 1000000 + 1);
    let newPswd = await bcrypt.hash(pswd, 10);

    return [studentEmail, validationCode, newPswd];
}

module.exports = validator;