<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="css/global.css">
	<title>test</title>
</head>
<body>
	<?php

	function greet($person) {
		echo "Hello " . $person;
	}

	?>
	<h2><?php greet("Tino"); ?></h2>
	<h2><?php greet("Antonio"); ?></h2>
</body>
</html>
