<?php 
sleep(1);
$response ='I get ';

foreach ($_POST as $key => $value) {
	$response .= $key . " = " . $value . '| ';
}

echo $response;