<?php
//receives puplic-users-contact data

$Name = $_POST["Name"];
$Email = $_POST["Email"];
$Interest = join(", ", $_POST['Interest']);
$Role = $_POST["Role"];


$dsn = "mysql:host=localhost;dbname=immnewsnetwork;charset=utf8mb4";
$dbusername = "root";  
$dbpassword = "";

//connect
$pdo = new PDO($dsn, $dbusername, $dbpassword);

//prepare
$stmt = $pdo->prepare("INSERT INTO `pusers` (`userId`, `Name`, `Email`, `Interest`, `Role`)
VALUES (NULL, '$Name', '$Email', '$Interest', '$Role');");

//execute
if ($stmt->execute()) { ?>
<h1>Thank You</h1>
<?php }  
?>

