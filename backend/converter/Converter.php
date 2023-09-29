<?php

class Converter
{
	public function convertToBase64($imageName)
	{

		$path = 'img/' . $imageName;
		$finfo = new finfo(FILEINFO_MIME_TYPE);
		$type = $finfo->file($path);
		return 'data:' . $type . ';base64,' . base64_encode(file_get_contents($path));
	}
}
