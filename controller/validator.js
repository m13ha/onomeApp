const bcrypt = require('bcrypt');

const validator =  async (faculty, firstname, lastname, pswd) => {
    let studentEmail = `${firstname}.${lastname}@${faculty}.uniben.edu`
    let validationCode = Math.floor(Math.random() * 1000000 + 1);
    let salt  = await bcrypt.genSalt();
    let newPswd = await bcrypt.hash(pswd, salt);

    return [studentEmail, validationCode, newPswd];
}

module.exports = validator;