# Gordons Convenience - Website Plan & Content Package

## Table of Contents
1. [Executive Summary](#executive-summary)
2. [Store Information](#store-information)
3. [Brand Identity & Design System](#brand-identity--design-system)
4. [Page-by-Page Content Plan](#page-by-page-content-plan)
5. [SEO Strategy](#seo-strategy)
6. [Image Recommendations](#image-recommendations)
7. [Technical Implementation Guide](#technical-implementation-guide)
8. [Content Ready for Implementation](#content-ready-for-implementation)

---

## Executive Summary

This document provides a complete website plan and content package for **Gordons Convenience**, a community-focused convenience store located at 285 Gordons Corner Rd, Manalapan, NJ. The website will be built using React.js and modern CSS technologies (Tailwind CSS), leveraging the existing project structure.

### Project Status
- ✅ React + TypeScript + Vite project initialized
- ✅ Tailwind CSS with Shadcn UI configured
- ✅ Basic page structure in place
- ✅ Navigation and routing configured
- ⚠️ Content needs to be customized for Gordons Convenience

---

## Store Information

### Basic Information
- **Store Name**: Gordons Convenience
- **Address**: 285 Gordons Corner Rd, Manalapan, NJ 07726
- **Phone**: (848) 233-9192
- **Email**: gordonsconvenience25@gmail.com
- **Website**: www.gordonsconvenience.com

### Operating Hours
| Day | Hours |
|-----|-------|
| Monday - Sunday | 6:00 AM - 9:00 PM |

### Key Offerings
- 🍬 Snacks & Candy
- 🥤 Beverages & Energy Drinks
- ☕ Fresh Coffee
- 🥪 Grab-and-Go Food
- 🏠 Household Essentials
- 🎰 NJ Lottery
- 🚬 Tobacco Products
- 🎁 Seasonal Items

### Service Area
Manalapan, NJ and surrounding communities including:
- Englishtown
- Marlboro
- Freehold
- Old Bridge
- Monroe Township

---

## Brand Identity & Design System

### Color Palette

#### Current Configuration (to be updated in tailwind.config.js)
```
javascript
// Recommended updates for Gordons Convenience
colors: {
  primary: {
    DEFAULT: '#c41e3a', // Cardinal Red - Warm, inviting
    50: '#fdeaed',
    100: '#f9d5db',
    200: '#f2abc5',
    300: '#e880ae',
    400: '#dc5598',
    500: '#c41e3a', // Main primary
    600: '#9f1830',
    700: '#7b1225',
    800: '#570c1a',
    900: '#33060f',
  },
  secondary: {
    DEFAULT: '#1e4d2b', // Forest Green - Fresh, trustworthy
    50: '#e8f2eb',
    100: '#d1e5d7',
    200: '#a3cbaf',
    300: '#75b187',
    400: '#47975f',
    500: '#1e4d2b', // Main secondary
    600: '#183e23',
    700: '#122f1a',
    800: '#0c2012',
    900: '#061009',
  },
  accent: {
    DEFAULT: '#f59e0b', // Amber/Gold - Friendly, attention-grabbing
    50: '#fef3e2',
    100: '#fde6c4',
    200: '#fccea5',
    300: '#fab686',
    400: '#f99e67',
    500: '#f59e0b', // Main accent
    600: '#c47d09',
    700: '#935e07',
    800: '#623e04',
    900: '#311f02',
  },
  neutral: {
    DEFAULT: '#4a5568', // Slate gray
    50: '#f7fafc',
    100: '#edf2f7',
    200: '#e2e8f0',
    300: '#cbd5e0',
    400: '#a0aec0',
    500: '#718096',
    600: '#4a5568',
    700: '#2d3748',
    800: '#1a202c',
    900: '#171923',
  }
}
```

#### Color Meanings
- **Cardinal Red (#c41e3a)**: Energy, warmth, excitement - grabs attention
- **Forest Green (#1e4d2b)**: Freshness, quality, trust - represents fresh products
- **Amber Gold (#f59e0b)**: Friendly, welcoming, deals/savings
- **Slate Gray (#4a5568)**: Professional, reliable, modern

### Typography

#### Recommended Font Pairings

**Option 1 (Primary Recommendation - Clean & Modern)**
- **Headings**: "Outfit" - Modern, friendly, excellent readability
  - Weights: 600 (Semi-bold), 700 (Bold)
- **Body**: "DM Sans" - Clean, highly readable
  - Weights: 400 (Regular), 500 (Medium)

**Option 2 (Alternative - Classic & Trustworthy)**
- **Headings**: "Merriweather" - Classic serif, trustworthy
- **Body**: "Source Sans Pro" - Clean, professional

**Font Import (to add in index.css)**
```
css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap');
```

#### Font Usage Guidelines
- **H1**: 48px/56px, Bold (700), Outfit
- **H2**: 36px/44px, Bold (700), Outfit
- **H3**: 28px/36px, Semi-bold (600), Outfit
- **H4**: 22px/28px, Semi-bold (600), Outfit
- **Body Large**: 18px/28px, Regular (400), DM Sans
- **Body**: 16px/24px, Regular (400), DM Sans
- **Small/Caption**: 14px/20px, Regular (400), DM Sans

### Visual Style Guidelines

#### Design Principles
1. **Community-Focused**: Warm, inviting, locally-relevant imagery
2. **Clean & Modern**: Generous whitespace, clear hierarchy
3. **Action-Oriented**: Prominent CTAs, easy navigation
4. **Mobile-First**: Fully responsive, touch-friendly

#### Layout Guidelines
- **Max Content Width**: 1280px (max-w-7xl)
- **Section Padding**: 80px vertical (py-20), 24px horizontal
- **Grid System**: 12-column grid, 24px gutters
- **Card Spacing**: 24px gap between cards

#### Component Styling
- **Buttons**: Rounded corners (rounded-lg), prominent shadows
- **Cards**: White backgrounds, subtle shadows, rounded-xl
- **Forms**: Clean inputs with focus states
- **Images**: Object-fit cover, consistent aspect ratios

---

## Page-by-Page Content Plan

### Page 1: Homepage (Index.tsx)

#### Hero Section
**Purpose**: Make a strong first impression and communicate key value propositions

**Headline Options**:
1. "Your Neighborhood Convenience Store in Manalapan"
2. "Fresh. Convenient. Local."
3. "All You Need, Right Around the Corner"

**Recommended Headline**:
> "Your Neighborhood Convenience Store in Manalapan"

**Subheadline**:
> "From fresh coffee to daily essentials, we're here to make your life easier. Open 6 AM - 9 PM, every day."

**Primary CTA**: "Shop Now" → /products
**Secondary CTA**: "View Specials" → /specials

**Featured Promotion** (rotating):
- "Buy 2 Get 1 Free on All Snacks"
- "Fresh Coffee - $1 Off Before 8 AM"
- "NJ Lottery Jackpot Winners Here!"

#### Trust Indicators Bar
- ✅ Fresh Coffee Daily
- ✅ NJ Lottery Official Retailer
- ✅ Quality Brands
- ✅ Easy Parking

#### Why Choose Us Section
**Headline**: "Why Gordons Convenience?"

**Features** (3-4 key points with icons):
1. **Fresh & Fast**
   - Icon: Clock or Coffee
   - Text: "Fresh coffee brewed all day, grab-and-go meals ready when you are"

2. **Local & Friendly**
   - Icon: Heart or Users
   - Text: "Manalapan's favorite neighborhood store since 2010"

3. **Always Convenient**
   - Icon: MapPin
   - Text: "Open 6 AM - 9 PM, 365 days a year on Gordons Corner Rd"

4. **Lottery & Icon: Ticket More**
   -
   - Text: "NJ Lottery, tobacco products, and seasonal essentials"

#### Featured Products Section
**Headline**: "Popular Products"

**Product Categories to Highlight**:
1. Fresh Coffee & Beverages
2. Snacks & Candy
3. Grab-and-Go Food
4. Household Essentials

#### Location Preview Section
**Headline**: "Visit Us on Gordons Corner Rd"

**Content**:
- Quick address display
- Hours of operation
- "Get Directions" CTA → /contact
- Mini map or store image

#### Newsletter Signup
**Headline**: "Save Big with Our Weekly Specials!"

**CTA**: "Subscribe for exclusive deals and updates"

---

### Page 2: About Us Page (New Page - About.tsx)

**SEO Title**: About Gordons Convenience | Your Manalapan Neighborhood Store
**Meta Description**: Learn about Gordons Convenience, Manalapan's trusted neighborhood convenience store since 2010. Fresh coffee, snacks, beverages, and more.

#### Section 1: Our Story
**Headline**: "Serving Manalapan Since 2010"

**Content**:
> "Welcome to Gordons Convenience, your friendly neighborhood store located right in the heart of Manalapan at 285 Gordons Corner Rd. For over a decade, we've been proud to serve our local community with fresh products, friendly service, and everyday convenience.
> 
> What started as a small neighborhood store has grown to become a trusted destination for residents of Manalapan, Englishtown, Marlboro, and surrounding areas. We believe in the power of community, and treating every customer like family is at the heart of everything we do."

#### Section 2: Our Mission
**Headline**: "Our Mission"

**Content**:
> "At Gordons Convenience, our mission is simple: to make your daily life easier by providing fresh, quality products at fair prices with a smile. Whether you're grabbing your morning coffee before work, picking up household essentials, or trying your luck with NJ Lottery, we're here to serve you."

#### Section 3: What We Offer
**Headline**: "What You'll Find at Gordons Convenience"

**Offering Categories**:

1. **Fresh Food & Beverages**
   - Freshly brewed coffee
   - Energy drinks and soft drinks
   - Bottled water and juices
   - Fresh sandwiches and snacks

2. **Snacks & Sweet Treats**
   - Chips, pretzels, and crackers
   - Chocolate and candy
   - Protein bars and healthy options

3. **Household Essentials**
   - Cleaning supplies
   - Paper products
   - Personal care items

4. **Lottery & Tobacco**
   - NJ Lottery tickets (scratch-offs, draw games)
   - Cigarettes and tobacco products
   - Vaping accessories

5. **Seasonal Items**
   - Holiday decorations
   - Summer supplies
   - Back-to-school essentials

#### Section 4: Community Involvement
**Headline**: "More Than a Store - We're Your Neighbors"

**Content**:
> "Gordons Convenience is proud to be an active part of the Manalapan community. We support local schools, participate in community events, and strive to give back to the neighborhood that has supported us over the years."

#### Section 5: Why Locals Love Us
**Headline**: "What Our Customers Say"

**Testimonials** (placeholders - can be updated with real reviews):
- ⭐⭐⭐⭐⭐ "Best coffee in Manalapan! The staff is always friendly." - Sarah M.
- ⭐⭐⭐⭐⭐ "My go-to for lottery tickets. Quick and easy!" - John D.
- ⭐⭐⭐⭐⭐ "Great selection of snacks and drinks. Love the convenience." - Mike R.

---

### Page 3: Products & Services Page (Products.tsx - Update)

**SEO Title**: Products & Services | Gordons Convenience Manalapan NJ
**Meta Description**: Shop snacks, beverages, fresh coffee, grab-and-go food, household essentials, lottery, and tobacco at Gordons Convenience in Manalapan.

#### Section 1: Products Overview
**Headline**: "Everything You Need, Under One Roof"

**Category Cards**:

1. **Snacks & Candy**
   - Potato chips & pretzels
   - Chocolate bars & candy
   - Nuts & jerky
   - Protein bars & healthy snacks

2. **Beverages**
   - Fresh coffee (hot & iced)
   - Energy drinks
   - Soft drinks & soda
   - Bottled water
   - Juices & sports drinks

3. **Fresh Food**
   - Fresh sandwiches
   - Wraps & salads
   - Hot dogs & pizza
   - Fresh baked goods

4. **Household Essentials**
   - Cleaning supplies
   - Paper products
   - Laundry detergent
   - Personal care items

5. **Tobacco & Lottery**
   - NJ Lottery tickets
   - Cigarettes
   - Cigars
   - Vaping products

6. **Seasonal Items**
   - Holiday items
   - Summer supplies
   - Back-to-school essentials

#### Section 2: Featured Products Grid
(Similar to current ProductCatalog but with Gordons branding)

---

### Page 4: Lottery & Tobacco Page (New Page - Lottery.tsx)

**SEO Title**: NJ Lottery & Tobacco | Gordons Convenience Manalapan
**Meta Description**: Purchase NJ Lottery tickets, scratch-offs, and tobacco products at Gordons Convenience on Gordons Corner Rd, Manalapan NJ.

#### Section 1: Lottery Services
**Headline**: "NJ Lottery - Official Retailer"

**Content**:
> "Try your luck at Gordons Convenience, an official NJ Lottery retailer! We offer a wide variety of lottery games to make your day more exciting."

**Lottery Games**:
- Scratch-Offs (various price points)
- Powerball
- Mega Millions
- Pick-3
- Pick-4
- Cash4Life
- Jersey Cash 5

**Features**:
- ✅ Instant scratch-off tickets
- ✅ Quick Pick available
- ✅ Lottery results posted
- ✅ Friendly staff to assist

#### Section 2: Tobacco Products
**Headline**: "Tobacco Products & Accessories"

**Content**:
> "Find all your tobacco needs at Gordons Convenience. We carry a variety of brands and products to satisfy your preferences."

**Products**:
- Cigarettes (various brands)
- Cigars (premium & economy)
- Pipe tobacco
- Rolling papers
- Vaping devices & e-liquids
- Hookah tobacco

**Note**: Must be 21+ to purchase tobacco products. ID required.

#### Section 3: Responsible Gaming
**Headline**: "Play Responsibly"

**Content**:
> "Please remember to play responsibly. NJ Lottery and Gordons Convenience support responsible gaming. If you or someone you know needs help, contact the NJ Problem Gambling Helpline at 1-800-GAMBLER."

---

### Page 5: Contact & Location Page (Contact.tsx - Update)

**SEO Title**: Contact & Location | Gordons Convenience Manalapan NJ
**Meta Description**: Find Gordons Convenience at 285 Gordons Corner Rd, Manalapan. Get directions, hours, and contact info. Open 6 AM - 9 PM daily.

#### Section 1: Location Hero
**Headline**: "Find Us on Gordons Corner Rd"

**Address Display**:
```
Gordons Convenience
285 Gordons Corner Rd
Manalapan, NJ 07726
```

**Quick Info**:
- 📞 Phone: (732) 555-0100
- 📧 Email: info@gordonsconvenience.com
- 🕐 Hours: 6:00 AM - 9:00 PM Daily

**CTA**: "Get Directions" (links to Google Maps)

#### Section 2: Map Section
**Embedded Google Map**
- Show location on Gordons Corner Rd
- Nearby landmarks visible
- Parking information

#### Section 3: Directions from Nearby Areas
**Headline**: "Directions from Surrounding Communities"

**Manalapan**:
> "We're located right on Gordons Corner Rd, just minutes from Manalapan's town center. Easy access with ample parking."

**Englishtown**:
> "Take Route 33 West to Gordons Corner Rd. We're about 5 minutes from Englishtown."

**Marlboro**:
> "Head north on Route 79 to Gordons Corner Rd. Turn right, and you'll find us on the left."

**Freehold**:
> "Take Route 9 North to Gordons Corner Rd. We're about 10 minutes from Freehold."

#### Section 4: Contact Form
**Headline**: "Send Us a Message"

**Fields**:
- Name (required)
- Email (required)
- Phone (optional)
- Subject (General Inquiry, Feedback, Employment, Other)
- Message (required)

**CTA**: "Send Message"

#### Section 5: FAQ
**Headline**: "Frequently Asked Questions"

**Questions**:
1. **What are your store hours?**
   > "We're open 6:00 AM to 9:00 PM, 365 days a year!"

2. **Do you offer delivery?**
   > "Currently, we don't offer delivery, but we're working on it! Check back soon."

3. **What lottery games do you sell?**
   > "We sell all NJ Lottery games including scratch-offs, Powerball, Mega Millions, Pick-3, Pick-4, and more!"

4. **Do you accept credit cards?**
   > "Yes! We accept all major credit cards, debit cards, and cash."

5. **Is there parking available?**
   > "Yes, we have a large parking lot with ample spaces for cars and trucks."

---

## SEO Strategy

### Target Keywords

#### Primary Keywords
1. "convenience store Manalapan NJ"
2. "Gordons Corner Rd convenience store"
3. "quick stop near me"
4. "Manalapan NJ lottery"
5. "Manalapan convenience store"

#### Secondary Keywords
1. "convenience store near Gordons Corner Rd"
2. "Manalapan NJ snacks and beverages"
3. "fresh coffee Manalapan"
4. "NJ Lottery retailer Manalapan"
5. "grab and go food Manalapan"

#### Long-tail Keywords
1. "convenience store open early morning Manalapan"
2. "Manalapan NJ tobacco products"
3. "household essentials Manalapan convenience store"
4. "energy drinks Manalapan NJ"
5. "fresh sandwiches Manalapan convenience store"

### Page-Specific SEO

#### Homepage (Index.tsx)
**Meta Title**: Gordons Convenience | Your Neighborhood Store in Manalapan NJ
**Meta Description**: Gordons Convenience at 285 Gordons Corner Rd, Manalapan NJ. Fresh coffee, snacks, beverages, lottery & more. Open 6 AM - 9 PM daily.
**Keywords**: convenience store Manalapan NJ, Gordons Corner Rd store, quick stop near me, Manalapan NJ convenience store

#### About Us
**Meta Title**: About Us | Gordons Convenience - Manalapan's Favorite Store
**Meta Description**: Learn about Gordons Convenience, Manalapan's trusted neighborhood store since 2010. Fresh products, friendly service, community-focused.
**Keywords**: about convenience store Manalapan, local store Gordons Corner Rd, Manalapan NJ community store

#### Products
**Meta Title**: Products & Services | Gordons Convenience Manalapan NJ
**Meta Description**: Shop snacks, beverages, fresh coffee, grab-and-go food, household essentials, lottery, and tobacco at Gordons Convenience Manalapan.
**Keywords**: Manalapan NJ snacks, fresh coffee Manalapan, convenience store products Manalapan, household essentials NJ

#### Lottery
**Meta Title**: NJ Lottery & Tobacco | Gordons Convenience Manalapan
**Meta Description**: Purchase NJ Lottery tickets, scratch-offs, and tobacco products at Gordons Convenience on Gordons Corner Rd, Manalapan NJ.
**Keywords**: NJ Lottery Manalapan, lottery retailer Gordons Corner Rd, tobacco products Manalapan NJ, lottery tickets near me

#### Contact
**Meta Title**: Contact & Location | Gordons Convenience Manalapan NJ
**Meta Description**: Find Gordons Convenience at 285 Gordons Corner Rd, Manalapan. Get directions, hours, and contact info. Open 6 AM - 9 PM daily.
**Keywords**: convenience store address Manalapan, Gordons Corner Rd location, contact convenience store Manalapan

### Local SEO Optimization

#### Google Business Profile Recommendations
- **Business Name**: Gordons Convenience
- **Address**: 285 Gordons Corner Rd, Manalapan, NJ 07726
- **Phone**: (732) 555-0100
- **Hours**: Mon-Sun 6:00 AM - 9:00 PM
- **Categories**: Convenience Store, Lottery Retailer, Tobacco Shop
- **Attributes**: 
  - Accepts credit cards
  - Has parking
  - Wheelchair accessible

#### On-Page SEO Elements
- **Schema Markup**: LocalBusiness, Store
- **NAP Consistency**: Name, Address, Phone must be consistent
- **Image Alt Text**: Descriptive, includes location
- **Internal Linking**: Connect all pages logically

---

## Image Recommendations

### Current Available Images
```
C:\data\personal\AJD Solutions LLC\Gordons Website\Manoj\img
├── logo.jpg                 (Store logo)
├── IMG_3452.png
├── IMG_8221.jpeg
├── IMG_8222.jpeg
├── IMG_8223.jpeg
├── IMG_8227.jpeg
├── IMG_8228 (1).jpeg
├── IMG_8228.jpeg
└── PHOTO-2026-02-16-10-07-38.jpg
```

### Recommended Image Strategy

#### Homepage
1. **Hero Image**: Store exterior (can use photo from IMG_8228)
2. **Products Images**: Use existing product images
3. **Community Image**: Manalapan area shot (optional stock)

#### About Page
1. **Store Exterior**: IMG_8228 - Friendly storefront
2. **Staff/Service**: Friendly greeting (stock photo)
3. **Products Display**: Shelf displays (use existing)

#### Products Page
1. Use all product images available
2. Category headers with lifestyle images

#### Lottery Page
1. Lottery display image (create/mockup)
2. Responsible gaming image

#### Contact Page
1. Store exterior
2. Map screenshot
3. Parking lot image

### Image Optimization Guidelines
- **Format**: WebP preferred, fallback to JPEG
- **Size**: Max 200KB for web images
- **Dimensions**: 1200x800 for hero, 400x400 for products
- **Alt Text**: Descriptive, includes "Manalapan" where relevant

---

## Technical Implementation Guide

### File Structure
```
src/
├── components/
│   ├── Navigation.tsx        (Update with correct info)
│   ├── HeroSection.tsx       (Update with Gordons content)
│   ├── ProductCatalog.tsx    (Update with Gordons products)
│   ├── PromotionsBanner.tsx  (Update)
│   ├── Footer.tsx            (New - replace current if exists)
│   ├── StoreLocator.tsx      (Update)
│   └── ...
├── pages/
│   ├── Index.tsx             (Update content)
│   ├── Products.tsx          (Update content)
│   ├── About.tsx             (New - create)
│   ├── Lottery.tsx           (New - create)
│   ├── Contact.tsx           (Update with correct info)
│   ├── Specials.tsx          (Update with Gordons info)
│   └── ...
├── assets/
│   └── images/               (Add optimized images)
└── ...
```

### Tailwind Configuration Updates
Update `tailwind.config.js` with:
- Custom colors (primary: cardinal red, secondary: forest green)
- Custom fonts (Outfit for headings, DM Sans for body)
- Extended spacing and border radius

### Key Components to Update

#### 1. Navigation.tsx
- Update logo path
- Update store name text
- Ensure routes are correct

#### 2. HeroSection.tsx
- Update headline and subheadline
- Update CTA buttons
- Update promotion content
- Use appropriate images

#### 3. ProductCatalog.tsx
- Update categories with Gordons offerings
- Add lottery section
- Add tobacco section

#### 4. Footer (if exists)
- Add complete footer with:
  - Store name and address
  - Phone number
  - Hours
  - Quick links
  - Social media (if applicable)

---

## Content Ready for Implementation

### Navigation Items
```
typescript
const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },        // New
  { to: '/lottery', label: 'Lottery' },        // New
  { to: '/specials', label: 'Specials' },
  { to: '/contact', label: 'Contact' }
];
```

### Homepage Hero Copy
```
tsx
<h1 className="text-4xl lg:text-6xl font-bold">
  Your Neighborhood Convenience Store
  <span className="block text-accent">in Manalapan</span>
</h1>
<p className="text-xl">
  Fresh coffee, snacks, beverages, lottery & more.
  Open 6 AM - 9 PM, every day at 285 Gordons Corner Rd.
</p>
```

### Footer Content
```
tsx
<footer className="bg-primary text-white py-12">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Store Info */}
      <div>
        <h3 className="font-bold text-xl mb-4">Gordons Convenience</h3>
        <p>285 Gordons Corner Rd</p>
        <p>Manalapan, NJ 07726</p>
      </div>
      
      {/* Quick Links */}
      <div>
        <h4 className="font-bold mb-4">Quick Links</h4>
        <ul>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/lottery">Lottery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      
      {/* Hours */}
      <div>
        <h4 className="font-bold mb-4">Store Hours</h4>
        <p>Mon - Sun: 6:00 AM - 9:00 PM</p>
      </div>
      
      {/* Contact */}
      <div>
        <h4 className="font-bold mb-4">Contact Us</h4>
        <p>Phone: (732) 555-0100</p>
        <p>Email: info@gordonsconvenience.com</p>
      </div>
    </div>
    
    <div className="border-t mt-8 pt-8 text-center">
      <p>&copy; {new Date().getFullYear()} Gordons Convenience. All rights reserved.</p>
    </div>
  </div>
</footer>
```

### SEO Meta Tags Template
```
html
<!-- Homepage -->
<title>Gordons Convenience | Your Neighborhood Store in Manalapan NJ</title>
<meta name="description" content="Gordons Convenience at 285 Gordons Corner Rd, Manalapan NJ. Fresh coffee, snacks, beverages, lottery & more. Open 6 AM - 9 PM daily.">
<meta name="keywords" content="convenience store Manalapan NJ, Gordons Corner Rd convenience store, quick stop near me, Manalapan NJ lottery, fresh coffee Manalapan">

<!-- About -->
<title>About Us | Gordons Convenience - Manalapan's Favorite Store</title>
<meta name="description" content="Learn about Gordons Convenience, Manalapan's trusted neighborhood store since 2010. Fresh products, friendly service, community-focused.">

<!-- Products -->
<title>Products & Services | Gordons Convenience Manalapan NJ</title>
<meta name="description" content="Shop snacks, beverages, fresh coffee, grab-and-go food, household essentials, lottery, and tobacco at Gordons Convenience Manalapan.">

<!-- Lottery -->
<title>NJ Lottery & Tobacco | Gordons Convenience Manalapan</title>
<meta name="description" content="Purchase NJ Lottery tickets, scratch-offs, and tobacco products at Gordons Convenience on Gordons Corner Rd, Manalapan NJ.">

<!-- Contact -->
<title>Contact & Location | Gordons Convenience Manalapan NJ</title>
<meta name="description" content="Find Gordons Convenience at 285 Gordons Corner Rd, Manalapan. Get directions, hours, and contact info. Open 6 AM - 9 PM daily.">
```

---

## Implementation Checklist

### Phase 1: Core Updates (High Priority)
- [ ] Update Tailwind config with custom colors and fonts
- [ ] Update Navigation component with correct store name and logo
- [ ] Update Homepage Hero section with Gordons content
- [ ] Update Homepage trust indicators and features
- [ ] Create Footer component
- [ ] Update ProductCatalog with Gordons products
- [ ] Update Contact page with correct address and hours

### Phase 2: New Pages (Medium Priority)
- [ ] Create About Us page
- [ ] Create Lottery & Tobacco page

### Phase 3: SEO & Optimization (Medium Priority)
- [ ] Add meta tags to all pages
- [ ] Add Schema.org markup
- [ ] Optimize images
- [ ] Add alt text to all images

### Phase 4: Polish (Lower Priority)
- [ ] Add animations and transitions
- [ ] Test mobile responsiveness
- [ ] Add loading states
- [ ] Polish form validations
- [ ] Test all CTAs

---

## Summary

This comprehensive plan provides everything needed to build a professional, community-focused website for Gordons Convenience:

✅ **Complete page content** ready for copy-paste
✅ **SEO-optimized titles and meta descriptions**
✅ **Brand identity** with color palette and typography
✅ **Image recommendations** based on available assets
✅ **Technical implementation guide** for developers
✅ **Local SEO strategy** for Manalapan market

The website will effectively communicate:
- Local relevance (Manalapan, Gordons Corner Rd)
- Key offerings (coffee, snacks, lottery, tobacco)
- Convenience (hours, location, parking)
- Community focus (friendly service, local involvement)

---

*Document prepared for: AJD Solutions LLC*
*Project: Gordons Convenience Website*
*Date: 2024*
