import React from 'react';
import PostCard from './PostCard';

const posts = [
    {
        id: 1,
        title: "Les tendances du développement web en 2024",
        date: "10 Mars 2024",
        author: "Pablo Schneider",
        content: "Le développement web continue d'évoluer avec l'émergence de nouveaux frameworks et outils. Les applications web progressives (PWA) gagnent en popularité, offrant une expérience native sur le web...",
        tags: ["Web", "Développement", "PWA"],
        media: { type: 'image', url: 'https://www.stereo-romance.com/images/pzuniga/2025/05/Stichgoogle.jpeg', source: 'https://www.google.com' }
    },
    {
        id: 2,
        title: "La cybersécurité : un enjeu majeur",
        date: "5 Mars 2024",
        author: "Pablo Schneider",
        content: "La cybersécurité devient de plus en plus cruciale dans notre monde numérique. Les attaques sophistiquées nécessitent des solutions innovantes et une vigilance constante...",
        tags: ["Sécurité", "Cybersécurité", "Protection"],
        media: { type: 'video', url: '../../src/assets/veille/chatgpt-talk.mp4', source: 'https://twitter.com/example' }
    },
    {
        id: 3,
        title: "La cybersécurité : un enjeu majeur",
        date: "5 Mars 2024",
        author: "Pablo Schneider",
        content: "La cybersécurité devient de plus en plus cruciale dans notre monde numérique. Les attaques sophistiquées nécessitent des solutions innovantes et une vigilance constante...",
        tags: ["Sécurité", "Cybersécurité", "Protection"],
        media: { type: 'video', url: '../../src/assets/veille/chatgpt-talk.mp4', source: 'https://twitter.com/example' }
    }
];

const Veille_content = () => {
    return (
        <div className="min-h-screen bg-black">
            <div className="max-w-9xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 justify-center p-6 md:p-0">
                    {posts.map(post => (
                        <div key={post.id} className="w-full lg:w-[30vw] xl:w-[31vw]">
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Veille_content;