(function() {
    'use strict'
    
    var _contacts = [
        {
            index: 0,
            title: 'Github',
            img: 'res/svg/clear/github.svg',
            url: 'https://github.com/lp1dev'
        },{
            index: 1,
            title: 'LinkedIn',
            img: 'res/svg/clear/linkedin.svg',
            url: 'https://www.linkedin.com/in/jérémie-amsellem-b9220168/'
        },{
            index: 2,
            title: 'Twitter',
            img: 'res/svg/clear/twitter.svg',
            url: 'https://twitter.com/lp1eu'
        },{
            index: 3,
            title: 'Mail',
            img: 'res/svg/clear/gmail.svg',
            url: 'mailto:mail@lp1.eu'
        },
        {
            index: 4,
            title: 'Malt',
            img: 'res/svg/malt.svg',
            url: 'https://www.malt.fr/profile/jeremieamsellem'
        }
    ]

    var _links = [
        {
            index: 0,
            title: 'Home'
        },{
            index: 1,
            title: 'Projects'
        },{
            index: 2,
            title: 'Contact'
        },{
            index: 3,
            title: 'Blog',
            url: 'https://medium.com/@lp1'
        },{
            index: 4,
            title: 'Photos'
        },{
            index: 5,
            title: 'Online Agenda',
            url: 'https://calendar.google.com/calendar/embed?src=ln9o58pd5hbhdue5mqjh3t9hbs%40group.calendar.google.com&ctz=Europe%2FParis'
        }
        
    ]

    var _photos = []

    for (var i = 10; i < 30; i++) {
        _photos.push({
            asBackground: "background-image: url('https://lp1.eu/public/photos_dublin/thumbs/photo" + i + ".jpg')",
            url: 'https://lp1.eu/public/photos_dublin/photo' + i + '.png'
        })
    }
    
    var _projects =  [
        {
            title: 'Surfboard',
            description: 'A web MAO tool using the new web MIDI and web Audio APIs. Build for the ROLI (Ltd.) Seaboard but compatible with any MIDI keyboard as an input.',
            img: 'https://raw.githubusercontent.com/lp1dev/Surfboard/master/screens/screen1.png',
            link: {
                url: 'https://github.com/lp1dev/Surfboard',
                name: 'GitHub'
            }
        },
        {
            title: 'On-Air',
            description: "On-Air.io is a Web Application. More precisely it's a LiveStream app. A unique stream where anyone can participate anonymously as the host or as a viewer. It's quite simple, if no one's hosting, can click the 'GO LIVE' button and start your own broadcast! People can react through the chat, anonymously aswell.",
            img: 'https://cloudinary-a.akamaihd.net/hopwork/image/upload/w_1024,c_limit,dpr_2/oaxhw4qzll3cubht78go.jpg',
            link: {
                url: 'https://on-air.io',
                name: 'Website'
            }
        },
        {
            title: 'Akros',
            description: 'Akros is an under development PC (Windows/Linux) parkour/urbex game made for speedrun/racing enthusiasts. Finish the level as fast as you can and make it to the leaderboard!',
            img: 'https://akros.fr/assets/screen2.png',
            link: {
                url: 'https://akros.fr',
                name: 'Website'
            }
        },
        {
            title: 'DPG for Android',
            description: 'DPG is a deterministic password generator that does not store data or keep state. Its output is based purely on user input. It is a safe and privacy-oriented alternative to the password managers storing your data on your local device or on their servers. I have used w8rbt\'s version as a base and made a Kotlin (<3) implementation.',
            img: 'https://raw.githubusercontent.com/lp1dev/dpg-android/master/app/src/main/res/web_hi_res_512.png',
            link: {
                url: 'https://github.com/lp1dev/dpg-android',
                name: 'Github'
            }
        },{
            title: 'Tinted Glass - Webcam usage notifier',
            description: 'After watching the "Shut up and dance" episode of Black Mirror, I felt like it might be useful to have a software to notify you whenever an access is made to your webcam. That is what tinted glass does, it is a GNU/Linux daemon watching the webcam and using notify_send to notify you whenever a process opens it',
            img: 'https://raw.githubusercontent.com/lp1dev/tinted-glass-webcam-notifier/master/demo/anim.gif',
            link: {
                url: 'https://github.com/lp1dev/tinted-glass-webcam-notifier',
                name: 'Github'
            }
        },{
            title: 'Bubble time',
            description: 'A cute ReactJS game made with @cloSpa during the ReactRiot hackaton.The idea came to us with bubblewrap. Bubbles are piling up and you need to pop them fast enough so that they don\'t reach the top of your board. Just like with bubblewrap, some bubbles are more difficult than others to pop, you\'ll need to be tenacious. However, beware of the pink bubbles! You shouldn\'t touch them if you want to survive.',
            img: 'https://s3.amazonaws.com/hackbit/screenshots/reactriot2017/397de4494b97976c68a1c2fff54608b5/1498504479/v800_Capture_du_2017-06-26_23-22-07.png',
            link: {
                url: 'https://gentle-castle-67700.herokuapp.com',
                name: 'Play'
            }
        },{
            title: 'Diorama - Sherlock Holmes',
            description: 'The dioramas project is a set of 3D scenes inspired from the environment of fictional characters I like, the last one is one of the most famous flat in english litterature : 221b Baker Street. This model has been highly inspired from the BBC\'s show Sherlock. Cute Icon by Clement Branger (licence CC Attribution 3.0)',
            img: 'res/svg/sherlock.svg',
            link: {
                url: 'https://sketchfab.com/models/753e92b284464c94ad89206c269d104b',
                name: 'Explore in 3D'
            }
        }
    ]

    var app = new Vue({
        el: '#app',
        data: {
            page: 0,
            avatar: 'https://pbs.twimg.com/profile_images/903346056682930177/IBMI77sh_400x400.jpg',
            baseline: '<h1 class="comfortaa">Hiya! I\'m Jeremie</h1><h2 class="raleway">Ethical hacker / developer passionate about music, cinema, photography and among other topics InfoSec.</h2>' +
                '<h2 class="raleway">I\'m fluent in Python, JavaScript, TypeScript and like to work on Kotlin, C# and Java projects too!</h2>' +
                '<p class="measure lh-copy raleway">I am currently working as a freelance web and mobile developer/instructor, mostly with French clients on <a href="https://www.malt.fr/profile/jeremieamsellem">Malt</a>, <br/>but feel free to contact me if you\'re living abroad! I mostly work remotely anyway.<br/>I love to travel and take pictures of everything I come across, I\'m currently living in Paris, but it\'s prone to change.</p>',
            contacts: _contacts,
            links: _links,
            photos: _photos,
            projects: _projects,
        }
    })
})()
