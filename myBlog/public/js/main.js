$(function(){

    $('tbody').on('click','#delete',function(){
        let id=$(this).data('id')
        console.log(id)
        $.ajax({
            type:'post',
            url:'/post/delete',
            data:{
                id:id
            },
            success:function(result){
                console.log(result)
                if(result=='success'){
                    location.reload()
                }
            }
        })
    })

})