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
// 纠错 ， 暂时不使用model , 直接在controller中操作;
async function Login_koa ( ctx )  {
    console.log("ctx.request:",ctx.request.body);    
    var { username , password } = ctx.request.body;
    console.log(ctx.request.body);
    if(username == 'admin'){
         const result = await adminLogin(username);
         if(password == result.password){
             ctx.body = {
                 status:1,
                 message:'login successfully'
             }
         }else {
             ctx.body = {
                 status:0,
                 message:'login unsuccessfully'
             }
         }
    }else {
        // 普通用户登陆;

    }
} 

// Login =  (username , password)=>{ 
//     if(username == 'admin'){
//         const result = adminLogin(username , password);
//         if(result.status == 1){
//             return {
//                 status:1,
//                 message:'管理员登陆成功',
//                 session:'mysession' // 存储session , 暂时未实现;
//             }
//         }else if(result.status == 0) {
//             return {
//                 status:result.status,
//                 message:'密码错误',
//                 session:'mysession'
//             }
//         }else if(result.status == -1){
//             return {
//                 status:result.status,
//                 message:'管理员用户不存在',
//                 session:'mysession'
//             }
//         }else {
//             return {
//                 status:-2,
//                 message:'未知错误',
//                 seesion:'mysession'
//             }
//         }
//     }else {

//     }

// }
// async getUserInfo = (ctx) => {
//     const result = getUserInfo();
//     console.log("controller  result:" , result);
//     const username  = result.username;
//     if(!!result ){
//         ctx.body = {
//             status:1,
//             message:username
//         }
//     }else {
//         ctx.body = {
//             status:-1,
//             message:"无信息"
//         }
//     }
    
// }

module.exports = {
    Login_koa
}