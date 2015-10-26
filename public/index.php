<?php
require_once '../vendor/autoload.php';
define('BASEPATH', dirname(__DIR__));

//Load environment variable
$dotenv = new Dotenv\Dotenv(BASEPATH);
$dotenv->load();

//Connect database
$dsn = "{$_SERVER['DB_DRIVER']}: host={$_SERVER['DB_HOST']}; port={$_SERVER['DB_PORT']}; dbname={$_SERVER['DB_DATABASE']}";
$db = new PDO($dsn, $_SERVER['DB_USERNAME'], $_SERVER['DB_PASSWORD']);
$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

//init Slim & set template directory
$app = new \Slim\Slim();
$app->view->setTemplatesDirectory(BASEPATH . '/app/views/');

/**
 * Homepage
 */
$app->get('/', function() use ($app) {
    $app->render('demo.php');
});

/**
 * Signup this event
 *
 * @param array $_POST(name, sex, birthday, id_no, email, phone, isVegetarian, remark, messageSource, address, parents)
 */
$app->post('/signup', function() use ($app, $db) {
    //TODO check input
    $name          = $this->request->post('name');
    $sex           = $this->request->post('sex');
    $birthday      = $this->request->post('birthday');
    $idNo          = $this->request->post('id_no');
    $email         = $this->request->post('email');
    $phone         = $this->request->post('phone');
    $isVegetarian  = $this->request->post('isVegetarian');
    $remark        = $this->request->post('remark');
    $messageSource = $this->request->post('messageSource');
    $address       = $this->request->post('address');
    $parents       = $this->request->post('parents');
    $data          = [$name, $sex, $birthday, $idNo, $email, $phone, $isVegetarian, $remark, $messageSource, $address, $parent];

    //XSS Protection
    for($i = 0; i < count($data); $i++)
        $data[$i] = htmlspecialchars($data[$i], ENT_QUOTES, 'UTF-8');

    $query = $db->prepare('INSERT INTO `registry` (`name`, `sex`, `birthday`, `id_no`, `email`, `phone`, `isVegetarian`, `remark`, `messageSource`, `address`, `parent`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    $query->execute($data);
});

$app->run();