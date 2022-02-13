import styled from "styled-components";
import Button from "./common/Button";
import Input from "./common/Input";
import ToastEditor from "./editor/ToastEditor";

function ClassInfo() {
  return (
    <ClassInfoContainer>
      <Form>
        <BeforeInput>
          클래스명
          <Input
            width="400px"
            height="50px"
            placeholder="클래스명을 입력하세요"
          ></Input>
        </BeforeInput>
        <Button variant="secondary" width="100px" height="50px">
          작성 완료
        </Button>
      </Form>

      <ToastEditor />
    </ClassInfoContainer>
  );
}

export default ClassInfo;

const ClassInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const BeforeInput = styled.div`
  margin-bottom: 50px;
  margin-right: 50px;
`;

const Form = styled.form`
  display: flex;
`;
