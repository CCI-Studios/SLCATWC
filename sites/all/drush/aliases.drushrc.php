<?php

$aliases['dev'] = array(
	'uri'=> 'slcatwc.ccistaging.com',
	'root' => '/home/staging/subdomains/slcatwc/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	'ssh-options'=> '-p 37241'
);

$aliases['live'] = array(
	'uri'=> 'slcatwc.ccistaging.com',
	'root' => '/home/ht/subdomains/live/public_html',
	'remote-host'=> 'host.lambtonshield.com',
	'remote-user'=> 'ht',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	)
);
