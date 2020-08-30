import React from 'react';
import PropTypes from 'prop-types';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withVideo from './with-video.jsx';

configure({
  adapter: new Adapter(),
});

const MovieCard = ({
  onHover,
  onUnhover,
  children,
}) => {
  return (
    <div
      onHover={onHover}
      onUnhover={onUnhover}
    >
      {children}
    </div>
  );
};

MovieCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  onUnhover: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

// describe(`Checks HOC's hover and unhover behavior`, () => {
// it(`Should start play video on hover`, () => {
//   const WrappedMovieCard = withVideo(MovieCard);
//   const isPlaying = false;
//   const wrapper = mount(<WrappedMovieCard
//     isPlaying={isPlaying}
//     onClick={() => {}}
//     poster=""
//     preview=""
//   />);

//   window.HTMLVideoElement.prototype.play = () => {};

//   const {_videoRef} = wrapper.instance();

//   jest.spyOn(_videoRef.current, `play`);

//   wrapper.instance().componentDidMount();

//   wrapper.find(`div`).simulate(`mouseEnter`);

//   expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
// });

// it(`Should should pause video on unhover`, () => {
//   const WrappedMovieCard = withVideo(MovieCard);
//   const isPlaying = true;
//   const wrapper = mount(<WrappedMovieCard
//     isPlaying={isPlaying}
//     onHover={() => {}}
//     onUnhover={() => {}}
//   />);
// });

// it(`Should should pause video on unhover after hover`, () => {
//   const WrappedMovieCard = withVideo(MovieCard);
//   const isPlaying = false;
//   const wrapper = mount(<WrappedMovieCard
//     isPlaying={isPlaying}
//     onHover={() => {}}
//     onUnhover={() => {}}
//   />);
// });
// });

