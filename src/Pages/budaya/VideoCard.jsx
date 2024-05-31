import React from 'react';
import PropTypes from 'prop-types';
import './VideoCard.css';

const VideoCard = ({ videoSrc, title }) => {
  return (
    <div className="video-card mx-auto ">
      <div className="video-wrapper">
        <iframe
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
      <p className="video-title">{title}</p>
    </div>
  );
};

VideoCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoCard;
