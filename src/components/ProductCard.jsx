import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { addToCart } from '../store/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../store/slices/userSlice';

const ProductCard = ({ product, index = 0 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const dispatch = useDispatch();
  
  const { isAuthenticated, wishlist } = useSelector((state) => state.user);
  const isInWishlist = wishlist.includes(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const size = selectedSize || product.sizes[0];
    dispatch(addToCart({
      product,
      size,
      quantity: 1
    }));
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) return;
    
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product.id));
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating)
            ? 'text-black fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
        <Link to={`/product/${product.id}`}>
          <div className="relative aspect-[4/5] overflow-hidden">
            {/* Product Image */}
            <motion.img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onMouseEnter={() => {
                if (product.images.length > 1) {
                  setCurrentImageIndex(1);
                }
              }}
              onMouseLeave={() => setCurrentImageIndex(0)}
            />

            {/* Sale Badge */}
            {product.originalPrice && (
              <div className="absolute top-3 left-3">
                <span className="bg-black text-white text-xs font-bold px-3 py-1 tracking-wide">
                  SALE
                </span>
              </div>
            )}

            {/* Featured Badge */}
            {product.featured && (
              <div className="absolute top-3 right-3">
                <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1 tracking-wide">
                  FEATURED
                </span>
              </div>
            )}

            {/* Quick Actions Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex space-x-3">
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={handleWishlistToggle}
                  className="bg-white/95 hover:bg-white border-0"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isInWishlist ? 'text-black fill-current' : 'text-gray-600'
                    }`}
                  />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-white/95 hover:bg-white border-0"
                >
                  <Eye className="w-4 h-4 text-gray-600" />
                </Button>
              </div>
            </div>

            {/* Quick Add to Cart */}
            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-white text-black hover:bg-gray-100 border-0 font-medium tracking-wide"
                size="sm"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                ADD TO CART
              </Button>
            </div>
          </div>

          <CardContent className="p-4">
            {/* Product Info */}
            <div className="space-y-3">
              <h3 className="font-medium text-sm line-clamp-2 group-hover:text-gray-600 transition-colors tracking-wide">
                {product.name.toUpperCase()}
              </h3>

              {/* Rating and Reviews */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-xs text-gray-500">
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg text-black">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-xs bg-gray-900 text-white px-2 py-1 font-bold tracking-wide">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>

              {/* Size Selection */}
              {product.sizes.length > 1 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {product.sizes.slice(0, 4).map((size) => (
                    <button
                      key={size}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedSize(size);
                      }}
                      className={`text-xs px-2 py-1 border transition-colors font-medium ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-gray-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                  {product.sizes.length > 4 && (
                    <span className="text-xs px-2 py-1 text-gray-500 font-medium">
                      +{product.sizes.length - 4}
                    </span>
                  )}
                </div>
              )}

              {/* Color Indicators */}
              {product.colors.length > 1 && (
                <div className="flex items-center space-x-2 mt-3">
                  <span className="text-xs text-gray-500 font-medium">COLORS:</span>
                  <div className="flex space-x-1">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className="w-3 h-3 border border-gray-300"
                        style={{
                          backgroundColor: color.toLowerCase().includes('blue') ? '#000080' :
                                         color.toLowerCase().includes('black') ? '#000000' :
                                         color.toLowerCase().includes('white') ? '#FFFFFF' :
                                         color.toLowerCase().includes('red') ? '#800000' :
                                         color.toLowerCase().includes('green') ? '#006400' :
                                         color.toLowerCase().includes('purple') ? '#4B0082' :
                                         color.toLowerCase().includes('pink') ? '#C0C0C0' :
                                         color.toLowerCase().includes('yellow') ? '#DAA520' :
                                         color.toLowerCase().includes('gray') ? '#808080' :
                                         color.toLowerCase().includes('brown') ? '#8B4513' : '#808080'
                        }}
                      />
                    ))}
                    {product.colors.length > 3 && (
                      <span className="text-xs text-gray-500 font-medium">+{product.colors.length - 3}</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
};

export default ProductCard; 