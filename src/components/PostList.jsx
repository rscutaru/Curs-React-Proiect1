import React from 'react';
import PostItem from './PostItem';

function PostList(props) {
    const { posts } = props;

    return(
        <div>
            <p>Lista postarilor:</p>
                { posts.map((pos, index) => {
                    return <PostItem
                        userId={ pos.userId }
                        title={ pos.title }
                        body={ pos.body }
                        id={ pos.id }
                        key={ index }
                    />
                })}
        </div>
    )
}

export default PostList;