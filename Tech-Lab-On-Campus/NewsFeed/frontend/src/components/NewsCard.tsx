import Link from "next/link";
import { Article } from "@/utils/types";

interface NewsCardProps {
    article: Article;
}


function NewsCard({ article }: NewsCardProps) {
    // PART 2: Create a reusable news card to use with general stories

    // Similar to Part 1, create a component that displays:
    // 1. The article's image
    // 2. The article's title,
    // 3. A truncated version of the article's body

    // This component should be reusable to populate all stories on the news page.

    // Once completing this part, you should be able to see a few test articles on
    // the right side of the screen.

    // Hint: Some classes in `globals.css` could help with styling

    return (
        <>
            <div className="news-card">
            <span className='story-title'>{article.title}</span>
            <br />
            <p className='story-summary'>{article.body}</p>
            <br />
            <img
                className='news-img'
                src={article.image_url}
            />
            </div>
        </>
    );
}

export default NewsCard;
