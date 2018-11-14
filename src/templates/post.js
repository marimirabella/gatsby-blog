import React from 'react';
import styled from 'styled-components';

const BlogPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50%;
  }
`;

const PostFetcher = (props) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(<PostTemplate {...props} />);
    }, 3000);
  });
};

const PostHandler = (fetcher) => {
  let ref, task;
  return (props) => {
      task = fetcher(props);
      task.then(res => {
        ref = res;
      });
      if (ref) return ref;
      else throw task;
  }
};

const PostTemplate = ({ html }) => {
  return (
    <BlogPost
      dangerouslySetInnerHTML={{__html: html}}>
    </BlogPost>
  );
};

export default PostHandler(PostFetcher);
