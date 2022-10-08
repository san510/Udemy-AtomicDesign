// import { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryyButton } from "../atoms/button/SecondaryButton";
// import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  console.log("Top.");
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

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
