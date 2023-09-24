import { useRef } from 'react'
import ProductCard from "../Cards/ProductCard.jsx"
import Slider from "react-slick"
import { BiSolidChevronLeftCircle } from 'react-icons/bi'

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <span
      className={className}
      style={{ ...style, display: "block", color: 'yellow' }}
      onClick={onClick}
    />
  );
}

const ProductsSlider = ({ slides }) => {
  const slider = useRef(null)

  const settings = {
    dots: false,
    prevArrow: <SampleNextArrow />,
    nextArrow: <SampleNextArrow />,
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
            <div key={product.id} className='px-1 md:px-2 py-4'>
              <ProductCard key={product.id} {...product} />
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default ProductsSlider