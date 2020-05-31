// import {adminLogin , UserLogin , CreateUser } from '../model/user/admin';
const  { adminLogin , UserLogin , CreateUser , getUserInfo } = require('../model/user/admin')
/**
 * @description: 管理员登陆使用admin 账号， 普通用户登陆使用普通账号;
 */

/**
 * 
 * @param {*} username 
 * @param {*} password
 * @description: 使用koa2重写代码，koa2的标志是在函数中使用async; 
 */

exports.Login_koa = async ( ctx ) => {
    var request = ctx.request.body;
    console.log(ctx.request);
    if(request.username == 'admin'){
        await adminLogin(request.username , request.password,(res)=>{
            if(res.status == 1){
                _res = { 
                    status:1,
                    message:'管理员登陆成功',
                    session:'mysession' // 存储session , 暂时未实现;
                };
                return _res;
            }else if(res.status == 0) {
                _res = {
                    status:result.status,
                    message:'密码错误',
                    session:'mysession'
                } 
                return _res;
            }else if(res.status == -1){
                _res = {
                    status:result.status,
                    message:'管理员用户不存在',
                    session:'mysession'
                }
                return _res;
            }else {
                _res = {
                    status:-2,
                    message:'未知错误',
                    seesion:'mysession'
                }
                return _res;
            }
        });
    
    }else {

    }
} 

exports.Login =  (username , password)=>{ 
    if(username == 'admin'){
        const result = adminLogin(username , password);
        if(result.status == 1){
            return {
                status:1,
                message:'管理员登陆成功',
                session:'mysession' // 存储session , 暂时未实现;
            }
        }else if(result.status == 0) {
            return {
                status:result.status,
                message:'密码错误',
                session:'mysession'
            }
        }else if(result.status == -1){
            return {
                status:result.status,
                message:'管理员用户不存在',
                session:'mysession'
            }
        }else {
            return {
                status:-2,
                message:'未知错误',
                seesion:'mysession'
            }
        }
    }else {

    }

}

exports.getUserInfo = (ctx) => {
    const result = getUserInfo();
    console.log("controller  result:" , result);
    const username  = result.username;
    if(!!result ){
        ctx.body = {
            status:1,
            message:username
        }
    }else {
        ctx.body = {
            status:-1,
            message:"无信息"
        }
    }
    
}
