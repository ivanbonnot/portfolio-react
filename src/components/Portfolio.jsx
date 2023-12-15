import React from "react";
import { FormattedMessage } from "react-intl";
import images from "../constants/images";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Portfolio = () => {
  const noteApp = [
    {
      id: 1,
      project: '',
      urlRepo: "https://github.com/ivanbonnot/mantenimiento-PCC",
      images:{
        login:{
            src:images.app_notes_login,
            legend:'Login',
            altImg: 'login',
        },
        loginMobile:{
            src:images.app_notes_login_resp,
            legend: 'Login Mobile',
            altImg: 'login-resp',
        },
        home:{
            src:images.app_notes_header,
            legend: 'Home',
            altImg: 'header',
        },
        homeMobile:{
            src:images.app_notes_header_resp,
            legend: 'Home Mobile',
            altImg: 'header-resp',
        },
        notes:{
            src:images.app_notes_notes,
            legend: 'Notes',
            altImg: 'notes',
        },
        notesMoible1:{
            src:images.app_notes_notes_resp1,
            legend: 'Notes Mobile 1',
            altImg: 'notes-resp1',
        },
        notesMoible2:{
            src:images.app_notes_notes_resp2,
            legend: 'Notes Mobile 2',
            altImg: 'notes-resp2',
        }
      }
    },
    
  ];


  return (
    <div
      name="portfolio"
      className="pt-16 w-full h-full text-white bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg w-full h-full flex flex-col justify-center mx-auto p-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            <FormattedMessage id="portfolio.title" defaultMessage="Portfolio" />
          </p>
          <p className="py-6">
            <FormattedMessage
              id="portfolio.subtitle"
              defaultMessage="This are the projects that i've been working on"
            />
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 px-12 sm:px-0">
          {noteApp.map(({ id, urlRepo, images }) => (
            <div key={id} className="shadow-lg shadow-gray-600 rounded-lg">

              <Carousel className='max-h-fit' dynamicHeight infiniteLoop={true} autoPlay={false} showThumbs={false} useKeyboardArrows={true} style={{
            height: '100px', 
            margin: 'auto' 
          }}>
            {Object.keys(images).map((imageName)=>
            <div>
            <img src={images[imageName].src} alt={images[imageName].altImg} />
            <p className="legend">{images[imageName].legend}</p>
          </div>
            )}
                
              </Carousel>

              <div className="flex items-center justify-center">
                <button className="w-1/3  py-3 my-4 border-r-2 border-gray-500 duration-200 hover:scale-105">
                  <FormattedMessage
                    id="portfolio.buttonDemo"
                    defaultMessage="Demo"
                  />
                </button>
                <button className="w-1/3  py-3 my-4  border-l-2 border-gray-500 duration-200 hover:scale-105">
                  <FormattedMessage
                    id="portfolio.buttonCode"
                    defaultMessage="Code"
                  />
                </button>
                <a
                  href={urlRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/3 py-3 my-4 border-l-2 text-center border-gray-500 duration-200 hover:scale-105"
                >
                  <FormattedMessage
                    id="portfolio.buttonRepo"
                    defaultMessage="Repository"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
