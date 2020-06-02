/**
 * @description: 管理员登陆;
 * @author: liu yingbin
 * @note import export default 方式在node中是不支持的，可以使用require; 
 */

const {
    mysql
} = require('../db'); // config中数据库配置， 使用knex集中管理;

const userModel = 'think_user';

const  adminLogin = async (username) =>{
    const result = await mysql(userModel).where({
        username:username
    });
    if(result.length > 0){
        console.log("result:",result);
        return result; // 希望是一个数组，别是数据杂乱的对象就好了。
    }else {
        return [];
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