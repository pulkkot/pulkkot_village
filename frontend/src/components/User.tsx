import styled from "styled-components";
import Button from "./common/Button";
function User() {
  return (
    <div>
      <UserContainer>
        <Button>Log in</Button>
        <Button>Sign up</Button>
      </UserContainer>
    </div>
  );
}

export default User;

const UserContainer = styled.div``;
