import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { toggleCart } from '../store/slices/cartSlice';
import { setSearch } from '../store/slices/filtersSlice';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { totalQuantity } = useSelector((state) => state.cart);
  const { isAuthenticated, currentUser } = useSelector((state) => state.user);
  const { wishlist } = useSelector((state) => state.user);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearch(searchQuery));
    navigate('/products');
    setSearchQuery('');
  };

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'MEN', path: '/products?category=men' },
    { name: 'WOMEN', path: '/products?category=women' },
    { name: 'KIDS', path: '/products?category=kids' },
    { name: 'ACCESSORIES', path: '/products?category=accessories' },
    { name: 'SALE', path: '/products?sale=true' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/95">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight text-black">
                <img src="https://res.cloudinary.com/dtju1n77g/image/upload/v1754418523/LOGO_zquccm.gif" alt="Logo" className="h-16 w-16" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium tracking-wide transition-colors text-white hover:text-gray-300 font-teko"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 border border-gray-600 bg-gray-900 text-white pl-10 pr-4 py-2 text-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-400"
              />
            </div>
          </form>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            {isAuthenticated && (
              <Link to="/wishlist" className="relative">
                <Heart className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
                {wishlist.length > 0 && (
                  <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-white text-xs text-black flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            )}

            {/* User Account */}
            <Link to={isAuthenticated ? "/account" : "/login"} className="hidden md:flex">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Shopping Cart */}
            <Button
              onClick={handleCartClick}
              variant="ghost"
              size="icon"
              className="relative text-gray-300 hover:text-white"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalQuantity > 0 && (
                <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-white text-xs text-black flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="flex items-center">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border border-gray-600 bg-gray-900 text-white pl-10 pr-4 py-2 text-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-400"
                  />
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-sm font-medium tracking-wide transition-colors text-white hover:text-gray-300 font-teko"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to={isAuthenticated ? "/account" : "/login"}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-sm font-medium tracking-wide transition-colors text-white hover:text-gray-300 font-teko"
                >
                  {isAuthenticated ? `HELLO, ${currentUser?.name?.toUpperCase()}` : 'SIGN IN'}
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 