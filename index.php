<?php

error_reporting(0);

use \App\Controllers\MainController;

require __DIR__ . '/autoload.php';

$controller = new MainController;
$controller();