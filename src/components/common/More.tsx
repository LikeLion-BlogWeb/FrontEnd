import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styled from "components/style/common/more.style";
import { MoreComponentIconItems } from "constant";

/**
 * 삭제, 수정 버튼을 담고있는 컴포넌트 : 항상 ... 모양처리 내부에 담아주세요(absolute)
 * @param {null}
 * @returns jsx
 */
export default function More() {

    return (
        <>
            <Styled.MoreContainer className="more-container">
                {
                    MoreComponentIconItems.map((object) => (
                        <MenuItem key={object.key} iconName={object.iconName} itemName={object.itemName} fontColor={object.fontColor} />
                    ))
                }
            </Styled.MoreContainer>
        </>
    )
}

const MenuItem = ({ iconName, itemName, fontColor } : { iconName: IconDefinition, itemName: string, fontColor: string }) => {
    return (
        <>
            <Styled.MenuItemContainer role="menuitem" $fontcolor={fontColor}>
                <FontAwesomeIcon icon={iconName} />
                {itemName}
            </Styled.MenuItemContainer>
        </>
    )
}