const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'feedback'
})

module.exports = {
    login: (req,res)=>{
        let sqlStr='select * from userinfo'
        connection.query(sqlStr,(err,result)=>{
            if(err) res.static('500').send({static:'500',msg:err.message,data:null})
            for(let i=0;i<result.length;i++){
                if(result[i].user==req.body.user && result[i].password==req.body.password){
                    res.send({static:'200',msg:'success'})
                }               
            }
            res.send({static:'200',msg:'false'})
        })
    },
    register: (req,res)=>{
        let sqlStr='select user from userinfo'

        connection.query(sqlStr,(err,result)=>{
            if(err) res.send('404 is not found')
            // res.send(result)
            for(let i=0;i<result.length;i++){
                if(result[i].user==req.body.user){
                    res.send('用户名已存在')
                }               
            }
            let sqlStr='insert into userinfo set ?'
            connection.query(sqlStr,req.body,(err,result)=>{
                if(err) res.status('500').send({status:'200',msg:err.message,data:null})
                res.send({status:'200',msg:'ok',data:result})
            })            
        })
    },

    query : (req, res) => {
        let sqlStr = 'select * from comment order by id'

        connection.query(sqlStr, (err, result) => {
            if (err) res.send('404 is not found')
            res.render('index.html', {
                comment: result
            })
        })
    },

    insert : (req, res) => {
        let sqlStr = 'insert into comment set ?'
        connection.query(sqlStr, req.body, (err, result) => {
            if (err) res.send('添加失败:' + err.message)
            res.send('success')
        })
    },

    delete : (req, res) => {
        let sqlStr = 'delete from comment where id=?'
        connection.query(sqlStr, req.body.id, (err, result) => {

            if (err) res.status('500').send('删除失败:' + err.message)
            res.send('success')
        })
    }

}