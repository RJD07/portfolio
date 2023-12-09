import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */


/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: " Rondel",
    lastName: " John Decano",
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Philippines'
        },
        {
            emoji: "💼",
            text: "Freelance Web Developer"
        },
        {
            emoji: "📧",
            text: "decanorondel@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/rjdd16",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/?hl=en",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/RJD07",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/rondel-john-decano-041a511a6/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
   
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello, My name is Rondel. I am a Freelance Web Developer. Over the years, I've had the opportunity to Developing Websites and Graphic Designs.  I am excited to connect with all of you, share experiences, and contribute to the wonderful discussions we're about to have. Hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'next', 'typescript', 'git', 'github', 'bootstrap', 'tailwind', 'sass', 'html5', 'css3',  'figma', 'canva'],
            exposedTo: ['java', 'nodejs', 'prisma', 'mongodb', 'sql', 'adobe illustrator', 'adobe photoshop', 'adobe premier' , 'adobe XD']
        }
    ,
    hobbies: [
        {
            label: 'gaming',
            emoji: '🕹️'
        },
        {
            label: 'music',
            emoji: '🎵'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Music Heads",
            live: "https://musicheads-five.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/RJD07/musicheads", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Pub",
            live: "https://pubsocial.vercel.app/",
            source: "https://github.com/RJD07/pubsocial",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}