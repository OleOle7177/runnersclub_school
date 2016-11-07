# для стадиона СГУПС (лето)
# init = ->
#   myMap = new (ymaps.Map)('map',
#     center: [
#       55.066408
#       82.926520
#     ]
#     controls: ['smallMapDefaultSet']
#     zoom: 15)
#   myPlacemark = new (ymaps.Placemark)([
#     55.066408
#     82.926520
#   ],
#     hintContent: 'Стадион СГУПС'
#     balloonContent: 'Стадион СГУПС, ул. Залесского д.3')
#   myMap.geoObjects.add myPlacemark
#   myMap.behaviors.disable('scrollZoom')
#   return
#
# ymaps.ready init
# myMap = undefined
# myPlacemark = undefined

# для зимы
init = ->
  myMap = new (ymaps.Map)('map',
    center: [
      55.045582
      82.922346
    ]
    controls: ['smallMapDefaultSet']
    zoom: 11)

  placemarks = [
    new (ymaps.Placemark)([
      55.071575
      82.943
    ],
    hintContent: 'Ледовый дворец спорта Сибирь'
    balloonContent: 'Ледовый дворец спорта Сибирь, <br/>ул. Богдана Хмельницкого, д.23'),
    new (ymaps.Placemark)([
      55.038268
      82.924394
    ],
    hintContent: 'Стадион Спартак'
    balloonContent: 'Стадион Спартак, <br/>ул. Мичурина, д.10'),
    new (ymaps.Placemark)([
      54.988730
      82.901482
    ],
    hintContent: 'Манеж НГТУ'
    balloonContent: 'Манеж НГТУ, <br/>ул. Блюхера, д.34'),
  ]

  placemarks.map (i) -> myMap.geoObjects.add i

  myMap.behaviors.disable('scrollZoom')
  return

ymaps.ready init
myMap = undefined
myPlacemark = undefined
