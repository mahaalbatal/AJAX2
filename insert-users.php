<?php
//receives puplic-users-contact data

$Name = $_POST["Name"];
$Email = $_POST["Email"];
$Industry = $_POST['Industry'];
$Technical = $_POST['Technical'];
$Career = $_POST['Career'];
$Role = $_POST["Role"];


$dsn = "mysql:host=localhost;dbname=immnewsnetwork;charset=utf8mb4";
$dbusername = "root";  
$dbpassword = "";

//connect
$pdo = new PDO($dsn, $dbusername, $dbpassword);

//prepare
$stmt = $pdo->prepare("INSERT INTO `ajax` (`userId`, `Name`, `Email`, `Industry`, `Technical`, `Career`, `Role`)
VALUES (NULL, '$Name', '$Email', '$Industry', '$Technical', '$Career','$Role');");

//execute
if($stmt->execute()){ 
	echo('{ "success":"true" }');
}else{ 
	echo('{ "success":"false" }');
}

