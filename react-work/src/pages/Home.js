import React from 'react';
import Video from '../components/videoBackground';
import styled, {keyframes} from 'styled-components';

// icons
import { FaHeart } from 'react-icons/fa';

function Home() {
  return (
    <div className="page">
      <Video />
      <Title>
        HELLO
      </Title>
      <Intro>
        I'm Juan Arciniega.
      </Intro>
      <Tagline>
        I build React apps with  <span><FaHeart /></span>
      </Tagline>
    </div>
  );
}

export default Home;

const mainColor = '#1aa0bb';

const Hello = keyframes`
  0%   {margin-top :10%; margin-bottom: 20%; color:#fff}
  20%  {margin-top:10%;  color:#fff}
  100% {margin-top:20%; margin-bottom: 0; color:${mainColor}}
`
const taglineFade = keyframes`
  0%   {opacity:0}
  75%  {opacity:0}
  100% {opacity:1}
`
const Title = styled.div`
  width: 100vw;
  color: ${mainColor};
  text-align: center;
  z-index: 5;
  margin-top:20%;
  position: relative;
  font-size: 125px;
  animation-name: ${Hello};
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  font-weight: bold;
  font-family: 'Poller One', cursive;
`

const Intro = styled.div`
  width: 100vw;
  color: #fff;
  text-align: center;
  z-index: 5;
  position: relative;
  font-size: 40px;
  font-family: 'Raleway', sans-serif;
`
const Tagline = styled.div`
  width: 100vw;
  color: #052c47;
  text-align: center;
  z-index: 5;
  position: relative;
  font-size: 52px;
  font-family: 'Covered By Your Grace',cursive;
  margin-top: 14px;
  animation-name: ${taglineFade};
  animation-duration: 7s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  text-shadow: 0px 0px 5px rgba(255, 255, 255, 1);
  span{
    color: #e04141;
    font-size: 28px;
  }
`

// font-family: 'Covered By Your Grace', cursive;
// font-family: 'Poller One', cursive;
// font-family: 'Raleway', sans-serif;