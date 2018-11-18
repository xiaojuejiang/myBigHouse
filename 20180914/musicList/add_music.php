<?php
    function add_music(){
        global $message;
        if(trim($_POST["title"])==""){
            $message="请填写标题";
            return;
        }
        if(trim($_POST["singer"])==""){
            $message="请填写歌手";
            return;
        }
        if(empty($_FILES["image"])){
            $message="请选择图片";
            return;
        }
        $image=$_FILES["image"];
        if($image["error"]!==0){
            $message="请重新上传图片";
            return;
        }
        $curren=$image["tmp_name"];
        $target="./upload/".time()."-".mt_rand(1000,9999).strrchr($image["name"],".");

        if(!move_uploaded_file($curren,$target)){
            $message="上传失败,请重新上传";
            return;
        }
        if(empty($_FILES["source"])){
            $message="请选择歌曲";
            return;
        }
        $source=$_FILES["source"];
        if($source["error"]!==0){
            $message="请重新上传歌曲";
            return;
        }
        $curren=$source["tmp_name"];
        $target_source="./upload/".time()."-".mt_rand(1000,9999).strrchr($source["name"],".");

        if(!move_uploaded_file($curren,$target_source)){
            $message="上传失败,请重新上传";
            return;
        }
        $str=file_get_contents("./data.json");
        $arr=json_decode($str,true);
        $arr[]=[
            "title"=>$_POST["title"],
            "singer"=>$_POST["singer"],
            "image"=>$target,
            "source"=>$target_source
        ];
        $data=json_encode($arr);
        file_put_contents("./data.json",$data);
        header("location:./musicList.php");
    }
    if($_SERVER["REQUEST_METHOD"]==="POST"){
        add_music();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>添加音乐</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width:800px;
            margin:50px auto 0;
        }
        h3{
            font-size: 24px;
            font-weight: 400;
            font-family: "宋体";
            padding: 0 10px;
            margin: 10px 0;
        }
        input[type="text"] {
            width:100% ; 
            height: 28px;
            border-radius: 5px;
            border:1px solid #ccc;
            outline: none;
            padding:0 10px;
        }
        button {
            margin: 10px 20px;
            padding: 5px 10px;
            border-radius: 3px;
            outline: none;
            border: 1px solid #ccc;
            cursor: pointer;
        }
        p{
            color:red;
            padding:10px;
        }
    </style>
</head>
<body>
    <div class="box">
        <form action="" method="post" enctype="multipart/form-data">
            <div>
                <h3>标题</h3>
                <input type="text" name="title">
            </div>
            <div>
                <h3>歌手</h3>
                <input type="text" name="singer">
            </div>
            <div>
                <h3>海报</h3>
                <input type="file" name="image">
            </div>
            <div>
                <h3>音乐</h3>
                <input type="file" name="source">
            </div>
            <div class="btn">
                <?php if($message):?>
                    <p><?php echo $message;?></p>
                <?php endif; ?>
                <button>添加音乐</button>
            </div>
        </form>
    </div>
</body>
</html>