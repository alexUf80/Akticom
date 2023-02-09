<?php

namespace App\Controllers;

use \App\Db;
use \App\View;
use \App\Models\Product;

class MainController
{

	protected $configArr;

	public function __invoke()
	{

		$this->view = new View;

		$db = new Db;
		$ctrlArray = \App\Controllers\ControllerFunctions::ctrlArray();
		// var_dump($ctrlArray);
		$homePath = \App\Controllers\ControllerFunctions::homePath();
		// var_dump($homePath);
		
		// route
		$ctrl = 'home';
		
		if (!count($ctrlArray) == 0 && $ctrlArray[0] != '') {
			$ctrl = $ctrlArray[0];
		}
		
		if ($ctrl == 'home') {
			if(count($ctrlArray) > 1 && $ctrlArray[1]=='add'){
				$this->view->assign('getFileAnswer','Данные выгружены');
			}
			
		}
		
		if ($ctrl == 'api') {
			if (count($ctrlArray) > 1) {
				$ctrl = $ctrlArray[1];
				$ctrl = 'product?i=1';

				$pos = stripos($ctrl, "?");
				if($pos){
					$ctrl = mb_substr($ctrl, 0, $pos);
				}
			}
						
			$tooLongArray = false;
			foreach ($ctrlArray as $key => $value) {
				if ($key > 2) {
					$ctrlArray[2] .=  '\\'.$value;
					$tooLongArray = true;
				}
			}
			if ($tooLongArray) {
				array_splice($ctrlArray, 2);
			}
		}
		
		
		$class = '\\App\\Controllers\\' . ucfirst($ctrl);
		
		if (class_exists($class)) {
			$ctrl = new $class;
		} else {
			$ctrl = new \App\Controllers\Page404;
		}

		$ctrl($this->view);
	}
}
