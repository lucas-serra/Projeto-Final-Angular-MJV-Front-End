const FuncionarioDao = require('./funcionario-dao')
    , wrapAsync = require('./async-wrap')
    , auth = require('./auth');


module.exports = {
    FuncionarioDao,
    wrapAsync,
    auth
};