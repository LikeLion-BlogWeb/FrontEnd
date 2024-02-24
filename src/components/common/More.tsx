import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styled from "components/style/common/more.style";
import { MoreComponentIconItems } from "constant/constant";

import { useState } from "react";
import { PostDataType } from "types/postlist.type";

interface MoreProps {
    post: PostDataType;
    deleteFn: (id: number, post: PostDataType) => Promise<void>
}

export default function More({ post, deleteFn } : MoreProps) {
    const [displayList, setDisplayList] = useState<boolean>(false);

    const handleToggle = (e: any) => {
        setDisplayList(!displayList);
    }

    return (
        <>
            <Styled.Container>
                <Styled.EllipsisButton onClick={handleToggle}>
                    <span>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </span>
                </Styled.EllipsisButton>
                <Styled.MenuItemListContainer $displayList={displayList}>
                    {
                        MoreComponentIconItems.map((object) => {

                            if(object.itemName === "삭제") {
                                return (
                                    <Styled.MenuItemContainer role="menuitem" $fontcolor={object.fontColor} onClick={() => deleteFn(post.id, post)} key={object.key}>
                                        <FontAwesomeIcon icon={object.iconName} />
                                        {object.itemName}
                                    </Styled.MenuItemContainer>
                                )
                            }

                            if(object.itemName === "수정") {
                                return (
                                    <Styled.FixLink to={`/posts/edit/${post.id}`}>
                                        <Styled.MenuItemContainer role="menuitem" $fontcolor={object.fontColor} key={object.key}>
                                            <FontAwesomeIcon icon={object.iconName} />
                                            {object.itemName}
                                        </Styled.MenuItemContainer>
                                    </Styled.FixLink>
                                )
                            }  

                            return (
                                <Styled.MenuItemContainer role="menuitem" $fontcolor={object.fontColor} key={object.key}>
                                    <FontAwesomeIcon icon={object.iconName} />
                                    {object.itemName}
                                </Styled.MenuItemContainer>
                            )
                        })
                    }
                </Styled.MenuItemListContainer>
            </Styled.Container>
        </>
    )
}