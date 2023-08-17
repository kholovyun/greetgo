# Инструкция к проекту


## 1. Склонируйте проет репозитория

    $ git clone https://github.com/kholovyun/greetgo.git

Это позволит получить код полного проекта

## 2. Перейдите в папку проекта

    $ cd greetgo

Установите зависимости

    $ npm i

## 3. Сбилдите проект для web

    $ ionic build

## 4. Запустить проект в эмуляторе Android Studio

    ionic cap run android --external
    
    * если в эмуляторе приложение выдает ошибку соединения сервера, 
    то используйте
    
    ionic cap run android --external host=<Your IP address>
    
    * для отслеживания изменений в код используйте флаг -l
   
## 4.1  Oткрыть проект android в Android Studion
 
	ionic cap open android

## 4.2  Oткрыть проект android на телефоне через Аndroid Studio
 
	активируйте на телефоне решим разработчика, на андройд это делается так:
	настройки > о телефоне > 
	своедения о ПО >кникните несколько раз на номер сборки > 
	вернитесь в настройки > для разработки > настроить по USB

 теперь откройте проект в Android Studio 

    ionic cap open android

Выберите устройство и заупстите проект (зеленая кнопка Play)

*Телефон должен быть подключен через USB

### Или просто скачайте apk файл из проекта и установить на смартфон (можно самостоятельно сбилдить apk файл )

    откройте проект в Android Studio > Build > ApkFile

#  5. Как пользоваться приложением

При загрузке приложения появится страница авторизации

    username : user
    password : 123

После авторизации появляется home page 
появится alert с просьбой дать доступ к списку контактов 

** если возникнут проблемы с появлением контактов или открытию qr сканеру - перейдите в настройки устройства и дайте разрешения вручную

Кликнув на карточку контакта, происходит переход на details page, где по запросу отображены более полные данные по контракту

** Выход из режима камеры реализорван через кнопку в header "Back to Contacts"

### Ошибки которые могут возникнуть 

1. Могут быть ошибки в Import - решается удалением и переустановкой node_modules
2. Если происходят ошибки при запуске приложения в эмуляторе или на телефоне - проверьте переменные окружения такие как "ANDROID_SDK_ROOT", "HOME_JAVE"

вот видео с решение большинства ошибок Android Studio 

https://www.youtube.com/watch?v=jJxRN_aWdi4&ab_channel=CodingTechnyks