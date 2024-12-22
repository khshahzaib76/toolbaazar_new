import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../data/constants";
import RightCard from "./rightcard";
import styled from 'styled-components';
import { Link as LinkR  } from 'react-router-dom';
import { RiStarSLine } from "react-icons/ri"; // Adjust the path to your filled star image
import { RiStarSFill } from "react-icons/ri"; // Adjust the path to your empty star image
import { GiCheckMark } from "react-icons/gi";
import "./cardinfostyle.css";

export const Button = styled(LinkR)`
   
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    // box-shadow:  0 0 0 2px ${({ theme }) => theme.primary};
    border: 2px solid white;
    font-size: 25px;
    text-decoration:none;
    margin-top:10px;
    text-align:center;
    font-weight: 700;
    // border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover  {
        transform: translateY(-2px);
        box-shadow:  0 0 0 2px ${({ theme }) => theme.primary};
    border: 2px solid white;
        }
        @media (max-width: 640px) {
            font-size:22px; 
            
          
          }
          @media (max-width: 640px) {

            font-size: 20px;
           
        }
`;

function LeftSection({ project }) {
  const { det_desc } = project;
  return (
    <div className="left-section">
      {det_desc.map((det_desc) => (
        <div
          style={{ lineHeight: "26px", margin: "30px 0", textAlign: "start" }}
        >
          {det_desc?.headA && (
            <div style={{ fontSize: "20px", fontWeight: "600" }}>
              {det_desc.headA}
            </div>
          )}
          {det_desc?.headB && (
            <div style={{ fontWeight: "bold" }}>{det_desc.headB}</div>
          )}
          {det_desc?.para && <div>{det_desc.para}</div>}

          {det_desc?.point && (
            <div style={{ lineHeight: "26px", margin: "15px 0 10px 15px" }}>
              {det_desc?.point?.map((point, index) => (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>
                    <GiCheckMark
                      style={{
                        color: "#674cc4",
                        fontSize: "13px",
                        margin: "10px",
                      }}
                    >
                      {/* {point} */}
                    </GiCheckMark>
                  </div>
                  <div>{point}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ReviewForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !rating || !comment) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
      return;
    }
    setIsSubmitted(true);
    setName("");
    setRating("");
    setComment("");

    // Hide the message after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        classtype="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="rating">Rating Stars:</label>
      <select
        id="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="">Select</option> {/* Default placeholder option */}
        <option value="excellent">5. Excellent</option>
        <option value="good">4. Good</option>
        <option value="average">3. Average</option>
        <option value="satisfactory">2. Satisfactory</option>
        <option value="poor">1. Poor</option>
      </select>
      <label htmlFor="commnet">Leave Comment:</label>
      <input
        type="text"
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{ height: "50px" }}
      />
      <button type="submit">Submit Review</button>
      {error && (
        <div
          className="error-message"
          style={{ color: "red", fontWeight: "800px", margin: "4px 4px" }}
        >
          Please fill all input fields!
        </div>
      )}

      {isSubmitted && (
        <div
                  className="success-message"
                  style={{ color: "green", fontWeight: "800px", margin: "4px 4px" }}
        >
          Your Review will be updated soon!
        </div>
      )}
    </form>
  );
}

function RightSection({ project }) {
  const { reviews } = project;

  return (
    <div className="right-section">
      <h3>Customer Reviews </h3>
      {reviews.map((review) => (
        <div style={{ lineHeight: "30px" }}>
          <div className="review">
            {/* <div style={{ fontSize: "20px", marginRight: "10px" }}>
              {" "}
              {review.name}{" "}
              <span style={{ color: "rgb(205, 204, 204)" }}>|</span>{" "}
            </div> */}
            {Array.from({ length: review.stars }, (_, index) => (
              // <Star key={`filled-${index}`} src={RiStarSFill} alt="Filled star" />
              <RiStarSFill
                key={`filled-${index}`}
                style={{ color: "#ffbc00", fontSize: "20px" }}
              />
            ))}
            {Array.from({ length: 5 - review.stars }, (_, index) => (
              // <Star key={`empty-${index}`} src={RiStarSLine} alt="Empty star" />
              <RiStarSLine
                key={`empty-${index}`}
                style={{ color: "#ffbc00", fontSize: "20px" }}
              />
            ))}
            <div
              className="revcount"
              style={{ fontSize: "10px", marginLeft: "10px" }}
            >
              ({review.stars} / 5)
            </div>

            <div className="revname">
              {" "}
              <span style={{ color: "rgb(205, 204, 204)" }}>
                {" "}
                &nbsp;&nbsp;|
              </span>{" "}
              {review.name}{" "}
            </div>
          </div>

          <p style={{ fontSize: "15px", lineHeight: "20px" }}>
            {review.comment}{" "}
          </p>
          <hr style={{ color: "rgb(205, 204, 204)", margin: "10px 0" }}></hr>
        </div>
      ))}
    </div>
  );
}

const CardInfo = () => {
  // const location = useLocation();
  // const { idx } = location.state;
  // const { idx = 1 } = location.state || {};
  const { idx } = useParams();

  return (
    <div className="cardinfo_container">
      <div className="topsec">
        <div className="topleftm">
          {/* {projects[idx].image && <img src={projects[idx].image} alt={projects[idx].title} />} */}

          {projects[idx].videoplay ? (
            <iframe
              src={`https://www.youtube.com/embed/${new URLSearchParams(
                new URL(projects[idx].videoplay).search
              ).get("v")}?autoplay=1&mute=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={projects[idx].title}
            ></iframe>
          ) : (
            <img src={projects[idx].image} alt={projects[idx].title} />
          )}

          <div className="btns">
            <Button to={projects[idx].website} target="_blank">
              Visit Website
            </Button>
            {projects[idx].video && (
              <Button to={projects[idx].video} target="_blank">
                {" "}
                Video Demo{" "}
              </Button>
            )}
          </div>
        </div>
        <div className="toprightm">
          <div className="topright1">
            <RightCard project={projects[idx]} idx={idx} />
          </div>
          <ReviewForm />
        </div>
      </div>
      <div className="container">
        <LeftSection project={projects[idx]} />
        <RightSection project={projects[idx]} />
      </div>
    </div>
  );
};

export default CardInfo;
