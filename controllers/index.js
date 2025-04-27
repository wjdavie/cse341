const awesomeFunction =  (req, res, next) => {
    res.json('Ethan Davie');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Super awesome person');
};

module.exports = {awesomeFunction, returnAnotherPerson };