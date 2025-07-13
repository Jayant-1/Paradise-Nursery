# Paradise Nursery - Houseplant Shopping Application

A modern React-based e-commerce application for browsing and purchasing houseplants. Built with a clean, minimalist design and intuitive user experience.

## Features

### 🏠 Landing Page

- Beautiful hero section with background design
- Company information and description
- "Get Started" button linking to products

### 🌿 Product Listing Page

- 9 houseplants organized into 3 categories:
  - **Low Light Plants**: Snake Plant, ZZ Plant, Peace Lily
  - **Medium Light Plants**: Monstera Deliciosa, Pothos, Philodendron
  - **Bright Light Plants**: Fiddle Leaf Fig, Bird of Paradise, Succulent Collection
- Category filtering functionality
- Product cards with images, names, prices, and descriptions
- "Add to Cart" functionality

### 🛒 Shopping Cart Page

- Dynamic cart with quantity controls
- Real-time total calculation
- Individual item management (increase/decrease/remove)
- Order summary with total items and cost
- Continue shopping and checkout buttons
- Empty cart state with call-to-action

### 🧭 Navigation

- Responsive header with dynamic navigation
- Shopping cart icon with item count
- Context-aware navigation links

## Technology Stack

- **React 18.2.0** - Modern React with hooks
- **React Router DOM 6.8.0** - Client-side routing
- **CSS3** - Custom styling with modern design patterns
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd paradise-nursery
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header component
│   └── Header.css         # Header styles
├── data/
│   └── plants.js          # Plant data and categories
├── pages/
│   ├── LandingPage.js     # Home page component
│   ├── LandingPage.css    # Landing page styles
│   ├── ProductPage.js     # Product listing component
│   ├── ProductPage.css    # Product page styles
│   ├── CartPage.js        # Shopping cart component
│   └── CartPage.css       # Cart page styles
├── App.js                 # Main app component with routing
├── App.css                # App-level styles
├── index.js               # Application entry point
└── index.css              # Global styles
```

## Key Features Implementation

### State Management

- Cart state managed with React useState hook
- Cart functions: addToCart, updateQuantity, removeFromCart
- Real-time cart calculations

### Routing

- React Router for client-side navigation
- Three main routes: `/`, `/products`, `/cart`
- Dynamic navigation based on current page

### Responsive Design

- Mobile-first CSS approach
- Grid and Flexbox layouts
- Media queries for different screen sizes

### User Experience

- Smooth hover animations
- Loading states and feedback
- Intuitive navigation flow
- Clean, modern UI design

## Design Philosophy

The application follows a minimalist design approach with:

- Clean, readable typography
- Consistent color scheme (green theme)
- Smooth animations and transitions
- Intuitive user interface
- Mobile-responsive design

## Future Enhancements

Potential improvements for the application:

- User authentication and accounts
- Wishlist functionality
- Product reviews and ratings
- Advanced filtering and search
- Payment integration
- Order history
- Plant care tips and guides

## Contributing

This is a demo application for educational purposes. Feel free to use this code as a reference for your own projects.

## License

This project is open source and available under the MIT License.
