<?php

namespace App;

use \App\View;

class Controller
{
	public function __invoke($view)
	{
		$view->assignConst();
		$this->assign($view);
		$view->renderAndAssign('footer', '/Templates/');
		
		$classNameArray = explode('\\',static::class);
		$template = end($classNameArray);

		$view->display(__DIR__ . '/Templates/' .strtolower($template).'.php');
	}

	protected function assign($view)
	{

	}

}
