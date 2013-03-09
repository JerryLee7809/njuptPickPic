<?php

$arrayjson=array("version" =>"1.01");
 
header('Content-Type:text/json');
 $aa=json_encode($arrayjson);
 
echo $aa;



?>