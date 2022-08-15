import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: black;
  position: relative;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`; 
   
export const Row = styled.div`
    @media only screen and (min-width:568px){
        display: grid;
        grid-template-columns: repeat(auto-fill, 
                                minmax(185px, 1fr));
        grid-gap: 20px;
        
    }
    @media only screen and (min-width:992px){
        grid-template-columns: 200px 200px auto 200px;
        grid-gap: 20px;
      
    }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;