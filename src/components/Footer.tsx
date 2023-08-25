import { styled } from "styled-components";

export default function Footer() {
  return (
    <div  style={{
      fontSize:'.75rem',
      marginTop:'2.375rem',
      color:'#8e8e8e',
    }}>
      <FooterText>Privacy Policy</FooterText>
      <FooterText className="ms-4"> Terms of Use</FooterText>
    </div>
  );
}

const FooterText = styled.span`
transition: all .3s ease-in-out;
cursor: pointer;
 &:hover{
  color: white;
  // font-weight: 600;
 }
`