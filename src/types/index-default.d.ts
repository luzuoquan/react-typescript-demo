interface ErudaProps {
  init(): void,
  // [propsName: string]: any;
}

declare interface Window {
  eruda: ErudaProps
}

declare const ENV: string;