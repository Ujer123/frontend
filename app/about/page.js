import React from "react";
import Image from "next/image";
import Daniel from "@/public/images/IMG-20241006-WA0002.jpg";

function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center ">
      {/* Header Section */}
      <section className=" w-full mt-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-black">About Us</h1>
        <p className="text-base md:text-lg text-black-100 mt-4">
          We are passionate about delivering the best experience.......
        </p>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <Image
              src={Daniel} // Replace with the actual image path in the public folder
              alt="About Us"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>

          {/* Paragraph Section */}
          <div className="text-gray-700 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Who We Are
            </h2>
            <p>
              Welcome to Daniyal Perfume, where we believe that a fragrance is
              more than just a scent—it&apos;s a statement of individuality and an
              extension of your personality. Founded with a passion for creating
              exceptional fragrances, Daniyal Perfume aims to offer a collection
              that resonates with diverse preferences and lifestyles.
            </p>
            <p>
              At Daniyal, we understand the profound connection between scent
              and emotion. Each fragrance in our collection is meticulously
              crafted, inspired by the beauty of nature and the vibrancy of
              life. Our perfumes encapsulate unique stories and experiences,
              inviting you to embark on a sensory journey every time you wear
              them.
            </p>
            <p>
              <span className="font-bold">Our Vision:</span> We aspire to
              redefine the fragrance experience by offering high-quality,
              affordable perfumes that speak to the heart. Our goal is to
              empower individuals to express their true selves through scent,
              making each moment unforgettable.
            </p>
            <p>
              <span className="font-bold">Our Collection:</span> From bold and
              adventurous to soft and subtle, our diverse range of perfumes
              caters to everyone. Whether you’re preparing for a special
              occasion, heading to the office, or simply enjoying a casual day
              out, Daniyal Perfume has the perfect scent for you. Each bottle is
              a work of art, reflecting our commitment to excellence and
              sophistication.
            </p>
            <p>
              <span className="font-bold">Quality & Craftsmanship:</span> We
              take pride in using the finest ingredients sourced from around the
              world. Our skilled artisans blend these elements with precision to
              create fragrances that are not only captivating but also
              long-lasting. At Daniyal Perfume, quality is our promise.
            </p>
            <p>
              <span className="font-bold">Join Our Journey:</span> As we grow,
              we invite you to be a part of our community. Follow us on social
              media, subscribe to our newsletter, and experience the world of
              Daniyal Perfume. Together, let’s celebrate the power of scent and
              the beauty it brings to our lives.
            </p>
            <p>
              Thank you for choosing Daniyal Perfume. We look forward to sharing
              our passion with you!
            </p>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="w-full bg-slate-300 py-8 text-black">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">Our Mission</h3>
          <p className="text-sm md:text-base mt-4">
            Our mission is to create meaningful connections with our customers
            by providing excellent products and services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
