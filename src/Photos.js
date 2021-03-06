import React from 'react';
import './styles/Photos.css'

const Photos = (props) => {
  if (props.photos) {
    return (
      <section className="Photos">
        <h3>photos</h3>
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} alt={photo.name} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Photos;
