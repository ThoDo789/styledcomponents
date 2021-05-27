import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const SidebarContainer = styled.aside`
            position: fixed;
            z-index:999;
            width:100%;
            height: 100%;
            background: #0d0d0d;
            display: grid;
            align-items: center;
            top:0;
            left:0;
            transition:.3s ease-in-out;
            opacity: ${({isOpen})=>(isOpen ? '100%' : '0')};
            top: ${({isOpen})=>(isOpen ? '0' : '-100%')};
            z-index:999;
`
export const CloseIcon = styled(FaTimes)`
            color: #fff;
`
export const Icon = styled.div`
          position: absolute;
          top:1.2rem;
          right:1.5rem;
          font-size: 2rem;
          cursor: pointer;
          outline: none;
        
`;
export const SidebarWrapper =styled.div`
            color: #fff;
`
export const SidebarMenu = styled.ul`
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(6,80px);
            text-align: center;
            @media screen and (max-width: 480px){
                    grid-template-rows: repeat(6,60px);
            }
`
export const SidebarLink = styled(LinkS)`
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                text-decoration: none;
                list-style: none;
                transition: .2s ease-in-out;
                color:#fff;
                cursor: pointer;
                &:hover{
                    color:#01bf71;
                    transition: ease-in-out.2 ease-in-out;
                }

`

export const SideBtnWrap = styled.div`
            display: flex;
            justify-content: center;
       
`
export const SidebarRoute = styled(LinkR)`
        border-radius: 50px;
        background:#01bf71 ;
        white-space: nowrap;
        padding: 16px 64px;
        outline: none;
        color:#fff;
        border:none;
        cursor: pointer;
        transition: ease-in-out.2 ease-in-out;
        text-decoration: none;
        &:hover{
            transition: ease-in-out.2 ease-in-out;
            background: #101606 ;
        }
`