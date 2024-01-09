export type activeTabType = "all" | "my";

// styled-component : how to pass custom property : https://stackoverflow.com/questions/56258231/how-to-pass-custom-attribute-to-a-styled-component-in-a-functional-component
export type PostNavProps = {
    $active: string;
}
// styled-component with typescript error : https://velog.io/@oneny/TS-styled-components-No-overload-matches-this-call
export type SliderLabelActiveProps = {
    direction: string;
}