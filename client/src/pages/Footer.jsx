import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width:70vw;
  margin:auto;

   @media screen and (max-width:700px){
    flex-direction: column;
    align-items: center;
    padding: 1rem;
   }
`;

const FooterContent = styled.div`
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: #555;
`;

const FooterLinks = styled.div`
  margin-top: 15px;

  a {
    color: #007bff;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 15px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </FooterLinks>
        <ContactInfo>
          <p>Contact us: info@yourfinancialplatform.com</p>
          <p>123 Main Street, Cityville, Country</p>
        </ContactInfo>
      </FooterContent>
        <FooterText>&copy; 2023 Your Financial Assistance Platform. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
