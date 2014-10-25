<?php
$time = time();
?>
<!DOCTYPE html>
<html>
    <head>
        <title>svUI</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/svUI.js?v=<?php echo $time; ?>"></script>
        <script type="text/javascript" src="js/core.js?v=<?php echo $time; ?>"></script>
        <link rel="stylesheet" href="css/main.css" />
    </head>
    <body id="body">
        <div id="content">
 
            <h1>Checkbox example</h1>
            <div id="cbx"></div>

            <h1>Radio example</h1>
            <div id="radio"></div>

        </div>
    </body>
</html>
