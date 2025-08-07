# StyleHub - Modern Clothing Store

A beautiful, modern e-commerce frontend built with React.js, Redux Toolkit, Tailwind CSS, and Framer Motion. This project is ready for backend integration and includes comprehensive state management, responsive design, and smooth animations.

## ✨ Features

- **🎨 Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **🛒 Shopping Cart**: Full shopping cart functionality with Redux state management
- **🔍 Product Search & Filtering**: Advanced filtering by category, price, size, and more
- **💝 Wishlist**: Save favorite products (for authenticated users)
- **📱 Mobile Responsive**: Optimized for all devices
- **🚀 Smooth Animations**: Beautiful transitions with Framer Motion
- **🎯 Redux Ready**: Complete state management for easy backend integration
- **🔐 Authentication Ready**: User authentication structure in place
- **📦 Component Library**: Reusable components built with Shadcn UI patterns

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling and responsive design
- **Framer Motion** - Animations and transitions
- **Lucide React** - Beautiful icons
- **Vite** - Build tool and development server

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd clothing-store
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (Button, Card, etc.)
│   ├── Header.jsx       # Navigation header
│   ├── Cart.jsx         # Shopping cart component
│   └── ProductCard.jsx  # Product display card
├── pages/               # Page components
│   ├── Home.jsx         # Homepage
│   └── Products.jsx     # Products listing page
├── store/               # Redux store and slices
│   ├── store.js         # Store configuration
│   └── slices/          # Redux slices
│       ├── cartSlice.js
│       ├── userSlice.js
│       ├── productsSlice.js
│       └── filtersSlice.js
├── data/                # Mock data and constants
│   └── mockData.js      # Product and test data
└── utils/               # Utility functions
    └── cn.js            # Class name utility
```

## 🔧 Backend Integration

The frontend is structured to easily integrate with a backend API. Key integration points:

### API Endpoints Expected

```javascript
// Products
GET /api/products          // Get all products with filtering
GET /api/products/:id      // Get single product
GET /api/categories        // Get all categories

// User Authentication
POST /api/auth/login       // User login
POST /api/auth/register    // User registration
POST /api/auth/logout      // User logout
GET /api/auth/me          // Get current user

// Cart & Orders
POST /api/cart/add        // Add item to cart
PUT /api/cart/update      // Update cart item
DELETE /api/cart/remove   // Remove cart item
POST /api/orders          // Create order

// Wishlist
GET /api/wishlist         // Get user wishlist
POST /api/wishlist/add    // Add to wishlist
DELETE /api/wishlist/remove // Remove from wishlist
```

### Redux Store Structure

The store is organized into slices:

- **products**: Product data, loading states, categories
- **cart**: Shopping cart items and totals
- **user**: Authentication status, user data, wishlist
- **filters**: Product filtering and search parameters

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=StyleHub
```

## 🎨 Customization

### Colors and Theming

The app uses CSS custom properties for theming. Update colors in `src/index.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... other color variables */
}
```

### Brand Identity

Update the brand name and logo in:

- `src/components/Header.jsx` - Navigation logo and text
- `src/App.jsx` - Footer branding
- `public/index.html` - Page title

## 📱 Features in Detail

### Shopping Cart

- Add/remove items with size selection
- Quantity management
- Real-time total calculation
- Sliding cart panel
- Free shipping threshold indicator

### Product Filtering

- Category-based filtering
- Price range selection
- Size filtering
- Search functionality
- Sort options (price, rating, newest)

### User Experience

- Responsive design for all devices
- Loading states and skeletons
- Error handling
- Smooth page transitions
- Hover effects and micro-interactions

### Mock Data

The app includes comprehensive mock data with:

- 12 sample products across categories
- Product images from Unsplash
- Realistic pricing and descriptions
- Customer reviews and ratings

## 🚧 Future Enhancements

Ready-to-implement features:

- [ ] Product detail pages
- [ ] User account management
- [ ] Order history
- [ ] Product reviews and ratings
- [ ] Advanced search with autocomplete
- [ ] Checkout process
- [ ] Payment integration
- [ ] Inventory management
- [ ] Admin dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support

For questions or support, please open an issue in the repository or contact the development team.

---

**Happy Coding!** 🚀
