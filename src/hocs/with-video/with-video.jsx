import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: false,
        isLoading: true,
      };

      this._onHover = this._onHover.bind(this);
      this._onUnhover = this._onUnhover.bind(this);
    }

    componentDidMount() {
      const {preview, poster} = this.props;
      const video = this._videoRef.current;

      video.src = preview;
      video.poster = poster;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });

      video.onplay = () => this.setState({
        isPlaying: true,
      });

      video.onpause = () => this.setState({
        isPlaying: false,
      });
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
        video.load();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.src = ``;
    }

    render() {
      const {isPlaying, isLoading} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          isLoading={isLoading}
          onHover={this._onHover}
          onUnhover={this._onUnhover}
        >
          <video
            ref={this._videoRef}
            width="280"
            height="180"
            muted
            loop
          />
        </Component>
      );
    }

    _onHover() {
      this.setState({
        isPlaying: true,
      });
    }

    _onUnhover() {
      this.setState({
        isPlaying: false,
      });
    }
  }

  WithVideo.propTypes = {
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  };

  return WithVideo;
};

export default withVideo;
