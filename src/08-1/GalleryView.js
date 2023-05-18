import GalleryArticle from "./GalleryArticle";

const GalleryView = ({ content }) => {
    console.log('GalleryView', content);

    const tags = [];
    for (let i = 0; i < content.length; i += 2) {
        console.log(i);
        tags.push(
            <div className="grid" key={'div' + i}>
                <GalleryArticle item={content[i]} />
                {(i + 1 < content.length) && <GalleryArticle item={content[i + 1]} />}
            </div>
        )
    }

    return (
        <article>
            {tags}
        </article>
    );
}

export default GalleryView;