import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 16px;
`

export const EllipsisButton = styled.button`
    border: none;
    outline: none;
    padding: 0;
    background-color: #fff;
    font-size: 1.3rem;

    &:hover {
        cursor: pointer;
        color: gray;
    }
`
interface MenuItemListContainerProps {
    $displayList: boolean;
}
export const MenuItemListContainer = styled.div<MenuItemListContainerProps>`
    /* More컴포넌트의 Container(div) 기준으로 위치를 잡습니다. */
    position: absolute;
    right: 5px;
    bottom: 25px;
    border: 1px solid whitesmoke;
    border-radius: 10px;
    display: ${props => props.$displayList === true ? "block" : "none"};
    z-index: 99;
`

interface MenuItemContainerProps {
    $fontcolor: string;
}
export const MenuItemContainer = styled.div<MenuItemContainerProps>`
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    margin: 0.25rem;
    box-sizing: border-box;
    border-radius: 10px;
    font-weight: bold;
    color: ${props => props.$fontcolor === "black" ? "black" : "red"};
    transition: all 0.75s;
    cursor: pointer;
    
    &:hover, &focus {
        background-color: #f3f3f3;
    }
`

export const FixLink = styled(Link)`
    text-decoration: none;
`