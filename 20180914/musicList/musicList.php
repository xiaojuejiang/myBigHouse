<?php
    if(file_get_contents("./data.json")){
        $arr=json_decode(file_get_contents("./data.json"),true);
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>我的歌单</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 1200px;
            margin: 50px auto 0;
        }
        table {
            width: 100%;
            text-align: center;
        }
        th{
            background-color: #ccc;
            border: 1px solid #fff;
            height: 38px;
            line-height: 38px;
        }
        .tr-head{
            height: 40px;
        }
        tr{
            display: flex;
            height: 54px;
            line-height: 54px;
        }
        .flex1{
            flex:1 ;
        }
        .flex2{
            flex:2 ;
        }
        .flex6{
            flex:6 ;
        }
        .title{
            font-size: 50px;
        }
        .play{
            font-size: 0;
        }
        audio{
            width: 100%;
        }
        .tb-tr{
            font-size: 18px;
            color: #666;
        }
        button{
            border: 0;
            outline: none;
        }
        .detele {
            display: block;
            padding: 5px 10px;
            border-radius: 3px;
            background-color:#98aee6;
            text-decoration: none;
        }
        .add {
            padding:5px 10px;
            background-color: #CCC; 
            cursor: pointer;
        }
        img{
            width:100%;
            height:100%;
        }
    </style>
</head>
<body>
    <div class="box">
        <form action="add_music.php" method="GET">
            <table>
                <caption class="title">音乐列表</caption>
                <thead>
                    <tr class="tr-head">
                        <th class="flex2">标题</th>
                        <th class="flex2">歌手</th>
                        <th class="flex2">海报</th>
                        <th class="flex6">音乐</th>
                        <th class="flex1">删除</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($arr as $value):;?>
                    <tr class="tb-tr">
                        <td class="flex2"><?php echo $value["title"];?></td>
                        <td class="flex2"><?php echo $value["singer"];?></td>
                        <td class="flex2"><img src="<?php echo $value["image"];?>" alt=""></td>
                        <td class="flex6 play"><audio src="<?php echo $value["source"];?>" controls></audio></td>
                        <td class="flex1"><button><a class="detele" href="./detele.php?id=<?php echo $value["title"];?>">删除</a></button></td>
                    </tr>
                    <?php endforeach;?>
                    <tr>
                        <td><button  class="add">添加音乐</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
</body>
</html>