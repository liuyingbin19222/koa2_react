## 后端 + 前端 小全栈项目

### 后端

    最开始使用node 来写 ， 但是对于创建server和router 的结合用起来不顺，于是使用koa2作为后台框架，数据库暂时使用mysql , 今天晚上刚刚安装好mongodb , 以后有时间将数据库换做mongodb. 操作数据库使用mysql npm包作为操作数据库的工具，方式停留在裸写sql语句的层面，之后换做knex工具，生成sql语句操作数据库，另外 mysql query() 函数的返回值有大量额外信息，不好用。这是弃用它的原因。结构采用model , conreoller , router 的布局方式。

    ```
│  index.js
│  package-lock.json
│  package.json
│  README.md
│  tree.md
│  
├─config
├─controller
│      userController.js
│      
├─model
│  │  db.js
│  │  
│  └─user
│          admin.js
│       
│          
├─public
└─routes
        router.js
        
    ```

### 前端

    前端使用react 作为技术栈，暂时还没开始。
