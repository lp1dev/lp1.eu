(function() {
    'use strict'

    var _contacts = [
        {
            index: 0,
            title: 'Github',
            img: 'res/github.svg',
            url: 'https://github.com/lp1dev'
        },{
            index: 1,
            title: 'LinkedIn',
            img: 'res/linkedin.svg',
            url: 'https://www.linkedin.com/in/jérémie-amsellem-b9220168/'
        },{
            index: 2,
            title: 'Twitter',
            img: 'res/twitter.svg',
            url: 'https://twitter.com/lp1eu'
        },{
            index: 3,
            title: 'Mail',
            img: 'res/gmail.svg',
            url: 'mailto:mail@lp1.eu'
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
            title: 'Blog',
            url: 'https://medium.com/@lp1'
        },{
            index: 3,
            title: 'Photos'
        }
    ]

    var _photos = []

    for (var i = 10; i < 30; i++) {
        _photos.push({
            asBackground: "background-image: url('https://lp1.eu/public/photos_dublin/thumbs/photo" + i + ".png')",
            url: 'https://lp1.eu/public/photos_dublin/photo' + i + '.png'
        });
    }
    
    var _projects =  [
        {
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
        }
    ]
    
    var app = new Vue({
        el: '#app',
        data: {
            page: 0,
            avatar: '/res/img/avatar2016.png',
            baseline: '<article class="pa3 pa5-ns"><h1 class="f2">Hiya! I\'m Jeremie</h1><h2>full stack web/mobile developer passionate about music, films, analog photography and among other topics InfoSec.</h2>' +
                '<p class="measure lh-copy">I am currently working with the lovely <a href="https://bepatient.com">bepatient</a> team on their Ionic iOS and Android apps. I\ love to travel and take pictures of everything I come across, I\'m actually living in Paris.</p></article>',
            contacts: _contacts,
            links: _links,
            photos: _photos,
            projects: _projects
        }
    })
})()
