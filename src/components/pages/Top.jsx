import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryyButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const history = useHistory();

  const onClickAdmin = () =>
    history.push({ pathname: "/users", state: { isAdmin: true } });
  const onClickGeneral = () =>
    history.push({ pathname: "/users", state: { isAdmin: false } });

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryyButton onClick={onClickAdmin}>管理者ユーザー</SecondaryyButton>
      <br />
      <br />
      <SecondaryyButton onClick={onClickGeneral}>一般ユーザー</SecondaryyButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
