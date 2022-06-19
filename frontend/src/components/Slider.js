import SimpleImageSlider from 'react-simple-image-slider'
// import styled from 'styled-components/macro'

const images = [
  { url: 'https://i.imgur.com/eE1nwLB.jpg' },
  { url: 'https://i.imgur.com/FTD7Km7.jpg' },
  { url: 'https://i.imgur.com/eE1nwLB.jpg' },
  { url: 'https://i.imgur.com/FTD7Km7.jpg' },
  { url: 'https://i.imgur.com/eE1nwLB.jpg' },
  { url: 'https://i.imgur.com/FTD7Km7.jpg' },
  { url: 'https://i.imgur.com/eE1nwLB.jpg' },
  { url: 'https://i.imgur.com/FTD7Km7.jpg' },
]

const Slider = () => {
  return (
    <SimpleImageSlider
      width={896}
      height={504}
      images={images}
      showBullets={true}
      showNavs={true}
    />
  )
}
export default Slider
