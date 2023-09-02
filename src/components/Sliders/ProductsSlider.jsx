import { useRef } from 'react'
import ProductCard from "../Cards/ProductCard.jsx"
import Slider from "react-slick"

const ProductsSlider = ({ slides }) => {
  const slider = useRef(null)

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    adaptiveHeight: true,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3500,
    onSwipe: () => {
      pause()
    },
    responsive: [
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5
        }
      },
    ]
  }

  const pause = () => slider.current && slider.current.slickPause()

  return (
    <div className="w-full">
      <Slider ref={slider} {...settings}>
        {
          slides.map(product => (
            <div className='px-2 py-4'>
              <ProductCard key={product.name} {...product} />
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default ProductsSlider