import React from 'react';
import Background from '../assets/background.mp4';
import styled, {keyframes} from 'styled-components';

function Home() {
  return (
    <div>
      <video id="background-video" loop autoPlay>
        <source src={Background} type="video/mp4" />
        <source src={Background} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <Content></Content>
    </div>
  );
}

export default Home;

const gradient = "linear-gradient(to bottom,  rgba(42,214,214,0) 0%,rgba(0,0,0,0.90) 40%)";
const background = keyframes`
  0%   {opacity: 1; top :0; background: #fff;}
  75%  {opacity: 1; top:0; background: #fff;}
  100% {opacity: .8; top:40px;; background: #000;}
`

const Content = styled.div`
  width: 100vw;
  border-top: 1px solid #122b2f;
  opacity: .8;
  height: 100vh;
  background: #000;
  top: 40px;
  text-align: center;
  z-index: 1;
  color:#fff;
  position: fixed;
  animation-name: ${background};
  animation-duration: 4s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  background: #000;
`
