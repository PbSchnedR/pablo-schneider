const PostCard = ({ post }) => {
    return (
        <div className="bg-[#16181c] border border-[#2f3336] rounded-2xl px-6 py-4 mb-6 max-w-2xl mx-auto shadow-sm transition hover:shadow-lg">
            {post.siteTitle && (
                <div className="text-xs text-gray-400 mb-1 font-medium">{post.siteTitle}</div>
            )}
            <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-white">{post.author}</span>
                <span className="text-gray-400 text-xs">· {post.date}</span>
            </div>
            <div className="mb-2">
                {post.link ? (
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-lg font-bold hover:underline">
                        {post.title}
                    </a>
                ) : (
                    <span className="text-white text-base font-semibold">{post.title}</span>
                )}
            </div>
            <div className="mb-3">
                <span className="text-gray-300 text-sm leading-relaxed">{post.content}</span>
            </div>
            {post.media && post.media.type === 'image' && post.media.url && (
                <div className="my-3">
                    <img
                        src={post.media.url}
                        alt={post.title}
                        className="rounded-xl w-full max-h-80 object-cover border border-[#2f3336]"
                    />
                </div>
            )}
            {post.media && post.media.type === 'video' && (
                <div className="my-3">
                    <video
                        className="rounded-xl w-full max-h-80 object-cover border border-[#2f3336] bg-black"
                        autoPlay
                        muted
                        loop
                    >
                        <source src={post.media.url} type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture vidéo.
                    </video>
                </div>
            )}
            <div className="flex flex-wrap items-center gap-2 mt-2 w-full">
                <div className="flex flex-wrap gap-2 flex-grow">
                    {post.tags && post.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-[#22314a] text-blue-400 rounded-full text-xs font-mono"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
                {post.media?.source && (
                    <a
                        href={post.media.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#1DA1F2] text-white rounded-full text-sm font-medium hover:bg-[#1a8cd8] transition-colors ml-auto"
                        style={{ whiteSpace: 'nowrap' }}
                    >
                        En savoir plus
                    </a>
                )}
            </div>
        </div>
    );
};

export default PostCard;
