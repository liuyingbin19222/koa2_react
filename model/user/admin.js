/**
 * @description: 管理员登陆;
 * @author: liu yingbin
 * @note import export default 方式在node中是不支持的，可以使用require; 
 */

const {
    connection
} = require('../db'); // config中数据库配置， 使用knex集中管理;
const {
    db_config 
} = require('../../config/config');

const userModel = 'think_user';

const  adminLogin = async (username) =>{
    console.log("db_config对象:",db_config);
    var result;
    connection.connect();
    
    connection.query(`select ${username} from  ${userModel}`, function(err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows[0]);
        if(rows.length>0){
            result =  rows[0];
        }else{
            result =  [];
        }
    });
    connection.end();
    return result;
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