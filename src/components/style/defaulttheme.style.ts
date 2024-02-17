import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    postcard: string;
    buttontext: string;
    postcardshadow: string;
  }
}