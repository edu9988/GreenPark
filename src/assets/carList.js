const imgList = {
  img1: require('./cars/car01.jpg'),
  img2: require('./cars/car02.jpg'),
  img3: require('./cars/car03.jpg'),
  img4: require('./cars/car04.jpg'),
  img5: require('./cars/car05.jpg'),
  img6: require('./cars/car06.jpg')
}

const cars = [
  'Ferrari',
  'Maybach Exelero',
  'Zenvo',
  'Rolls Royce',
  'Desconhecido',
  'Desconhecido'
]

export default cars.map((car,index) => {
  return {
    id: index,
    name: car,
    photo: imgList[`img${index+1}`]
  }
})
