import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/button';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../store/slices/productsSlice';
import { featuredProducts, testimonials } from '../data/mockData';

const Home = () => {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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

  return (
    <div className="min-h-screen">
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

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight font-teko">FEATURED PRODUCTS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light text-lg">
              Discover our handpicked selection of premium clothing items that define modern style and comfort.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-300 aspect-[4/5] rounded-lg mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {featuredProducts.slice(0, 8).map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          )}

          <div className="text-center mt-16">
            <Link to="/products">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white font-medium tracking-wide px-8 py-3"
              >
                VIEW ALL PRODUCTS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
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