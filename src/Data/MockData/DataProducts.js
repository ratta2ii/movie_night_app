import { v4 } from 'uuid';
import screensImage from './../../Assets/Images/screens.jpg';
import soundImage from './../../Assets/Images/sound.jpg';
import giantScreenImage from './../../Assets/Images/giant-screen.jpg';
import popcornCart from './../../Assets/Images/product-popcorn5.jpg';
import cottonCandy from './../../Assets/Images/product-cotton-candy.jpg';
import tableChairs from './../../Assets/Images/productTable.jpg';
import hotdogCart from './../../Assets/Images/product-hotdog.png';
import completePackage from './../../Assets/Images/pool-image.JPG';
import backyardScreen from './../../Assets/Images/GalleryImages/gallery2.jpg';


export const masterProductList = [
    {
        title: 'Backyard Movie Screen',
        subTitle: "Dimensions 13'W X 11'H X 8'D (9'W X 5'H viewable)",
        id: v4(),
        productId: '1001',
        price: '279.00',
        mainImage: backyardScreen,
        description: 'This inflatable movie screen rental is perfect for backyards, smaller events or even in a gym.  Rent an inflatable movie night for a dive in party where the movie screen is next to your swimming pool.  Our outdoor movie screens are the perfect rental for Super Bowl, Gaming, Dance or even block parties.  Rent an outdoor movie screen today in Phoenix, Chandler, Gilbert and more.',
        bullets: ['HDTV Projector', 'Blu Ray DVD Player', '2 12" concert grade powered speakers', 'Multi-channel Mixer', 'Hookups for music, XBox, Playstation, Apple TV, Laptop etc.', 'Microphone available on request ($20)' ],
    },
    {
        title: 'Complete Package',
        subTitle: 'Subtitle goes here',
        id: v4(),
        productId: '1002',
        price: '499.00',
        mainImage: completePackage,
        key: 3,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum?',
        bullets: ["I am the first bullet", "And I am the second bullet", "And me likewise, the third", "And look it's me the fourth", "And why not a number five too, ehh"],
    },
    {
        title: 'Giant Screen Package',
        subTitle: 'Subtitle goes here',
        id: v4(),
        productId: '1003',
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
        subTitle: 'Subtitle goes here',
        id: v4(),
        productId: '1004',
        price: '149.00',
        mainImage: soundImage,
        key: 1,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga?',
        bullets: ["I am the first bullet", "And I am the second bullet", "And me likewise, the third", "And look it's me the fourth", "And why not a number five too, ehh"],
    },
    {
        title: 'Screens Only',
        subTitle: 'Subtitle goes here',
        id: v4(),
        productId: '1005',
        price: '499.00',
        mainImage: screensImage,
        key: 2,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga?',
        bullets: ["I am the first bullet", "And I am the second bullet", "And me likewise, the third", "And look it's me the fourth", "And why not a number five too, ehh"],
    },
    {
        title: 'Table and Chairs',
        subTitle: 'Subtitle goes here',
        id: v4(),
        productId: '1006',
        price: '499.00',
        mainImage: tableChairs,
        key: 5,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga?',
        bullets: ["I am the first bullet", "And I am the second bullet", "And me likewise, the third", "And look it's me the fourth", "And why not a number five too, ehh"],
    },
    {
        title: 'Popcorn Machine',
        subTitle: 'Subtitle goes here',
        id: v4(),
        productId: '1007',
        price: '49.00',
        mainImage: popcornCart,
        key: 4,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga?',
        bullets: ["I am the first bullet", "And I am the second bullet", "And me likewise, the third", "And look it's me the fourth", "And why not a number five too, ehh"],
    },
    {
        title: 'Hotdog Cart',
        subTitle: 'Subtitle goes here',
        id: v4(),
        productId: '1008',
        price: '499.00',
        mainImage: hotdogCart,
        key: 6,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga?',
        bullets: ["I am the first bullet", "And I am the second bullet", "And me likewise, the third", "And look it's me the fourth", "And why not a number five too, ehh"],
    },
    {
        title: 'Cotton Candy Machine',
        subTitle: 'Subtitle goes here',
        id: v4(),
        productId: '1009',
        price: '149.00',
        mainImage: cottonCandy,
        key: 7,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga?',
        bullets: ["I am the first bullet", "And I am the second bullet", "And me likewise, the third", "And look it's me the fourth", "And why not a number five too, ehh"],
    }
];


// Movie countdown video
// https://www.youtube.com/watch?v=uzRUWWa0nRo&list=PLG4em1_vDAGl7YZ2sIDv49mwWvNy8Owl7&index=41


export const tileData = [
    {
        img: screensImage,
        title: 'Image',
        author: 'author',
        cols: 5,
    },
    {
        img: soundImage,
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: popcornCart,
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: giantScreenImage,
        title: 'giantScreenImage',
        author: 'author',
        cols: 6,
        rows: 2,
    },
    {
        img: cottonCandy,
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: tableChairs,
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: hotdogCart,
        title: 'Image',
        author: 'author',
        cols: 6,
    },
    {
        img: completePackage,
        title: 'Image',
        author: 'author',
        cols: 6,
    },
];
