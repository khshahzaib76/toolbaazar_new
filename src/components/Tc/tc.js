import React from "react";
import { Tnc } from "../../data/constants";
import { GiCheckMark } from "react-icons/gi";
import "./tcStyle.css";

function Tc() {
  return (
    <div className="tc_Container">
      <h1>Terms and Conditions</h1>
      <div className="bottom">
        <h2>{Tnc.desc}</h2>

        <div className="">
      {Tnc.bullets.map((bullets) => (
        <div
          style={{ lineHeight: "26px", margin: "30px 0", textAlign: "start" }}
        >
          {bullets?.headA && (
            <div style={{ fontSize: "20px", fontWeight: "600" }}>
              {bullets.headA}
            </div>
          )}
          {bullets?.headB && (
            <div style={{ fontWeight: "bold" }}>{bullets.headB}</div>
          )}
          {bullets?.para && <div>{bullets.para}</div>}

          {bullets?.point && (
            <div style={{ lineHeight: "26px", margin: "15px 0 10px 15px" }}>
              {bullets?.point?.map((point, index) => (
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

      </div>
    </div>
  );
}

export default Tc;
