$(function(){
    $('#login').on('click',function(){
        let user=$('[name=user]').val()
        let password=$('[name=password]').val()
        console.log(user,password)
        $.ajax({
            type:'post',
            url:'/login',
            data:{
                user,
                password
            },
            success:function(res){
                console.log(res)
            }
        })
    })
})