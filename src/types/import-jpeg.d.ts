import value from "*.jpeg";

declare module "*.jpeg" {
  const value: any;
  export default value;
}

declare global {
  interface Window {
    DBOX_INSTALLED: any;
    DonorBox: any;
    dw_open: any;
  }
}
