import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { testimonials } from '../data/mockData';

const Home = () => {
  

  // Replace these URLs with your own image URLs
  const streetwearImages = [
    "https://res.cloudinary.com/dtju1n77g/image/upload/v1754418525/7_nchalq.jpg",
    "https://res.cloudinary.com/dtju1n77g/image/upload/v1754418527/8png_xjhjgl.jpg",
    "https://res.cloudinary.com/dtju1n77g/image/upload/v1754418523/15png_uwbcpq.png",
    "https://res.cloudinary.com/dtju1n77g/image/upload/v1754418484/16_i3ofdk.jpg",
    "https://res.cloudinary.com/dtju1n77g/image/upload/v1754418480/13_hotkxj.png",
    "https://res.cloudinary.com/dtju1n77g/image/upload/v1754418530/11png_qny3md.jpg",
    "https://res.cloudinary.com/dtju1n77g/image/upload/v1754418474/2_nxujvi.png",
    "https://res.cloudinary.com/dtju1n77g/image/upload/v1754419475/20png_eknaju.jpg",
  ];

  // Gym section carousels (2 images each)
  const gymLeftImages = [
    'https://res.cloudinary.com/dtju1n77g/image/upload/v1754785154/tog5_wzhom9.jpg',
    'https://res.cloudinary.com/dtju1n77g/image/upload/v1754782818/gym_syxeba.jpg',
  ];
  const gymRightImages = [
    'https://res.cloudinary.com/dtju1n77g/image/upload/v1754418530/11png_qny3md.jpg',
    'https://res.cloudinary.com/dtju1n77g/image/upload/v1754786558/5656_vb1kzm.jpg',
  ];

  const [showTop, setShowTop] = useState(true); // start on image 1 (top)
  const [streetBg, setStreetBg] = useState('#ffffff');

  const handleStreetFirstImageLoad = (e) => {
    try {
      const img = e.target;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      const width = 20;
      const height = 20;
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      const { data } = ctx.getImageData(0, 0, width, height);
      let r = 0, g = 0, b = 0, count = 0;
      for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3];
        if (alpha > 0) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          count++;
        }
      }
      if (count) {
        r = Math.round(r / count);
        g = Math.round(g / count);
        b = Math.round(b / count);
        setStreetBg(`rgb(${r}, ${g}, ${b})`);
      }
    } catch (err) {
      // ignore color extraction errors
    }
  };
 
  useEffect(() => {
    const id = setInterval(() => {
      setShowTop((v) => !v); // toggle between top (image 1) and bottom (image 2)
    }, 3000); // 3 seconds
    return () => clearInterval(id);
  }, []);

  const verticalY = showTop ? '0%' : '-50%';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // Helper to build Cloudinary srcset widths
  const responsiveWidths = [288, 576, 550, 767, 1100, 2000];
  const buildCloudinarySrcSet = (url) =>
    responsiveWidths
      .map((w) => url.replace('/upload/', `/upload/w_${w}/`) + ` ${w}w`)
      .join(', ');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with CSS 3D Carousel */}
      <section className="banner">
        {/* Central Brand Name */}
        <div className="central-brand">
          <h1 data-content="SAAD'S" className="font-teko">
            SAAD'S
          </h1>
        </div>
        
        <div className="slider" style={{ '--quantity': streetwearImages.length }}>
          {streetwearImages.map((image, index) => (
            <div 
              key={index} 
              className="item" 
              style={{ '--position': index + 1 }}
            >
              <img src={image} alt={`Streetwear ${index + 1}`} />
            </div>
          ))}
        </div>
        
        <div className="content">
          <div className="author">
            <h2>YOUR TAGLINE</h2>
            <p><b>Your Description</b></p>
            <p>
              Your custom description here
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 font-medium tracking-wide px-8 py-3"
              >
                EXPLORE STREETWEAR
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white font-medium tracking-wide px-8 py-3"
              >
                VIEW COLLECTION
              </Button>
            </div>
          </div>
          <div className="model"></div>
        </div>
      </section>

      {/* Video Background Section */}
      <section className="relative h-screen bg-black overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-95"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source 
            src="https://res.cloudinary.com/dtju1n77g/video/upload/v1754502567/web_vid_owrtoz.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-4 tracking-tight font-teko"
            >
              MAURITANIAN EXCELLENCE
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-light mb-6 tracking-wide"
            >
              Elevate Your Style
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 font-bold tracking-wide px-10 py-3 text-base border-2 border-white"
              >
                SHOP
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gym Section (magazine style) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: large visual + heading */}
            <div>
              <div className="w-full h-[380px] md:h-[460px] bg-gray-200 overflow-hidden relative rounded-xl md:rounded-2xl">
                <motion.div
                  className="absolute inset-0 h-[200%] flex flex-col"
                  animate={{ y: verticalY }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                  <img src={gymLeftImages[0]} alt="Gym collection hero" className="w-full h-1/2 object-cover" />
                  <img src={gymLeftImages[1]} alt="Gym collection hero alt" className="w-full h-1/2 object-cover" />
                </motion.div>
              </div>
              <div className="mt-16">
                <h2 className="font-playfair text-7xl md:text-8xl font-bold tracking-tight leading-none">
                  GYM
                </h2>
                <Link
                  to="/products?category=gym"
                  className="group inline-flex items-center mt-8 text-black text-lg md:text-xl"
                >
                  <span className="mr-3">rush to buy</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right: single visual that slides */}
            <div className="w-full h-[680px] md:h-[760px] bg-gray-200 overflow-hidden relative rounded-xl md:rounded-2xl">
              <motion.div
                className="absolute inset-0 h-[200%] flex flex-col"
                animate={{ y: verticalY }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <img src={gymRightImages[0]} alt="Gym collection detail" className="w-full h-1/2 object-cover" />
                <img src={gymRightImages[1]} alt="Gym collection detail alt" className="w-full h-1/2 object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Streetwear Section */}
      <section className="relative min-h-[90vh] lg:min-h-screen overflow-hidden -mt-20 md:-mt-24" style={{ backgroundColor: '#D2D2D2' }}>
        <div className="container mx-auto px-4 pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Shopify-like collection list using your images */}
            <section id="shopify-section-template--20036439671004__section_collection_list_VcYKiK" className="shopify-section collection-list relative z-10 pt-8 md:pt-12 pb-28 md:pb-36">
              <div className="container mx-auto">
                <div className="collection-list__head-line section__head-line flex items-center justify-between mb-6">
                  <div className="section__title h1"></div>
                  <Link to="/products" className="underline-link text-sm uppercase tracking-wider">see all</Link>
                </div>
                <div className="collection-list-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: 'Hoodies', image: 'https://res.cloudinary.com/dtju1n77g/image/upload/v1754785835/888-removebg-preview_dkjfx2.png', link: '/products' },
                    { title: 'Tees', image: 'https://res.cloudinary.com/dtju1n77g/image/upload/v1754786028/7bedca87-56f2-415f-96c8-f62571cf9924_removalai_preview_bycjvi.png', link: '/products' },
                    { title: 'Longsleeves', image: 'https://res.cloudinary.com/dtju1n77g/image/upload/v1754786968/3449e2f7-c033-42d8-acb7-2ce23061fb2f_removalai_preview_j8hfkz.png', link: '/products' },
                    { title: 'Bottoms', image: 'https://res.cloudinary.com/dtju1n77g/image/upload/v1754786258/53bb0846-d53b-4b68-b867-4a9910db5c20_removalai_preview_rovcya.png', link: '/products' },
                  ].map((item, idx) => (
                    <div key={idx} className="collection-list-grid-item">
                      <Link to={item.link} className="collection-item-image block group overflow-hidden">
                        <picture>
                          <img
                            src={item.image}
                            alt={item.title}
                            width="1200"
                            height="1200"
                            loading="lazy"
                            srcSet={buildCloudinarySrcSet(item.image)}
                            sizes="(min-width: 1100px) 1100px,(max-width: 767px) 767px,(max-width: 576px) 567px,(max-width: 550px) 550px,(max-width: 288px) 288px,100vw"
                            className="w-full h-[560px] md:h-[calc(100vh-240px)] lg:h-[calc(100vh-280px)] object-cover transform transition-transform duration-500 scale-100 group-hover:scale-110"
                          />
                        </picture>
                      </Link>
                      <Link to={item.link} className="collection-item-title block mt-4 md:mt-5 text-center uppercase tracking-widest text-base md:text-lg">
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
 
            {/* Exact Shopify-like wave block using provided classes */}
            <div className="section-template--20036439671004__wave_new_LbgNdL pointer-events-none absolute bottom-0 left-0 right-0">
              <div className="section-template--20036439671004__wave_new_LbgNdL-settings">
                <div className="wave-item-template--20036439671004__wave_new_LbgNdL">
                  <svg className="waves-animated-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
                    <defs>
                      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                    </defs>
                    <g className="wave-parallax1-template--20036439671004__wave_new_LbgNdL">
                      <use xlinkHref="#gentle-wave" x="50" y="3" fill="currentColor"></use>
                    </g>
                    <g className="wave-parallax2-template--20036439671004__wave_new_LbgNdL">
                      <use xlinkHref="#gentle-wave" x="50" y="0" fill="currentColor"></use>
                    </g>
                    <g className="wave-parallax3-template--20036439671004__wave_new_LbgNdL">
                      <use xlinkHref="#gentle-wave" x="50" y="9" fill="currentColor"></use>
                    </g>
                    <g className="wave-parallax4-template--20036439671004__wave_new_LbgNdL">
                      <use xlinkHref="#gentle-wave" x="50" y="6" fill="currentColor"></use>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight font-teko">SHOP BY CATEGORY</h2>
            <p className="text-gray-600 font-light text-lg">Find exactly what you're looking for</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                name: "MEN'S FASHION",
                image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=400&h=500&fit=crop",
                link: "/products?category=men"
              },
              {
                name: "WOMEN'S FASHION",
                image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop",
                link: "/products?category=women"
              },
              {
                name: "KIDS COLLECTION",
                image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=500&fit=crop",
                link: "/products?category=kids"
              },
              {
                name: "ACCESSORIES",
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
                link: "/products?category=accessories"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Link to={category.link}>
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold text-center tracking-wide">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight font-teko">WHAT OUR CUSTOMERS SAY</h2>
            <p className="text-gray-600 font-light text-lg">Real reviews from real customers</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold tracking-wide">{testimonial.name}</h4>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-black fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic font-light">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight font-teko">STAY IN STYLE</h2>
            <p className="text-xl mb-12 text-gray-300 font-light">
              Subscribe to our newsletter for exclusive offers and style updates
            </p>
            <div className="max-w-md mx-auto flex gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white text-black focus:outline-none font-medium"
              />
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 font-medium tracking-wide">
                SUBSCRIBE
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 