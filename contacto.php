<?php
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $consulta = $_POST['consulta'];

    $header = 'From: ' . $email . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $mensaje .= "Nombre Y Apellido: " . $nombre . " \r\n";
    $mensaje .= "Telefono: " . $telefono . " \r\n";
    $mensaje .= "Email: " . $email . " \r\n";
    $mensaje .= "Consulta: " . $_POST['consulta'] . " \r\n";
    $mensaje .= "Enviado el " . date('d/m/Y', time());

    $para = "federico.rios@fibertel.com.ar";
    $asunto = "Consulta del Portfolio web";

    mail($para, $asunto, utf8_decode($mensaje), $header);
    echo "Su mail se envio correctamente, lo contactaremos en breve.";
    echo '<a href="http://www.web-rios.esy.es/paginas/Portfolio%20con%20boostrap/index.html#Contact">Volver.</a>';  
    ?>