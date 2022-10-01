// Templateはコンテンツを持たない為、childrenでコンテンツを受け取る

import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};
