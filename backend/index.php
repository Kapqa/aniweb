<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Allow-Headers: X-PINGOTHER, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require('app/Application.php');

function router($params)
{
	$method = $params['method'];

	if ($method) {
		$app = new Application();

		switch ($method) {
			case 'check':
				return true;
				// USER //
				/////////
			case 'login':
				return $app->login($params);
			case 'logout':
				return $app->logout($params);
			case 'registration':
				return $app->registration($params);

				// SERIES //
				///////////
			case 'anime':
				return $app->getAnime($params);
			case 'series':
				return $app->getSeries();
		}
	}

	return false;
}

function answer($data)
{
	if ($data) {
		return array(
			'result' => 'ok',
			'data' => $data
		);
	}
	return array(
		'result' => 'error'
	);
}

echo (json_encode(answer(router($_GET))));