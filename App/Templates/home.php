<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Домашняя</title>
    <link rel="stylesheet" href="<?php echo $path ?>css/main.css" type="text/css" />
</head>

<body>
    <div class="container">
        
        <div class="container-wripper">

            <header class="header">
                <div class="logo">LOGO</div>
                <a href="<?php echo $homePath?>\data">Выгруженные данные</a>
            </header>

            <?php if (isset($getFileAnswer)) : ?>
                <div class="form-message" style="<?php echo $getFileAnswer == "Данные выгружены" ? "" : "background-color: rgb(238, 209, 209);" ?>">
                    <p> <?php echo $getFileAnswer?></p>
                </div>
            <?php endif; ?>
            <div class="file">
                <!-- <form action="https://u1935228.isp.regruhosting.ru/api/product/" method="POST" enctype="multipart/form-data" class="file-form"> -->
                <form action="http://localhost/Akticom/api/product" method="POST" enctype="multipart/form-data" class="file-form">

                    <div class="input__wrapper">
                        <input name="filename" type="file" id="input__file" class="input input__file">
                        <label for="input__file" class="input__file-button">
                            <span class="input__file-icon-wrapper"><img class="input__file-icon" src="<?php echo $homePath ?>/img/add.svg" alt="Выбрать файл" width="25"></span>
                            <div class="input__file-button-text">Выберите файл</div>
                        </label>
                    </div>
                    <input type="submit" value="Отправить">
                </form>
            </div>

            <div class="tree">
            </div>

        </div>

        <?php echo $footer ?>
    </div>

    <div class="modal close">
        <div class="modal-window">
            <div class="modal-content">
                <img src="<?php echo $homePath ?>/img/spinner-icon.gif" alt="spinner" class="spinner">
                <p>Данные выгружаются</p>
            </div>
        </div>
    </div>

</body>
<script>
    
</script>
<script>
    const view = 'home';
</script>
<script src="<?php echo $path ?>js/main.js" type="text/javascript"></script>       
</html>