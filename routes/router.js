// import {Login} from '../controller/userController'
const {Login_koa } = require('../controller/userController')
exports.router = {
    UserModel:{
        Login_koa:Login_koa,
    }

};

// exports 是modu;e.exports 的引用;
