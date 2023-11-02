import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="w-max h-max mx-auto my-10 lg:my-20 relative">
        <div className="bg-[#EEEEEE] relative z-10">
          <p className="text-lg md:text-2xl lg:text-2xl font-semibold text-center px-2">
            About Us
          </p>
        </div>
        <div className="zindex">
          <div className="bg-[#EA972D] w-5/12 absolute -bottom-1 -left-1 px-6">
            0
          </div>
          <div className="bg-[#EA972D] w-5/12 absolute -top-1 -right-1">0</div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="gap-5 grid justify-items-center xl:grid-cols-2">
          <div className="w-1/2 md:w-3/4">
            <img className="rounded-xl hidden md:block " src="/about_banner.jpg" alt="" />
          </div>
          <div className="font-sans w-3/4 ">
            <div>
               <h2 className="text-2xl text-[#EA972D]">Food Fantasy</h2>
            <div className="">
              <p className="pt-5 text-justify leading-7 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                eius distinctio explicabo expedita nam harum, vero incidunt nemo
                quisquam similique quod, autem asperiores quam sint,
                reprehenderit cum laboriosam deserunt corporis possimus
                voluptate tenetur ea nostrum! Provident corrupti atque facilis.
              </p>
              <p className="pt-5 text-justify leading-7">
                Rem quaerat sed, eaque quasi facilis consectetur maiores neque
                blanditiis ducimus accusantium libero voluptatum harum impedit
                earum perspiciatis molestiae aut est error veniam sequi ipsa
                recusandae eos pariatur. Corporis dolor officia laboriosam quod
                deleniti, sit qui quidem nisi illo asperiores aliquid eaque
                expedita commodi adipisci reiciendis facilis doloribus
                exercitationem mollitia, eum facere aperiam ab! Fuga quae iure
                nam iusto velit! Expedita atque cupiditate quos ratione sit illo
                at accusamus, commodi doloremque.
              </p>
              <p className="pt-5 text-justify leading-7">
                Voluptatibus eum laboriosam totam nulla exercitationem
                dignissimos odio obcaecati fugiat? reiciendis facilis doloribus
                exercitationem mollitia, eum facere aperiam ab! Fuga quae iure
                nam iusto velit! Expedita atque cupiditate qu
              </p>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
