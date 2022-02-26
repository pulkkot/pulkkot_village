import Button from "components/common/Button";
import Input from "components/common/Input";
import { useState } from "react";
import styled from "styled-components";

function ProductOrder() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <OrderWrapper>
      <Title>주문하기</Title>
      <SubTitle>주문내역 확인</SubTitle>
      <Form onSubmit={onSubmit}>
        <SubTitle>주문자 정보</SubTitle>
        <InputWrapper>
          <Label htmlFor="ordererName">이름</Label>
          <Input
            id="ordererName"
            width="50%"
            height="50px"
            placeholder="이름을 입력해주세요"
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="ordererContact">휴대폰 번호</Label>
          <Input
            id="ordererContact"
            width="50%"
            height="50px"
            placeholder="휴대폰 번호를 입력해주세요"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </InputWrapper>
        <SubTitle>배송지 정보</SubTitle>
        <InputWrapper>
          <Label htmlFor="deliveryAddress">주소</Label>
          <Input
            id="deliveryAddress"
            width="50%"
            height="50px"
            placeholder="배송 받을 주소를 입력해주세요"
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="recipientName">받는 분 이름</Label>
          <Input
            id="recipientName"
            width="50%"
            height="50px"
            placeholder="이름을 입력해주세요"
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="recipientContact">받는 분 연락처</Label>
          <Input
            id="recipientContact"
            width="50%"
            height="50px"
            placeholder="번호를 입력해주세요"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </InputWrapper>

        <SubTitle>약관 동의</SubTitle>
        <InputWrapper>
          <Label htmlFor="deliveryAddress">
            구매조건 확인 <br /> 결제 진행 동의
          </Label>
          <Input
            id="deliveryAddress"
            width="20px"
            height="20px"
            placeholder="배송 받을 주소를 입력해주세요"
            onChange={(e) => setStock(e.target.value)}
            type="checkbox"
            required
          />
          <span>ㅤ개인정보 수집 및 이용 동의 약관보기</span>
        </InputWrapper>
        <ButtonWrapper>
          <Button variant="primary" height="50px" width="50%">
            작성 완료
          </Button>
        </ButtonWrapper>
      </Form>
    </OrderWrapper>
  );
}

export default ProductOrder;

const OrderWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const SubTitle = styled.h5`
  margin-top: 20px;
  border-bottom: #d3d3d3 1px solid;
  height: 50px;
  padding: 20px 0 0;
  font-size: ${({ theme }) => theme.fontSize.content}px;
  font-weight: bold;
  width: 60%;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grayText};
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
`;

const Label = styled.label`
  padding: 0.75em 0.75em;
  color: ${({ theme }) => theme.colors.grayText};
  line-height: normal;
  /* border: 1px solid ${({ theme }) => theme.colors.border}; */
  /* border-radius: 0.25em; */
  display: inline-block;
  width: 30%;
  text-align: center;
  height: 50px;
  margin: 0 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 80%;
  margin-top: 20px;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
