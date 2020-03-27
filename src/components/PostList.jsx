import React from 'react';
import PostItem from './PostItem';

function PostList(props){
    const{posts}=props;

    return(
        <div>
            <p>Lista postarilor:</p>
                {posts.map((post, index) => {
                    return <PostItem
                        userID={post.userId}
                        title={post.title}
                        body={post.body}
                        id={post.id}
                        key={ index }
                    />
                })}
        </div>
    )
}

export default PostList;