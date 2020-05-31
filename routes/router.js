// import {Login} from '../controller/userController'
const {Login_koa , getUserInfo} = require('../controller/userController')
exports.router = {
    UserModel:{
        Login_koa:Login_koa,
        getUserInfo:getUserInfo
    }

};

// exports 是modu;e.exports 的引用;
