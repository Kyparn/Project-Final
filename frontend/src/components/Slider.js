import SimpleImageSlider from 'react-simple-image-slider'
import styled from 'styled-components'

const ImagesSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 2px black;
`

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
    <ImagesSlider>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </ImagesSlider>
  )
}
export default Slider
