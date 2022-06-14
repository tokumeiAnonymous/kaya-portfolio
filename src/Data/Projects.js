const web = [
    {
        id: 0,
        name: 'Meme Builder',
        img: './ProjectImage/meme-builder.png',
        description: `This is a meme builder where
        you can create multiple textboxes and
        place them within the image.`,
        live: 'https://tokumeianonymous.github.io/meme-builder/',
        code: 'https://github.com/tokumeiAnonymous/meme-builder'
    },
    {
        id: 1,
        name: 'The North Remembers',
        img: './ProjectImage/memory-game.png',
        description: `A simple memory game app using Game of thrones 
        Honorable houses and Respectable groups.`,
        live: 'https://tokumeianonymous.github.io/memory-game/',
        code: 'https://github.com/tokumeiAnonymous/memory-game'
    },
    {
        id: 2,
        name: 'Shopp-e',
        img: './ProjectImage/shopping-cart.png',
        description: `A shoping with add to cart up to check-out 
        functionality. Built as an introduction to react router.`,
        live: 'https://tokumeianonymous.github.io/shopping-cart/',
        code: 'https://github.com/tokumeiAnonymous/shopping-cart'
    },
    {
        id: 3,
        name: 'Todoways',
        img: './ProjectImage/to-do-list.png',
        description: `A to-do-list app that stores your todo's in
        your local storage. Built as an introduction to webpack.`,
        live: 'https://tokumeianonymous.github.io/to-do-list/',
        code: 'https://github.com/tokumeiAnonymous/to-do-list'
    },
    {
        id: 4,
        name: 'CV Generator',
        img: './ProjectImage/cv-project.png',
        description: `A dynamic cv generator where your changes updates
        the generated cv in real time. Built using react.`,
        live: 'https://tokumeianonymous.github.io/cv-project/',
        code: 'https://github.com/tokumeiAnonymous/cv-project'
    }
]

const mobile = [
    {
        id: 0,
        name: 'Project Tracker*',
        img: './ProjectImage/project-tracker.png',
        description: `A project progress tracking app. Mark
        task done and see your progress. Built using react-native.`,
        live: 'https://tokumeianonymous.github.io/project-tracker-native/',
        code: 'https://github.com/tokumeiAnonymous/project-tracker-native'
    }
]

const game = [
    {
        id: 0,
        name: 'Tower Defence*',
        img: './ProjectImage/tower-defence.png',
        description: `A tower defence game built using unity.
        Some of the models are created using blender.`,
        live: 'https://tokumeianonymous.github.io/tower-defence/',
        code: 'https://github.com/tokumeiAnonymous/tower-defence'
    }
]

const Projects = [
    {
        name: 'web',
        data: web,
        isActive: true
    },
    {
        name: 'mobile',
        data: mobile,
        isActive: false
    },
    {
        name: 'game',
        data: game,
        isActive: false
    }
]

export default Projects;