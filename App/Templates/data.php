<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Данные</title>
    <link rel="stylesheet" href="<?php echo $path ?>css/main.css" type="text/css" />
</head>

<body>
    <div class="container">
        
        <div class="container-wripper">

            <header class="header">
                <div class="logo">LOGO</div>
                <a href="<?php echo $homePath?>\home">Домой</a>
            </header>
            
            <div class="pagination pagination-top hidden">
                <div class="pagination-prev"><</div>
                <div class="pagination-numbers"></div>
                <div class="pagination-next">></div>
            </div>
            
            <div>
                <table class="table">
                </table>
            </div>

            <div class="pagination pagination-bottom hidden">
                <div class="pagination-prev"><</div>
                <div class="pagination-numbers"></div>
                <div class="pagination-next">></div>
            </div>
           
        </div>

        <?php echo $footer ?>
    </div>

</body>
<script>
    const data = <?php echo json_encode($data) ?>;
    const view = 'data';
</script>
<script src="<?php echo $path ?>js/main.js" type="text/javascript"></script>       
</html>