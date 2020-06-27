import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    textColor: string;
    mainColor: string;
    iconBackgroundColor: string;
    buttonColor: string;
    inputColor: string;
    iconColor: string;
    inputBackgroundColor: string;
    inputTextColor: string;
  }
}
