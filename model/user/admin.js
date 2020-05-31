/**
 * @description: 管理员登陆;
 */
// import { db } from '../db';
const {connection} = require('../db')
const userModel = 'think_user';
const  adminLogin = (username , password , callback) =>{
    const result = connection.query(`select ${username} from ${userModel}`);
    if(result == password){
        return callback(
            {
                status:1 // 登陆成功;
            }
        );
    }else if(!!result) {
        return callback(
            {
                status:-1  // 未找到管理员用户
            }
        )
    }else if(result !== password){
        return callback( 
            {
                status:0 // 密码错误;
            }
        )
    }else{
        return callback( 
            {
                status:-2 // 未知错误;
            }
        )
    }
}
const  UserLogin = (username , password) => {
    const result = connection.query(`select ${username} from ${userModel}`);
    if(result == password){
        return true;
    }
    return false;
}
const CreateUser = (config) =>{

}

const getUserInfo = () =>{
    var result;
    connection.query(
        `
           select  username from ${userModel}
        `,function(err, rows, fields){
            result = rows[0];
        }
    );
    console.log("model result:", result);
    connection.end();
    return result;
}
module.exports = { 
    CreateUser ,
    UserLogin,
    adminLogin ,
    getUserInfo
}