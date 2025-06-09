import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import chatgpt from '../../assets/veille/chatgpt-talk.mp4';
import chatgpt_teams from '../../assets/veille/chatgpt-teams.png';

const posts = [
    {
        id: 1,
        title: "ChatGPT se connecte à vos applications",
        date: "5 Juin 2025",
        author: "Poonam Soni",
        content: "ChatGPT peut maitenant avoir accès à Gmail, Teams, Outlook, Google Drive, Hubspot et bien plus !",
        tags: ["IA", "ChatGPT", "Google"],
        media: { type: 'image', url: 'https://pbs.twimg.com/media/Gsse8ngbAAAaLHc?format=jpg&name=medium', source: 'https://x.com/CodeByPoonam/status/1930670894621602006' }
    },
    {
        id: 2,
        title: "ChatGPT s'invite sur Teams",
        date: "5 Juin 2025",
        author: "Poonam Soni",
        content: "Le mode Record de ChatGPT est disponible sur MacOS seulement pour le moment ! Il permet de transcrire en direct ce que vous dites, mettre en forme, résumer, etc.",
        tags: ["IA", "ChatGPT", "Teams"],
        media: { type: 'image', url: chatgpt_teams, source: 'https://x.com/CodeByPoonam/status/1930670966323184112' }
    },
    {
        id: 3,
        title: "ChatGPT images can now talk.",
        date: "23 Mai 2025",
        author: "Angry Tom",
        content: "Bring your characters to life with voice, emotion, and perfectly timed script.",
        tags: ["IA", "Angry Tom", "Sécurité"],
        media: { type: 'video', url: chatgpt, source: 'https://x.com/AngryTomtweets/status/1925870052122722376' }
    }
];

// Fonction utilitaire pour nettoyer le HTML
function stripHtml(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

// Extraire le premier paragraphe significatif du HTML
function extractFirstParagraph(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const p = tmp.querySelector('p');
    if (p && p.textContent.trim().length > 0) {
        return p.textContent.trim();
    }
    // Sinon, fallback sur tout le texte brut
    return stripHtml(html).slice(0, 250) + '...';
}

// Extraire la première image du HTML
function extractFirstImage(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const img = tmp.querySelector('img');
    if (img && img.src) {
        return img.src;
    }
    return '';
}

function getExcerpt(text, maxLength = 250) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
}

const Veille_content = () => {
    const [rssPosts, setRssPosts] = useState([]);
    const [siteTitle, setSiteTitle] = useState('');

    useEffect(() => {
        const url = "https://rss-parser-lzjc.onrender.com/rss?url=https://rss.beehiiv.com/feeds/2R3C6Bt5wj.xml";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('RSS Response:', data);
                if (data?.rss?.channel?.item) {
                    setSiteTitle(data.rss.channel.title || '');
                    const items = Array.isArray(data.rss.channel.item) 
                        ? data.rss.channel.item 
                        : [data.rss.channel.item];
                    const formattedPosts = items.map((item, index) => {
                        const rawHtml = item['content:encoded'] || item.description || '';
                        const summary = extractFirstParagraph(rawHtml);
                        // Chercher une image dans les champs standards ou dans le HTML
                        let imageUrl = item.enclosure["@_url"] || '';
                        if (!imageUrl) {
                            imageUrl = extractFirstImage(rawHtml);
                        }
                        return {
                            id: index + 1,
                            siteTitle: data.rss.channel.title || '',
                            title: item.title || 'Sans titre',
                            link: item.link || '#',
                            date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('fr-FR') : 'Date inconnue',
                            author: item['dc:creator'] || item.author || "Auteur inconnu",
                            content: item.description || 'Aucun contenu disponible',
                            tags: ["RSS", "Tech"],
                            media: { 
                                type: 'image', 
                                url: imageUrl, 
                                source: item.link || '#' 
                            }
                        }
                    });
                    setRssPosts(formattedPosts);
                } else {
                    console.error('Format de données RSS invalide');
                    setRssPosts([]);
                }
            })
            .catch(error => {
                console.error('Error fetching RSS feed:', error);
                setRssPosts([]);
            });
    }, []);

    return (
        <div className="min-h-screen bg-black">
            <div className="max-w-9xl mx-auto">
                {/* Section Mes Préférences */}
                <div className="mb-20">
                    <h2 
                        className="veille-section-title-xl hidden xl:block text-5xl font-bold mb-8 px-6"
                        style={{ color: '#00BFFF', fontFamily: "'Fira Mono', monospace" }}
                    >
                        Mes Préférences
                    </h2>
                    <h2 
                        className="veille-section-title-lg hidden lg:block xl:hidden text-4xl font-bold mb-8 px-6"
                        style={{ color: '#00BFFF', fontFamily: "'Fira Mono', monospace" }}
                    >
                        Mes Préférences
                    </h2>
                    <h2 
                        className="veille-section-title-base lg:hidden text-3xl font-bold mb-8 px-6"
                        style={{ color: '#00BFFF', fontFamily: "'Fira Mono', monospace" }}
                    >
                        Mes Préférences
                    </h2>
                    <div className="mt-12 flex flex-col lg:flex-row lg:flex-wrap gap-8 justify-center p-6 md:p-0">
                        {posts.map(post => (
                            <div key={post.id} className="w-full lg:w-[30vw] xl:w-[31vw]">
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section Le Plus Récent */}
                <div>
                    <h2 
                        className="veille-section-title-xl hidden xl:block text-5xl font-bold mb-8 px-6"
                        style={{ color: '#00BFFF', fontFamily: "'Fira Mono', monospace" }}
                    >
                        Le Plus Récent
                    </h2>
                    <h2 
                        className="veille-section-title-lg hidden lg:block xl:hidden text-4xl font-bold mb-8 px-6"
                        style={{ color: '#00BFFF', fontFamily: "'Fira Mono', monospace" }}
                    >
                        Le Plus Récent
                    </h2>
                    <h2 
                        className="veille-section-title-base lg:hidden text-3xl font-bold mb-8 px-6"
                        style={{ color: '#00BFFF', fontFamily: "'Fira Mono', monospace" }}
                    >
                        Le Plus Récent
                    </h2>
                    <div className="mt-12 flex flex-col lg:flex-row lg:flex-wrap gap-8 justify-center p-6 md:p-0">
                        {rssPosts.length > 0 && rssPosts.slice(0, 9).map(post => (
                            <div key={post.id} className="w-full lg:w-[30vw] xl:w-[31vw]">
                                <PostCard post={post} />
                            </div>
                        ))}
                        {rssPosts.length === 0 && (
                            <div className="text-center text-red-500 text-lg font-semibold my-8">
                                Impossible de charger les articles du flux RSS. Veuillez réessayer plus tard.
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <style>{`
                .veille-section-title-xl {
                    overflow: hidden;
                    border-right: .15em solid #00BFFF;
                    white-space: nowrap;
                    margin: 0 auto;
                    letter-spacing: .12em;
                    animation:
                        typing-veille-section-xl 2.2s steps(20, end) 0.5s 1 normal both,
                        blink-caret-veille-section .75s step-end infinite;
                }
                .veille-section-title-lg {
                    overflow: hidden;
                    border-right: .15em solid #00BFFF;
                    white-space: nowrap;
                    margin: 0 auto;
                    letter-spacing: .12em;
                    animation:
                        typing-veille-section-lg 2.2s steps(20, end) 0.5s 1 normal both,
                        blink-caret-veille-section .75s step-end infinite;
                }
                .veille-section-title-base {
                    overflow: hidden;
                    border-right: .15em solid #00BFFF;
                    white-space: nowrap;
                    margin: 0 auto;
                    letter-spacing: .12em;
                    animation:
                        typing-veille-section-base 2.2s steps(20, end) 0.5s 1 normal both,
                        blink-caret-veille-section .75s step-end infinite;
                }
                @keyframes typing-veille-section-xl {
                    from { width: 0 }
                    to { width: 40% }
                }
                @keyframes typing-veille-section-lg {
                    from { width: 0 }
                    to { width: 60% }
                }
                @keyframes typing-veille-section-base {
                    from { width: 0 }
                    to { width: 90% }
                }
                @keyframes blink-caret-veille-section {
                    from, to { border-color: transparent }
                    50% { border-color: #00BFFF; }
                }
            `}</style>
        </div>
    );
};

export default Veille_content;