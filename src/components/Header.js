import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Image from './Image';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.8rem;
`;

const ImageWrapper = styled.div`
  max-width: 700px;
  width: 300%;
  padding-bottom: 20px;
`;

const Heading = styled.h1`
  margin-bottom: 0.3rem;
  margin-top: 0;
  font-size: 3rem;
`;

const Description = styled.p`
  margin-top: 0;
  opacity: 0.5;
  font-size: 1.1rem;
`;

const TitleAndDescription = ({data}) => {
  const title = data.site.siteMetadata.title;
  const description = data.site.siteMetadata.description;

  return (
    <HeaderWrapper>
      <Image name="logoImage" />
      <Heading>{title}</Heading>
      <Description>{description}</Description>
      <ImageWrapper>
        <Image name="MainImage" />
      </ImageWrapper>
    </HeaderWrapper>
  );
};

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  );
};

export default Header;