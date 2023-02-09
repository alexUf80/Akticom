<?php

namespace App\Controllers;

use App\Controller;

class Home extends Controller 
{

    protected function assign($view)
	{
		$configArr = (include __DIR__ . '/../../config.php');
		$view->assign('dir', $configArr['dir']);
	}

}
