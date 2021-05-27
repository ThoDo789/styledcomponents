import React,{useState} from "react";
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HerobtnWrapper,
  ArrowForward,
  ArrowRight
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = ()=>{
        setHover(!hover);
    }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Make Easy</HeroH1>
        <HeroP>
          {" "}
          Sign Up for a new accout tody and recieve $250 in creadit toward your
          next payment.
        </HeroP>
        <HerobtnWrapper>
          <Button to="signup"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark='true'
          >
            Get stated {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HerobtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
