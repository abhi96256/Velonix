import Castrol2 from '../assets/Castrol2.jpg';
import Castrol3 from '../assets/Castrol3.jpg';
import CastrolM1 from '../assets/castrol/M1.png';
import CastrolM2 from '../assets/castrol/M2.png';
import CastrolM3 from '../assets/castrol/M3.png';
import Servo1 from '../assets/servoo/Servo1.png';
import Servo2 from '../assets/servoo/Servo2.png';
import Servo3 from '../assets/servoo/Servo3.png';
import Servo4 from '../assets/servoo/Servo4.png';
import Motul1 from '../assets/Motul/Motul 10w 30.png';
import Motul2 from '../assets/Motul/Motul 3000 10w 30.png';
import Motul3 from '../assets/Motul/Motul C.N.G 20w 40.png';
import Motul4 from '../assets/Motul/motul run.png';
import Motul5 from '../assets/Motul/Motul3000 10w 37.png';
import Motul6 from '../assets/Motul/Motul3000 20w 40.png';
import Hp1 from '../assets/Hp/Hp 4t racer.png';
import Hp2 from '../assets/Hp/Hp splendid 20w 40.png';
import Hp3 from '../assets/Hp/Hp splendid 10w 30.png';
import Hp4 from '../assets/Hp/Hp lal ghoda.png';

const baseProducts = [
  {
    id: 1,
    name: 'Castrol 5W-30 Fully Synthetic',
    category: 'Engine Oils',
    brand: 'Castrol',
    image: CastrolM1,
    images: [CastrolM1, Castrol2, Castrol3],
    description: 'API SN/CF, ACEA A5/B5 — delivers superior wear protection and fuel efficiency for modern petrol engines.',
    price: '₹699',
  },
  {
    id: 2,
    name: 'Castrol 10W-40 Semi-Synthetic',
    category: 'Engine Oils',
    brand: 'Castrol',
    image: CastrolM2,
    images: [CastrolM2, Castrol2],
    description: 'Versatile protection for petrol and diesel vehicles with enhanced detergency for cleaner engines.',
    price: '₹599',
  },
  {
    id: 3,
    name: 'HP 4T Racer Engine Oil',
    category: 'Engine Oils',
    brand: 'HP',
    image: Hp1,
    images: [Hp1],
    description: 'High-performance 4T racing engine oil for motorcycles with superior protection and performance.',
    price: '₹449',
  },
  {
    id: 4,
    name: 'Castrol ATF Dex III',
    category: 'ATF',
    brand: 'Castrol',
    image: CastrolM3,
    images: [CastrolM3, Castrol2],
    description: 'Automatic transmission fluid for smoother shifts and long drain performance.',
    price: '₹549',
  },
  {
    id: 5,
    name: 'Gear Oil 80W-90',
    category: 'Gear Oils',
    brand: 'Servo',
    image: Servo3,
    images: [Servo3, Servo4],
    description: 'High-load EP gear oil for manual transmissions and differentials.',
    price: '₹499',
  },
  {
    id: 6,
    name: 'HP Splendid 20W-40 Engine Oil',
    category: 'Engine Oils',
    brand: 'HP',
    image: Hp2,
    images: [Hp2],
    description: 'Premium HP Splendid 20W-40 engine oil for heavy-duty engines and commercial vehicles.',
    price: '₹399',
  },
  {
    id: 7,
    name: 'HP Splendid 10W-30 Engine Oil',
    category: 'Engine Oils',
    brand: 'HP',
    image: Hp3,
    images: [Hp3],
    description: 'Advanced HP Splendid 10W-30 engine oil for modern engines with excellent fuel efficiency.',
    price: '₹459',
  },
  {
    id: 8,
    name: 'Servo Engine Oil - Variant 2',
    category: 'Engine Oils',
    brand: 'Servo',
    image: Servo2,
    images: [Servo2],
    description: 'High performance Servo lubricant.',
    price: '₹599',
  },
  {
    id: 9,
    name: 'Servo Engine Oil - Variant 3',
    category: 'Engine Oils',
    brand: 'Servo',
    image: Servo3,
    images: [Servo3],
    description: 'High performance Servo lubricant.',
    price: '₹599',
  },
  {
    id: 10,
    name: 'Servo Engine Oil - Variant 4',
    category: 'Engine Oils',
    brand: 'Servo',
    image: Servo4,
    images: [Servo4],
    description: 'High performance Servo lubricant.',
    price: '₹599',
  },
  // All Motul products
  {
    id: 11,
    name: 'Motul 10W-30 Engine Oil',
    category: 'Engine Oils',
    brand: 'Motul',
    image: Motul1,
    images: [Motul1],
    description: 'High performance Motul 10W-30 engine oil for superior engine protection.',
    price: '₹799',
  },
  {
    id: 12,
    name: 'Motul 3000 10W-30',
    category: 'Engine Oils',
    brand: 'Motul',
    image: Motul2,
    images: [Motul2],
    description: 'Premium Motul 3000 series 10W-30 engine oil.',
    price: '₹849',
  },
  {
    id: 13,
    name: 'Motul C.N.G 20W-40',
    category: 'Engine Oils',
    brand: 'Motul',
    image: Motul3,
    images: [Motul3],
    description: 'Specialized Motul oil for CNG engines with enhanced protection.',
    price: '₹899',
  },
  {
    id: 14,
    name: 'Motul Run Engine Oil',
    category: 'Engine Oils',
    brand: 'Motul',
    image: Motul4,
    images: [Motul4],
    description: 'Motul Run series engine oil for daily driving performance.',
    price: '₹749',
  },
  {
    id: 15,
    name: 'Motul 3000 10W-37',
    category: 'Engine Oils',
    brand: 'Motul',
    image: Motul5,
    images: [Motul5],
    description: 'Advanced Motul 3000 series 10W-37 engine oil.',
    price: '₹879',
  },
  {
    id: 16,
    name: 'Motul 3000 20W-40',
    category: 'Engine Oils',
    brand: 'Motul',
    image: Motul6,
    images: [Motul6],
    description: 'Heavy-duty Motul 3000 series 20W-40 engine oil.',
    price: '₹929',
  },
  {
    id: 17,
    name: 'HP Lal Ghoda Engine Oil',
    category: 'Engine Oils',
    brand: 'HP',
    image: Hp4,
    images: [Hp4],
    description: 'Classic HP Lal Ghoda engine oil for traditional engines with reliable protection.',
    price: '₹379',
  },
  {
    id: 18,
    name: 'Castrol Edge 0W-20',
    category: 'Engine Oils',
    brand: 'Castrol',
    image: Castrol2,
    images: [Castrol2, Castrol3],
    description: 'Ultra-low viscosity Castrol Edge for modern fuel-efficient engines.',
    price: '₹899',
  },
  {
    id: 19,
    name: 'Castrol Magnatec 5W-30',
    category: 'Engine Oils',
    brand: 'Castrol',
    image: Castrol3,
    images: [Castrol3, Castrol2],
    description: 'Castrol Magnatec with intelligent molecules for superior engine protection.',
    price: '₹799',
  },
];

const products = [...baseProducts];

export default products; 