<?php

namespace App;

class View
{
	protected $data = [];

	public function assign($key, $data)
	{
		$this->data[$key] = $data;
	}
	
	public function display($template)
	{
		echo $this->render($template);
	}
	
	public function render($template)
	{
		foreach ($this->data as $name => $value) {
			${$name} = $value;
		}

		ob_start();
		include $template;
		$content = ob_get_contents();
		ob_end_clean();

		return $content;
	}

	public function assignConst($replaseArr = [])
	{
		$this->assign('path', \App\Controllers\ControllerFunctions::path());
		$this->assign('homePath', \App\Controllers\ControllerFunctions::homePath());
	}

	public function renderAndAssign($template, $path)
	{
		$$template = $this->render(__DIR__ . $path . $template . '.php');
		$this->assign($template, $$template);
	}

}
