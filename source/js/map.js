
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.93869121515712,30.323054950139095],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });

    // Создание метки
    var myPlacemark = new ymaps.Placemark([59.93869121515712,30.323054950139095], {
        balloonContentHeader: 'Приглашаем к сотрудничеству дилеров!',
        balloonContentBody: 'г. Санкт-Петербург',
        balloonContentFooter: 'ул. Большая Конюшенная, д. 19/8',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pin.png',
        iconImageSize: [55, 50],
        iconImageOffset: [-25, -50]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
}
