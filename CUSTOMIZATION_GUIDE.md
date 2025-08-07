# 🎨 Customization Guide

## 📸 **How to Change the Rotating Images**

### **Option 1: Replace with Your Image URLs**

1. Open `src/pages/Home.jsx`
2. Find the `streetwearImages` array (around line 20)
3. Replace the URLs with your own image URLs:

```javascript
const streetwearImages = [
  "https://your-domain.com/image1.jpg",
  "https://your-domain.com/image2.jpg",
  "https://your-domain.com/image3.jpg",
  "https://your-domain.com/image4.jpg",
  "https://your-domain.com/image5.jpg",
  "https://your-domain.com/image6.jpg",
  "https://your-domain.com/image7.jpg",
  "https://your-domain.com/image8.jpg",
];
```

### **Option 2: Use Local Images**

1. Put your images in the `public/images/` folder
2. Reference them like this:

```javascript
const streetwearImages = [
  "/images/your-image-1.jpg",
  "/images/your-image-2.jpg",
  "/images/your-image-3.jpg",
  "/images/your-image-4.jpg",
  "/images/your-image-5.jpg",
  "/images/your-image-6.jpg",
  "/images/your-image-7.jpg",
  "/images/your-image-8.jpg",
];
```

### **Image Requirements:**

- **Recommended size**: 400x500 pixels
- **Format**: JPG, PNG, or WebP
- **Aspect ratio**: 4:5 (portrait) works best
- **File size**: Keep under 200KB for fast loading

## 🏷️ **How to Change the Brand Name**

1. Open `src/pages/Home.jsx`
2. Find the hero section (around line 60)
3. Change both the `data-content` and the text content:

```javascript
<h1 data-content="YOUR BRAND NAME">YOUR BRAND NAME</h1>
```

**Example:**

```javascript
<h1 data-content="FASHION HUB">FASHION HUB</h1>
```

## 🎯 **How to Change the Tagline and Description**

1. Find the `author` div in the hero section
2. Update the content:

```javascript
<div className="author">
  <h2>YOUR CUSTOM TAGLINE</h2>
  <p>
    <b>Your Brand Description</b>
  </p>
  <p>Your detailed description about your brand and what you offer</p>
</div>
```

**Example:**

```javascript
<div className="author">
  <h2>URBAN STYLE REVOLUTION</h2>
  <p>
    <b>Premium Streetwear</b>
  </p>
  <p>Discover the latest trends in urban fashion and streetwear culture</p>
</div>
```

## 🖼️ **How to Add a Custom Icon/Logo**

### **Option 1: Add an Icon Above the Brand Name**

1. Import an icon from Lucide React or use a custom image
2. Add it to the hero section:

```javascript
import { Crown, Zap, Star } from "lucide-react"; // Add your preferred icon

// In the hero section, add this before the h1:
<div className="mb-4">
  <Crown className="w-16 h-16 mx-auto text-black" />
</div>;
```

### **Option 2: Replace the Model Silhouette**

1. Open `src/index.css`
2. Find the `.banner .content .model` section
3. Replace the background-image with your logo:

```css
.banner .content .model {
  background-image: url("/images/your-logo.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
```

## 🎨 **Quick Customization Examples**

### **For a Sneaker Brand:**

```javascript
const streetwearImages = [
  "/images/sneaker1.jpg",
  "/images/sneaker2.jpg",
  "/images/sneaker3.jpg",
  "/images/sneaker4.jpg",
  "/images/sneaker5.jpg",
  "/images/sneaker6.jpg",
  "/images/sneaker7.jpg",
  "/images/sneaker8.jpg",
];

// Brand name
<h1 data-content="SNEAKER HUB">
  SNEAKER HUB
</h1>

// Tagline
<h2>PREMIUM FOOTWEAR</h2>
<p><b>Exclusive Sneakers</b></p>
<p>Discover the latest drops from top brands worldwide</p>
```

### **For a Luxury Fashion Brand:**

```javascript
// Brand name
<h1 data-content="LUXE MODE">
  LUXE MODE
</h1>

// Tagline
<h2>ELEVATED STYLE</h2>
<p><b>Luxury Fashion</b></p>
<p>Curated collection of premium fashion and accessories</p>
```

## 🔧 **Tips for Best Results**

1. **Images**: Use high-quality, consistent images with similar lighting
2. **Brand Name**: Keep it short and impactful (6-12 characters works best)
3. **Tagline**: Make it memorable and descriptive
4. **Colors**: The current theme uses black, white, and gray - perfect for most brands
5. **Testing**: After making changes, refresh your browser to see the updates

## 📱 **Responsive Considerations**

- The brand name automatically scales down on mobile devices
- Images maintain their aspect ratio across all screen sizes
- The carousel adjusts its size and rotation radius for different devices

---

**Need help?** Just replace the placeholder text and URLs with your actual content!
