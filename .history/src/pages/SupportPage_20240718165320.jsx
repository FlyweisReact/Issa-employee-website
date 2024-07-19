/** @format */

import "./css/Support.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SupportPage = () => {
  const navigate = useNavigate();
  const [contect, setContect] = useState("");
  const [question, setQuestion] = useState("");

  const BaseUrl = import.meta.env.VITE_API_BASEURL;

  const contectDetail = async () => {
    try {
      const res = await axios.get(
        `${BaseUrl}ContactDetails/viewContactDetails`
      );
      setContect(res.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const questionAwnser = async () => {
    try {
      const res = await axios.get(`${BaseUrl}superAdmin/getAllFaq`);
      setQuestion(res.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    contectDetail();
    questionAwnser();
  }, []);
  return (
    <div className="support-page">
      <div className="support-page-container"></div>
      <div className="support-page-container2">
        <div className="support-page-container21">
          <div className="support-page-container211">
            <span>OasisNotes Support</span>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  padding: "10px",
                  borderRadius: "18px",
                  color: "white",
                  cursor: "pointer",
                  backgroundColor: "#1A9FB2",
                  fontSize: "12px",
                  width: "70%",
                  textAlign: "center",
                }}
                onClick={() => navigate("/demo-request")}
              >
                OasisNotes Support
              </div>
            </div>
          </div>
          <div
            className="support-page-container212"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            {" "}
            {question?.faq?.map((item, i) => (
              <div key={i} className='d' >
                <p
                  style={{
                    color: "#1A9FB2",
                    margin: "0",
                    marginTop: "1rem",
                    borderTop: "1px solid black",
                  }}
                ></p>

                <p
                  style={{ fontSize: "1.5rem", color: "#AF110C", margin: "0" }}
                >
                  {item?.question}
                </p>
                <p
                  style={{ fontSize: "1rem", margin: "0", fontWeight: "bold" }}
                >
                  {item?.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="support-page-container22">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".1rem",
              fontWeight: "bold",
            }}
          >
            <p
              style={{
                color: "#AF110C",
                marginTop: "1rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
                margin: "0",
              }}
            >
              Contact Information
            </p>
            <p style={{ fontWeight: "bold", margin: "0" }}>
              For more information or to request a demo, please contact us.
            </p>

            <p style={{ margin: "0" }}>Hours: Mon-Fri: 8: 00am - 5: 00pm MST</p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <img
                style={{ width: "45px", height: "45px" }}
                src="/ContactUs/message.png"
                alt=""
              />
              <div style={{ fontSize: ".9rem" }}>
                <p style={{ fontWeight: "900", margin: 0 }}>
                  Sales Email:{" "}
                  <a href={contect?.saleEmail}>{contect?.saleEmail}</a>
                </p>
                <p style={{ margin: 0 }}>Phone Number: {contect?.salePhone}</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <img
                style={{ width: "45px", height: "45px" }}
                src="/ContactUs/message.png"
                alt=""
              />
              <div style={{ fontSize: ".9rem" }}>
                <p
                  style={{
                    fontWeight: "900",
                    whiteSpace: "none",
                    lineHeight: "1rem",
                    margin: 0,
                  }}
                >
                  Support Email:{" "}
                  <a href={contect?.saleEmail}>
                    {/* {contect?.saleEmail} */}
                    support@oasisnotes.com
                  </a>
                </p>
                <p style={{ margin: "0" }}>
                  Phone Number: {contect?.salePhone}
                </p>
              </div>
            </div>

            {/* <p style={{margin:"0"}}>{contect?.city}</p> */}
            <p style={{ margin: "0" }}>Address: {contect?.state}</p>
            <p style={{ margin: "0" }}>{contect?.pincode}</p>
            {/* <p>
              Support :{" "}
              <span style={{ color: "#0152A8", textDecoration: "underline" }}>
                {contect?.technicalSupport}
              </span>
            </p> */}
            {/* <p style={{ color: "#0152A8", textDecoration: "underline" }}>
              {contect?.supportEmail}
            </p> */}
            {/* <p>
              Sales :{" "}
              <span style={{ color: "#0152A8", textDecoration: "underline" }}>
                {contect?.salePhone}
              </span>
            </p> */}
            {/* <p>Fax: {contect?.supportFax}</p> */}
            <p
              style={{
                display: "flex",
                gap: "1rem",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <a href={contect?.fb}>
                <img
                  style={{
                    maxWidth: "45px",
                    maxHeight: "45px",
                    width: "auto",
                    height: "auto",
                  }}
                  src="/DemoRequest/fb.png"
                  alt="facebook"
                />
              </a>
              <a href={contect?.twitter}>
                <img
                  style={{
                    maxWidth: "45px",
                    maxHeight: "45px",
                    width: "auto",
                    height: "auto",
                  }}
                  src="/DemoRequest/tw.png"
                  alt="facebook"
                />
              </a>
              <a href={contect?.youtube}>
                <img
                  style={{
                    maxWidth: "45px",
                    maxHeight: "45px",
                    width: "auto",
                    height: "auto",
                  }}
                  src="/DemoRequest/youtube.png"
                  alt="facebook"
                />
              </a>
              <a href={contect?.linkedIn}>
                <img
                  style={{
                    maxWidth: "45px",
                    maxHeight: "45px",
                    width: "auto",
                    height: "auto",
                  }}
                  src="/DemoRequest/in.png"
                  alt="facebook"
                />
              </a>
              <a href={contect?.instagram}>
                <img
                  style={{
                    maxWidth: "45px",
                    maxHeight: "45px",
                    width: "auto",
                    height: "auto",
                  }}
                  src="/DemoRequest/insta.png"
                  alt="facebook"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
