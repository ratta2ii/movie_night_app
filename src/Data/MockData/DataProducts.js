import { v4 } from 'uuid';
import screensImage from './../../Assets/Images/screens.jpg';
import soundImage from './../../Assets/Images/sound.jpg';
import giantScreenImage from './../../Assets/Images/giant-screen.jpg';
import popcornCart from './../../Assets/Images/product-popcorn5.jpg';
import cottonCandy from './../../Assets/Images/product-cotton-candy.jpg';
import tableChairs from './../../Assets/Images/productTable.jpg';
import hotdogCart from './../../Assets/Images/product-hotdog.png';
import completePackage from './../../Assets/Images/pool-image.JPG';


export const masterProductList = [
    {
        title: 'Complete Package',
        id: v4(),
        productId: '0',
        price: '499.00',
        mainImage: completePackage,
        key: 3,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum?',
        bullets: ["I am the first bullet", "And I am the second bullet", "And me likewise, the third", "And look it's me the fourth", "And why not a number five too, ehh"],
    },
    {
        title: 'Giant Screen Package',
        id: v4(),
        productId: '1',
        key: 0,
        price: '695.00',
        mainImage: giantScreenImage,
        size: 'Actual Size: 23\'W X 16\'H X 15"L',
        description: 'Bring the BIG screen to your backyard or outdoor party! Entertain your guests at your next outdoor presentation!',
        ideas: 'Outdoor Movie Screen Party Ideas: Backyard Movie, Super Bowl Party, Video Game Tournament, Dance Party, PowerPoint presentations, Outdoor Fundraisers, Poolside Movie, Block Party, Drive In Movie, Corporate Events, Holiday Events, Premiere Events, Outdoor Grad Nights, Movie in the Park, Dive In Movie.',
        bullets: ['Inflatable Screen', 'Concert Grade Mackie or QSC 12\' High Powered Speakers', '3600-4600 lumen Projector', 'Blu Ray DVD Player', 'Set up and Tear Down of all rented equipment', 'Viewable Screen Dimensions 16\'W X 9\'H  (actual dimensions 23\'W X 16\'H X 15"L)', 'Professional Staff for your event']
    },
    {
        title: 'Sound Equipment',
        id: v4(),
        productId: '2',
        price: '149.00',
        mainImage: soundImage,
        key: 1,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga?',
        bullets: ["I am the first bullet", "And I am the second bullet", "And me likewise, the third", "And look it's me the fourth", "And why not a number five too, ehh"],
    },
    {
        title: 'Screens Only',
        id: v4(),
        productId: '3',
        price: '499.00',
        mainImage: screensImage,
        key: 2,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga?',
        bullets: ["I am the first bullet", "And I am the second bullet", "And me likewise, the third", "And look it's me the fourth", "And why not a number five too, ehh"],
    },
    {
        title: 'Table and Chairs',
        id: v4(),
        productId: '4',
        price: '499.00',
        mainImage: tableChairs,
        key: 5,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga?',
        bullets: ["I am the first bullet", "And I am the second bullet", "And me likewise, the third", "And look it's me the fourth", "And why not a number five too, ehh"],
    },
    {
        title: 'Popcorn Machine',
        id: v4(),
        productId: '5',
        price: '49.00',
        mainImage: popcornCart,
        key: 4,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga?',
        bullets: ["I am the first bullet", "And I am the second bullet", "And me likewise, the third", "And look it's me the fourth", "And why not a number five too, ehh"],
    },
    {
        title: 'Hotdog Cart',
        id: v4(),
        productId: '6',
        price: '499.00',
        mainImage: hotdogCart,
        key: 6,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga?',
        bullets: ["I am the first bullet", "And I am the second bullet", "And me likewise, the third", "And look it's me the fourth", "And why not a number five too, ehh"],
    },
    {
        title: 'Cotton Candy Machine',
        id: v4(),
        productId: '7',
        price: '149.00',
        mainImage: cottonCandy,
        key: 7,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga?',
        bullets: ["I am the first bullet", "And I am the second bullet", "And me likewise, the third", "And look it's me the fourth", "And why not a number five too, ehh"],
    }
];

// Movie countdown video
// https://www.youtube.com/watch?v=uzRUWWa0nRo&list=PLG4em1_vDAGl7YZ2sIDv49mwWvNy8Owl7&index=41
