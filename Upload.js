//Select the database to use.
use('ReactBackendProject');

// Insert a few documents into the PortfolioData collection.
db.getCollection('projects').insertMany(
    [
        {
            id: 1,
            image: IMG1,
            title:'Digital clothing',
            github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
            demo:'https://dribbble.com/tags/webdesign'
        
          },
        
           {
            id: 2,
            image: IMG2,
            title:'future savings',
            github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
            demo:"https://dribbble.com/tags/webdesign"
        
          } ,
          {
            id: 3,
            image: IMG3,
            title:'Design system',
            github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
            demo:"https://dribbble.com/tags/webdesign"
        
          },
           {
            id: 4,
            image: IMG4,
            title:'look beyond limits',
            github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
            demo:"https://dribbble.com/tags/webdesign"
        
          } ,
          {
            id: 1,
            image: IMG5,
            title:'Digital art guide',
            github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
            demo: "https://dribbble.com/tags/webdesign"
        
          },
           
          {
            id: 1,
            image: IMG6,
            title:'perfomance pltform',
            github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
            demo:"https://dribbble.com/tags/webdesign"
        
          },
]
);

// Insert a few documents into the PortfolioData collection.
// db.getCollection('testimonials').insertMany(
//  [{
   // avatar: AVTR1,
   // name: "Ekema Ashley",
   // review:
    //  "I was so happy with the photos that kelly took of my wedding. she captured the day perfectly and I will cherish him forever.",
 // },
 // {
  //  avatar: AVTR2,
   // name: "Brenda",
  //  review:
   //   "kelly is a true artist. He has a great eye for composition and lighting, and she knows how to capture the beauty in every moment.",
 // },
  //{
   // avatar: AVTR3,
    //name: "Malando Tina",
   // review:
   //   "I was very happy with the work that kelly did on my website. she was able to take my vision and turn it into a reality. The website is exactly what I wanted and it looks great. I would definitely recommend HarryShots to anyone who is looking for a web developer.",
 // },
 // {
   // avatar: AVTR4,
  //  name: "Makoun Glory",
  //  review:
   //   "kelly was very easy to work with. He was always responsive to my feedback and she was always willing to make changes to the content until I was happy with the results.",
 // },
      
//       ]
// );