import React, { useState } from "react";

import "./App.css";

const Gall = (props) => {
  const [path, setPath] = useState(0);
  const count = props.info.images.length;
  const url = "https://gallant-feynman-d04cdd.netlify.app/";
  const image = (
    <img
      className="cbp-popup-lightbox-img"
      src={url + props.info.images[path]}
      alt=""
    />
  );

  return (
    <>
      <div className="cbp-popup-wrap cbp-popup-lightbox cbp-popup-transitionend cbp-popup-ready">
        <div className="cbp-popup-content">
          <div className="cbp-popup-lightbox-figure">{image}</div>
          <div className="cbp-popup-lightbox-bottom">
            <div className="cbp-popup-lightbox-title">
              Bolt UI by Tiberiu Neamu
            </div>
            <div classname="cbp-popup-lightbox-counter">
              {path} of {count}
            </div>
          </div>
        </div>
      <div className="cbp-popup-loadingBox"></div>
      <div className="cbp-popup-navigation-wrap">
        <div className="cbp-popup-navigation">
          <div
            className="cbp-popup-close"
            onClick={() => props.onClose()}
          ></div>
          <div
            className="cbp-popup-next"
            onClick={() => setPath(path + 1 > count ? 0 : path + 1)}
          ></div>
          <div
            className="cbp-popup-prev"
            onClick={() => setPath(path - 1 <= 0 ? count : path - 1)}
          ></div>
        </div>
      </div>
      </div>
   
    </>
  );
};

const Im = (props) => {
  const [show, setShow] = useState(0);
  return (
    <>
      {show ? <Gall onClose={() => setShow(false)} info={props.info} /> : ""}
      <div className="cbp-item motion images">
        <div className="cbp-item-wrapper">
          <div className="cbp-caption cbp-lightbox">
            <div className="cbp-caption-defaultWrap">
              <img
                className=""
                onClick={() => setShow(true)}
                src={props.u}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  const [showroom, setShowroom] = useState([
    {
      name: "????????",
      images: [
        "images/gallery/Glabia.jpg",
        "images/gallery/Glabia1.jpg",
        "images/gallery/Glabia2.jpg",
        "images/gallery/Glabia3.jpg",
        "images/gallery/Glabia4.jpg",
        "images/gallery/Glabia6.jpg",
        "images/gallery/Glabia7.jpg",
        "images/gallery/Glabia8.jpg",
        "images/gallery/Glabia9.jpg",
        "images/gallery/Glabia.jpg",
        "images/gallery/Glabia11.jpg",
        "images/gallery/SWARI.jpg",
        "images/gallery/SWARI1.jpg",
        "images/gallery/SWARI2.jpg",
        "images/gallery/SWARI3.jpg",
        "images/gallery/SWARI4.jpg",
        "images/gallery/SWARI5.jpg",
      ],
    },
    {
      name: " ??????????",
      images: [
        "images/gallery/Glabia.jpg",
        "images/gallery/Glabia1.jpg",
        "images/gallery/Glabia2.jpg",
        "images/gallery/Glabia3.jpg",
        "images/gallery/Glabia4.jpg",
        "images/gallery/Glabia6.jpg",
        "images/gallery/Glabia7.jpg",
        "images/gallery/Glabia8.jpg",
        "images/gallery/Glabia9.jpg",
        "images/gallery/Glabia.jpg",
        "images/gallery/Glabia11.jpg",
      ],
    },
    {
      name: " ????????????",
      images: [
        "images/gallery/SWARI.jpg",
        "images/gallery/SWARI1.jpg",
        "images/gallery/SWARI2.jpg",
        "images/gallery/SWARI3.jpg",
        "images/gallery/SWARI4.jpg",
        "images/gallery/SWARI5.jpg",
      ],
    },
  ]);

  const [path, setPath] = useState(0);

  const url = "https://gallant-feynman-d04cdd.netlify.app/";

  const buttons = showroom.map((sh, index) => (
    <div
      className={
        "cbp-filter-item " + (index === path && "cbp-filter-item-active")
      }
      onClick={() => setPath(index)}
    >
      {sh.name}
      <div className="cbp-filter-counter">{sh.images.length}</div>
    </div>
  ));
  const images = showroom[path].images.map((sh, index) => (
    <Im key={index} u={url + sh} info={showroom[path]} />
  ));

  return (
    <section className="sec-padding">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 nopadding">
            <div className="sec-title-container text-center">
              <h3 className="uppercase font-weight-5 less-mar-1 raleway">
                ????????????
              </h3>
            </div>
          </div>
          <div className="clearfix"></div>

          <div>
            <div className="cbp-l-filters-buttonCenter">{buttons}</div>

            <div className="cbp cbp-l-grid-mosaic-flat cbp-caption-active cbp-caption-fadeIn cbp-ready">
              <div className="cbp-wrapper-outer">
                <div className="cbp-wrapper">{images}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
