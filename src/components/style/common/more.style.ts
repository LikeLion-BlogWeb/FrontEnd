import styled from "styled-components";

export const MoreContainer = styled.div`
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 500px;
    left: 10px;
    border-radius: 10px;
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