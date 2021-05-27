import React from "react";
import { Button } from "../ButtonElements";

import {
  Subtitle,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  TextWrapper,
  Topline,
  BtnWrap
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  descriptions,
  buttonLabel,
  img,
  alt,
  dark,
  primary,
  dark2

}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Topline>{topLine}</Topline>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{descriptions}</Subtitle>
                <BtnWrap>
                  <Button to="home"
                   smooth={true}
                   duration={true}
                   spy={true}
                   exact={true}
                   offset={-80}
                   primary={primary ? 1 : 0}
                   dark = {dark ? 1: 0}
                   dark2 = {dark2 ? 1: 0}
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
