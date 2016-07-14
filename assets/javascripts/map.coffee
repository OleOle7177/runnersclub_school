init = ->
  myMap = new (ymaps.Map)('map',
    center: [
      55.066408
      82.926520
    ]
    controls: ['smallMapDefaultSet']
    zoom: 15)
  myPlacemark = new (ymaps.Placemark)([
    55.066408
    82.926520
  ],
    hintContent: 'Стадион СГУПС'
    balloonContent: 'Стадион СГУПС, ул. Залесского д.3')
  myMap.geoObjects.add myPlacemark
  myMap.behaviors.disable('scrollZoom')
  return

ymaps.ready init
myMap = undefined
myPlacemark = undefined
