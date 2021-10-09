import React from "react";

function info({ imageUrl, title, text }) {
  return (
    <div className="info">
      <div className="info-image">
        <img className="image" src={imageUrl} alt="" />
      </div>
      <div className="info-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

      <style jsx>{`
        .info {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
        }
        .info-image {
          width: 50%;
          background: #fff200;
          padding-left: 5%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 3px #fff200 solid;
          border-radius: 0 5px 5px 0;
        }

        .info-image:hover .image {
          filter: grayscale(0);
        }

        .image {
          width: 100%;
          filter: grayscale(1);
          transition: all 1s linear;
          object-fit: cover;
        }
        .info-text {
          width: 35%;
          height: 100%;
          background-color: #ff2800;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-top: 2px solid rgba(255, 242, 0, 0.5);
          border-bottom: 2px solid rgba(255, 242, 0, 0.5);
        }
        .info-text h3 {
          font-family: "TitleFont";
          font-size: 5rem;
          width: 90%;
          margin-top: 2rem;
          margin-bottom: 3rem;
        }
        .info-text p {
          font-family: "ParagraphFont";
          font-size: 1.7rem;
          width: 90%;
          height: 100%;
          word-wrap: break-word;
          overflow: auto;
          margin-bottom: 5%;
          color: rgb(241, 241, 241);
        }

        @media only screen and (max-width: 900px) {
          .info-text h3 {
            font-size: 3rem;
            margin-top: 1rem;
            margin-bottom: 1.5rem;
          }
          .info-text p {
            font-size: 1rem;
          }
          .image {
            filter: grayscale(0);
          }
        }
      `}</style>
    </div>
  );
}

export default info;
