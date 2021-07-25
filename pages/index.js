import { useState } from "react";
import Head from 'next/head'


const Gall = (props) => {
  const [path, setPath] = useState(0);
  const count = props.info.images.length;
  const url = "http://gallant-feynman-d04cdd.netlify.app/";
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
    <style jsx>
    {`

.images{
  width: 383px; left: 0px; top: 0px;

      position: relative !important;
    margin: 10px;
}
      `}
    </style>
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
      name: "الكل",
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
      name: " جلابية",
      images: [
        "images/gallery/SWARI.jpg",
        "images/gallery/SWARI1.jpg",
        "images/gallery/SWARI2.jpg",
        "images/gallery/SWARI3.jpg",
        "images/gallery/SWARI4.jpg",
        "images/gallery/SWARI5.jpg",
      ],
    },
     {
      name: " سواية",
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
  ]);

  const [path, setPath] = useState(0)

  const url = "http://gallant-feynman-d04cdd.netlify.app/"

  const buttons = showroom.map((sh, index) => (
    <div
    key={index}
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
    
    <Head>



    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Yesteryear" rel="stylesheet"/>

    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@700&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap" rel="stylesheet"/>

    <link rel="stylesheet" href="css/screen.css"/>
    <link rel="stylesheet" href="css/onepage.css"/>

    <link rel="stylesheet" href="css/theme-default.css" type="text/css"/>
    <link rel="stylesheet" href="css/screen.css"/>
    <link rel="stylesheet" href="css/corporate.css" type="text/css"/>

    <link rel="stylesheet" href="css/hairsaloon.css" type="text/css"/>
    <link rel="stylesheet" href="http://gallant-feynman-d04cdd.netlify.app/fonts/font-awesome/css/font-awesome.min.css" type="text/css"/>
    <link rel="stylesheet" type="text/css" href="http://gallant-feynman-d04cdd.netlify.app/fonts/Simple-Line-Icons-Webfont/simple-line-icons.css" media="screen" />
    <link rel="stylesheet" href="http://gallant-feynman-d04cdd.netlify.app/fonts/et-line-font/et-line-font.css"/>
    <link rel="stylesheet" type="text/css" href="css/settings.css"/>
    <link rel="stylesheet" type="text/css" href="css/layers.css"/>
    <link rel="stylesheet" type="text/css" href="css/navigation.css"/>
    <link href="css/owl.carousel.css" rel="stylesheet"/>
    <link href="css/owl.theme.css" rel="stylesheet"/>
    <link rel="stylesheet" type="text/css" href="css/cubeportfolio.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/smart-forms.css"/>

    <link href="css/responsive-tabs.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/smk-accordion.css" rel="stylesheet"/>
    <link rel="stylesheet" href="css/jFlickrFeed/style.css" />
    <link rel="stylesheet" type="text/css" href="css/show-more.css"/>


    <link rel="stylesheet" type="text/css" href="css/spectrum.css"/>
    <link rel="stylesheet" type="text/css" href="css/style-customizer.css"/>
    <link rel="stylesheet/less" type="text/css" href="css/skin.less"/>



    <link rel="stylesheet" type="text/css" href="css/rtl.css"/>

    </Head>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 nopadding">
            <div className="sec-title-container text-center">
              <h3 className="uppercase font-weight-5 less-mar-1 raleway">
                معرضنا
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
    
      <style jsx>{`



.cbp-wrapper{
  position: unset !important;
display: grid;
  grid-template-columns: auto auto auto auto;
}



        `}</style>
    </section>


  );
}

export default App;
