import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.8rem;
`;

const HeaderImage = styled.img`
  width: 205px;
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
      <HeaderImage
        src='https://user-images.githubusercontent.com/21834/34442516-fb1a1a3c-ecc2-11e7-8fe8-530435f22336.jpg'
        alt="Gatsby Logo"
      />
      <Heading>{title}</Heading>
      <Description>{description}</Description>
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