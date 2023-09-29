<?php

require('db/DataBase.php');
require('controllers/Series.php');
require('controllers/Users.php');

class Application
{
	protected $users = null;
	protected $series = null;

	function __construct()
	{
		$config = json_decode(file_get_contents('./configs/db-anime.config.json', true));
		$db = new DataBase($config);

		$this->users = new Users($db);
		$this->series = new Series($db);
	}

	//функция проверки полученных значений в запросе
	private function checkParams($params)
	{
		foreach ($params as $param => $value) {
			if ($param === 'token' && (!is_string($value) || strlen($value) != 32)) {
				return false;
			}

			if ($param === 'login' && (!is_string($value) || strlen($value) > 16)) {
				return false;
			}

			if ($param === 'password' && (!is_string($value) && strlen($value) > 16)) {
				return false;
			}

			if ($param === 'name' && (!is_string($value) || strlen($value) > 16)) {
				return false;
			}

			if ($param === 'seriesId' && (!is_numeric($value))) {
				return false;
			}
		}

		return true;
	}

	public function login($params)
	{
		if ($this->checkParams($params)) {
			if ($params['login'] && $params['password']) {
				return $this->users->login($params['login'], $params['password']);
			}
		}
	}

	public function registration($params)
	{
		if ($this->checkParams($params)) {
			[
				'login' => $login,
				'password' => $password,
				'name' => $name
			] = $params;

			if ($login && $password && $name) {
				return $this->users->registration($login, $password, $name);
			}
		}
	}

	public function logout($params)
	{
		if ($this->checkParams($params)) {
			$user = $this->users->getUser($params['token']);

			if ($user) {
				return $this->users->logout($user);
			}
		}
	}

	public function getAnime($params)
	{
		if ($this->checkParams($params)) {
			if ($params['seriesId']) {
				$series = $this->series->getAnimeBySeriesId($params['seriesId']);
				$characters = $this->series->getCharactersBySeriesId($params['seriesId']);

				// Добавим новое поле
				$series->characters = $characters;

				return $series;
			}
		}
	}

	public function getSeries()
	{
		return $this->series->getAllSeries();
	}
}
