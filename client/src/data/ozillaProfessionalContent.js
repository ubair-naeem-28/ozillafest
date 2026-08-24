import { assetUrl } from '../utils/assetUrl.util'

export const ozillaProfessionalContent = {
  objective:
    'To build a premium experience platform where users can explore OZilla Festival, discover partner restaurants and hotels, claim discounts, and connect with event experiences.',
  about:
    'OZilla Festival is a youth-focused entertainment experience combining music, food, culture, creators, brands and communities into one powerful lifestyle platform.',
  festivalExperience: [
    'Live Concerts',
    'DJ Nights',
    'Food Experiences',
    'Brand Activation Zones',
    'Content and Photo Moments',
    'Community Engagement'
  ],
  journey: [
    'Discover OZilla',
    'Explore Partners',
    'Select Discount',
    'Use Promo Code',
    'Enjoy Experience'
  ],
  features: [
    'Partner Listings',
    'Discount Management',
    'Search and Filters',
    'Promo Code System',
    'Mobile Responsive Design',
    'Contact Forms'
  ],
  partnerBenefits: [
    'Digital Visibility',
    'Customer Reach',
    'Influencer Promotion',
    'Event Audience Access',
    'Brand Awareness'
  ],
  callToActions: [
    'Explore Festival',
    'Claim Discount',
    'Become A Partner',
    'Book Your Stay'
  ],
  restaurants: [
    {
      name: 'Street Grill Co.',
      cuisine: 'BBQ and Fast Casual',
      location: 'Karachi',
      discount: '15% OFF',
      offer: 'Festival combo meal with priority queue access.',
      code: 'OZILLA15'
    },
    {
      name: 'Spice District',
      cuisine: 'Pakistani Fusion',
      location: 'Lahore',
      discount: '20% OFF',
      offer: 'Family platter offer for OZilla audience.',
      code: 'SPICE20'
    },
    {
      name: 'Urban Brew',
      cuisine: 'Cafe and Desserts',
      location: 'Islamabad',
      discount: 'Buy 1 Get 1',
      offer: 'Coffee and dessert pair for creators and attendees.',
      code: 'BREWBOGO'
    }
  ],
  hotels: [
    {
      name: 'Pearl Continental Hotel (PC)',
      location: 'Lahore, Punjab, Pakistan',
      rates: 'Premium city-center business and leisure rates',
      offer: 'Flexible booking options with conference and dining access.',
      website: 'https://www.expedia.com/Lahore-Hotels-Pearl-Continental-Lahore.h6062.Hotel-Information?chkin=2026-07-23&chkout=2026-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1783538185568&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2068&destination=Lahore%2C+Punjab%2C+Pakistan&destType=MARKET&neighborhoodId=553248633981712959&selected=6062&latLong=31.554606%2C74.357155&sort=RECOMMENDED&top_dp=124&top_cur=USD&semcid=US.UB.BING.PT-c-EN.HOTEL&semdtl=a1429012176.b11315017303776210.g1kwd-82189323842618%3Aloc-144.e1c.m18d15bbf2af6c1d752fa9d1bc0e925b82.r1dbbc4399e805d7a471af9bb50c0eca6a53815556874c850795d8066b3e568804.c1.j1142691.k1152882.d182188878595064.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=314006270&selectedRatePlan=380046345&categorySearch=any_option&searchId=60a6b42e-b43b-44af-a668-54a0fbd95022',
      image: assetUrl('/assets/hotels/Pearl-Continental-Lahore.jpg'),
      showImage: true,
      description:
        'A flagship five-star property known for premium hospitality, executive facilities, and large event spaces.',
      facilities: ['Luxury Rooms & Suites', 'Restaurants & Coffee Lounge', 'Swimming Pool', 'Fitness Center'],
      contact: 'Reservations: +92 42 111 505 505',
      rating: '4.5/5'
    },
    {
      name: 'Ramada by Wyndham Lahore',
      location: 'Lahore, Punjab, Pakistan',
      rates: 'Business-friendly international chain pricing',
      offer: 'Comfort-focused stay packages with central access.',
      website: 'https://www.guestreservations.com/ramada-by-wyndham-lahore-gulberg-ii/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=318380766&msclkid=2639f60cc7641752938d9c426507dbb5&ctTriggered=true',
      image: assetUrl('/assets/hotels/Ramada-by-Wyndham-Lahore-Gulberg-II.jpg'),
      showImage: true,
      description:
        'An international-branded stay option designed for business travelers and families seeking modern comfort.',
      facilities: ['Comfort Rooms', 'All-Day Dining', 'Meeting Facilities', 'Wi-Fi Access'],
      contact: 'Reservations: +92 42 111 111 211',
      rating: '4.3/5'
    },
    {
      name: 'Hotel Indigo Lahore',
      location: 'Lahore, Punjab, Pakistan',
      rates: 'Boutique premium rates for curated city stays',
      offer: 'Lifestyle stay experience with modern interiors and city vibe.',
      website: 'https://indigoheights.com/',
      image: assetUrl('/assets/hotels/Hotel-Indigo.jpg'),
      showImage: true,
      description:
        'A contemporary boutique-style hotel brand experience offering design-led rooms and premium hospitality.',
      facilities: ['Designer Rooms', 'Signature Dining', 'Fitness Facilities', 'Business Services'],
      contact: 'Reservations: +92 42 111 111 111',
      rating: '4.4/5'
    },
    {
      name: 'Hotel One Gulberg Lahore',
      location: 'Lahore, Punjab, Pakistan',
      rates: 'Upper-midscale corporate and family packages',
      offer: 'Value-focused business stays in a prime Lahore district.',
      website: 'https://www.guestreservations.com/hotel-one-gulberg-lahore/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=318380766&msclkid=3d22881e8b211d72a380e25028093b5b',
      image: assetUrl('/assets/hotels/Hotel-One-Gulberg-Lahore.jpg'),
      showImage: true,
      description:
        'A trusted local hospitality brand known for practical comfort, business convenience, and central location.',
      facilities: ['Business-Friendly Rooms', 'Breakfast Service', 'Meeting Room', '24/7 Front Desk'],
      contact: 'Reservations: +92 42 111 111 563',
      rating: '4.2/5'
    },
    {
      name: 'Luxus Grand Hotel (LC)',
      location: 'Lahore, Punjab, Pakistan',
      rates: 'Executive and leisure stay rates',
      offer: 'City-center premium rooms with event-friendly access.',
      website: 'https://www.expedia.com/Lahore-Hotels-Luxus-Grand-Hotel.h16225098.Hotel-Information?chkin=2026-07-23&chkout=2026-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1783538679588&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2068&destination=Lahore%2C+Punjab%2C+Pakistan&destType=MARKET&selected=16225098&latLong=31.554606%2C74.357155&sort=RECOMMENDED&top_dp=50&top_cur=USD&semcid=US.UB.BING.PT-c-EN.HOTEL&semdtl=a1429012176.b11317216326895908.g1kwd-82326765629610%3Aloc-144.e1c.m1f413ae58b13f11ee7d78c41612f456b3.r17441980d01bf266109c2845e02c5e619d691d9360faf76d1fb0b3ff083f73b12.c1.j1142691.k1152882.d182326298507125.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=201690559&selectedRatePlan=208425873&categorySearch=any_option&searchId=b938991e-d9ee-47cd-a5b9-bfbbe22962a7',
      image: assetUrl('/assets/hotels/Luxus-Grand-Hotel.jpg'),
      showImage: true,
      description:
        'A modern luxury hotel in Lahore offering upscale rooms, contemporary dining, and premium guest services.',
      facilities: ['Premium Rooms', 'Restaurant & Cafe', 'Concierge Support', 'Airport Transfer Assistance'],
      contact: 'Reservations: +92 42 111 589 879',
      rating: '4.4/5'
    },
    {
      name: 'Nishat Hotel Lahore',
      location: 'Lahore, Punjab, Pakistan',
      rates: 'Premium luxury rates with lifestyle amenities',
      offer: 'High-end accommodation with shopping and dining proximity.',
      website: 'https://www.booking.com/hotel/pk/the-nishat.en-gb.html?aid=2276380&label=msn-G%2AualcbtRsY8_D6yMU0tng-80333218529225%3Atikwd-80333372562144%3Aloc-144%3Aneo%3Amte%3Alp142691%3Adec%3Acid578349423%3Aagid1285329581450391%3Aclkid91bc1c0fd2ae13842aa77641760a897b&sid=d2e80396e6c920f70a72e21ba196f068&all_sr_blocks=112449101_204759422_0_2_0_670390&checkin=2026-07-14&checkout=2026-07-15&dest_id=-2767043&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=112449101_204759422_0_2_0_670390&hpos=1&matching_block_id=112449101_204759422_0_2_0_670390&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=112449101_204759422_0_2_0_670390_3300000&srepoch=1783539000&srpvid=7c17890e04e000e0&type=total&ucfs=1&',
      image: assetUrl('/assets/hotels/Nishat.jpg'),
      showImage: true,
      description:
        'A luxury Lahore hospitality brand recognized for refined interiors, premium service standards, and prime locations.',
      facilities: ['Luxury Suites', 'Fine Dining', 'Spa & Wellness', 'Event and Meeting Spaces'],
      contact: 'Reservations: +92 42 111 647 428',
      rating: '4.6/5'
    }
  ]
}
