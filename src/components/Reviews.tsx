import { Carousel } from 'react-responsive-carousel';
const cardStyle = {
  width: '100%', // Card takes full width on smaller screens
  maxWidth: '400px', // Card has a maximum width on larger screens
  margin: '0 auto',
  minHeight:"150px" // Center the card horizontally
};

const imageStyle = {
  width: '80px', // Adjust the image width for smaller screens
  height: '80px', // Adjust the image height for smaller screens
  borderRadius: '50%', // Make the image circular
};


const testimonials = [
  {
    author: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    authorImage: "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
  },
  {
    author: 'Jane Smith',
    text: 'Pellentesque vitae dolor vel tortor suscipit elementum.',
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaXaKH9Q7gVGHSc2_IK3mOhpEaiULsMGxwRUe2nL4b&s"
  },
  {
    author: 'Alice Johnson',
    text: 'Sed dignissim sem nec arcu pellentesque, non suscipit lectus cursus.',
    authorImage: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
  },
  {
    author: 'Alice Johnson',
    text: 'Sed dignissim sem nec arcu pellentesque, non suscipit lectus cursus.',
    authorImage: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
  },
  {
    author: 'Alice Johnson',
    text: 'Sed dignissim sem nec arcu pellentesque, non suscipit lectus cursus.',
    authorImage: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
  },
  {
    author: 'Alice Johnson',
    text: 'Sed dignissim sem nec arcu pellentesque, non suscipit lectus cursus.',
    authorImage: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
  },
];

const Reviews = () => {
  return (
    <div>
       <div className="  w-max h-max mx-auto my-20 relative ">
        <div className="bg-[#EEEEEE] relative z-10 ">
          <p className="text-lg md:text-2xl lg:text-2xl font-semibold text-center px-2 ">
          Review&apos;s
          </p>
        </div>
        <div className="zindex">
          <div className=" bg-[#EA972D] w-5/12 absolute -bottom-1 -left-1 px-6  ">
            0
          </div>
          <div className=" bg-[#EA972D] w-5/12 absolute -top-1 -right-1  ">
            0
          </div>
        </div>
      </div>
  
      <div style={cardStyle}>
        <Carousel autoPlay showArrows={false} showStatus={false} showThumbs={false} infiniteLoop>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <img
              src={testimonial.authorImage}
              alt={testimonial.author}
              style={imageStyle}
            />
              <p className="text-xl font-semibold mb-4">{testimonial.text}</p>
              <p className="text-sm italic mb-10">- {testimonial.author}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;