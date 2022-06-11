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
        Honorable houses and Respectable groups`,
        live: 'https://tokumeianonymous.github.io/memory-game/',
        code: 'https://github.com/tokumeiAnonymous/memory-game'
    },
    {
        id: 2,
        name: 'Shopp-e',
        img: './ProjectImage/shopping-cart.png',
        description: `A shoping cart asdf asdf asdf
        asdf aasdf`,
        live: 'https://tokumeianonymous.github.io/shopping-cart/',
        code: 'https://github.com/tokumeiAnonymous/shopping-cart'
    }
]

const mobile = [
    {
        id: 0,
        name: 'Test 1',
        img: './ProjectImage/meme-builder.png',
        description: `This is a meme builder where
        you can create multiple textboxes and
        place them within the image.`,
        live: 'https://tokumeianonymous.github.io/meme-builder/',
        code: 'https://github.com/tokumeiAnonymous/meme-builder'
    }
]

const game = [
    {
        id: 0,
        name: 'Test 2',
        img: './ProjectImage/meme-builder.png',
        description: `This is a meme builder where
        you can create multiple textboxes and
        place them within the image.`,
        live: 'https://tokumeianonymous.github.io/meme-builder/',
        code: 'https://github.com/tokumeiAnonymous/meme-builder'
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