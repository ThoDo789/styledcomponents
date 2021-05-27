import styled from 'styled-components';
import {Link} from 'react-scroll';
export const Button = styled(Link)`
      border-radius  :50px ;
      background: ${({primary})=>(primary ? '#01BF71':'#010606')};
      white-space: nowrap;
      padding: ${({big})=>(big ? '14px 18px' : '12px 38px')};
      color : ${({dark})=>(dark ? "#010606" :'#fff')};
      font-size: ${({fontBig})=>(fontBig ? "20px" :'16px')};
      outline: none;
      border:none;
      display: flex;
      justify-content: center;
      align-items: center;
      transition:  all .2s ease-in-out;
      cursor: pointer;
      &:hover{
          transition: all .2s ease-in-out;
          background: ${({primary})=>(primary ?'#fff' :"#010606")};
         
      }
`