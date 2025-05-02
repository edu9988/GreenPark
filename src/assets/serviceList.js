const imgList = {
  img1: require('./services/service01.jpg'),
  img2: require('./services/service02.jpg'),
  img3: require('./services/service03.jpg'),
}

const services = [
  'Estacionamento',
  'Lavagem',
  'Reparos'
]

export default services.map((service,index) => {
  return {
    id: index,
    name: service,
    photo: imgList[`img${index+1}`]
  }
})
