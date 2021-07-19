import { MainHeader } from "./MainHeader";

export const Layout = ({ children }) => (
  <>
    <MainHeader />
    <main>{children}</main>
  </>
);
