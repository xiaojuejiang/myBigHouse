<?php
    $str=$_GET["id"];
    $arr=json_decode(file_get_contents("./data.json"),true);
    foreach($arr as $key => $value){
        if(in_array($str,$value)){
            echo $key;
            $index=$key;
            break;
        }
    }
    array_splice($arr,$index,1);
    print_r($arr);
    $data=json_encode($arr);
    file_put_contents("./data.json",$data);
    header("location:./musicList.php");
?>