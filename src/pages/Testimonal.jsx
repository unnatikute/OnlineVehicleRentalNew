
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    review: 'This service is fantastic! I highly recommend it to everyone.',
    rating: 5,
  },
  {
    id: 2,
    image: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
    review: 'Excellent customer support and user-friendly interface.',
    rating: 4,
  },
  {
    id: 3,
    image: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
    review: 'Great experience overall!',
    rating: 5,
  },
  {
    id: 4,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review: 'Highly professional and excellent quality.',
    rating: 5,
  },
  {
    id: 5,
    image: 'https://randomuser.me/api/portraits/men/35.jpg',
    review: 'Amazing experience with this service.',
    rating: 4,
  },
];

const TestimonialCard = ({ image, review, rating }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center mx-2">
      <p className="text-gray-700 mb-4">{review}</p>
      <div className="flex justify-center mb-4">
        <img src={image} alt="User" className="w-20 h-20 rounded-full" />
      </div>
      <div className="flex justify-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`w-6 h-6 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.47a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.54 1.118l-3.38-2.47a1 1 0 00-1.175 0l-3.38 2.47c-.784.57-1.839-.197-1.54-1.118l1.287-3.96a1 1 0 00-.364-1.118l-3.38-2.47c-.784-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.96z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    arrows: true,
    prevArrow: (
      <button className="slick-prev slick-arrow custom-arrow bg-black text-white p-4 rounded-full font-bold !important">
        &#10094;
      </button>
    ),
    nextArrow: (
      <button className="slick-next slick-arrow custom-arrow bg-black text-black p-4 rounded-full font-bold !important" style={{backgroundColor: "black", color: "white"}}>
   
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What Our Customers Say</h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
