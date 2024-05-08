
import "./css/AboutPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";

const AboutPage = () => {
  const [contect, setContect] = useState("");
  const [question, setQuestion] = useState([]);

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
      const res = await axios.get(`${BaseUrl}OasisNotesSupport/getOasisNotesSupport`);
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
    <div className="support-page-container">
      <p>OASIS NOTES</p>
    </div>
    <div className="support-page-container22121">
      <div className="support-page-container225">
     
         <div className="container d-flex justify-content-center align-items-center">
              <div className="col-md-12">
                {question?.map((item, i) => (
                  <Accordion defaultActiveKey="0" key={i} className="custom-accordion">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header >
                        {item?.title}
                      </Accordion.Header>
                      <Accordion.Body >
                        {" "}
                        <p>{item?.description}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ))}
              </div>
            </div>


        {/* <div className="support-page-container211">
          <span>OasisNotes Support</span>
          <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
          <div style={{padding: "10px", borderRadius:"18px",color:"white",cursor:"pointer", backgroundColor:"#1A9FB2", fontSize:"12px",width:"70%",textAlign:"center"}}>OasisNotes Support</div>
          </div>
         
        </div> */}
        {/* <div
          className="support-page-container212"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {" "}
          {question?.faq?.map((item, i) => (
            <div key={i}>
              <p
                style={{
                  color: "#1A9FB2",
                  marginTop: "1rem",
                  borderTop: "1px solid black",
                }}
              >
                {question?.title}
              </p>

              <p style={{ color: "#AF110C" }}>{item?.question}</p>
              <p style={{ fontSize: "1rem" }}>{item?.answer}</p>
              <hr style={{ width: "50%" }} />
            </div>
          ))}
          <div>
            <p style={{ color: "#1A9FB2" }}>{question?.description}</p>

            <button
              style={{
                fontSize: "1rem",
                backgroundColor: "#AF110C",
                padding: "0.5rem 1.5rem",
                color: "white",
                border: "none",
                borderRadius: "55px",
              }}
            >
              <a
                href={question?.link}
                style={{ color: "white", borderBottom: "none" }}
              >
                Click Here
              </a>
            </button>
          </div>
        </div> */}
      </div>
      {/* <div className="support-page-container22" style={{width:"80%",margin:"auto"}}>
        <div>
          <p
            style={{
              color: "#1A9FB2",
              marginTop: "1rem",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            OASIS NOTES SUPPORT
          </p>
          <p style={{ marginBottom: "0.5rem" }}>
            <span style={{ color: "#1A9FB2", fontWeight: "bold" }}>
              Hours
            </span>
            <br />
            <span style={{ color: "black", fontWeight: "bold" }}>
              {contect?.hours}
            </span>
          </p>
          <p style={{ marginBottom: "0.5rem" }}>
            <span style={{ color: "#1A9FB2", fontWeight: "bold" }}>
              Technical Support:
            </span>
            <br />
            <span style={{ color: "#AF110C", fontWeight: "bold" }}>
              {contect?.technicalSupport}
            </span>
          </p>
          <p style={{ marginBottom: "0.5rem" }}>
            <span style={{ color: "#1A9FB2", fontWeight: "bold" }}>
              Schedule Training:
            </span>
            <br />
            <span style={{ color: "#AF110C", fontWeight: "bold" }}>
              {contect?.scheduleTraining}
            </span>
          </p>
          <p style={{ marginBottom: "0.5rem" }}>
            <span style={{ color: "#1A9FB2", fontWeight: "bold" }}>
              Questions, Suggestions, or Comments:
            </span>
            <br />
            <span style={{ color: "#AF110C", fontWeight: "bold" }}>
              {contect?.teamEmail}
            </span>
          </p>
          <p style={{ marginBottom: "0.5rem" }}>
            <span style={{ color: "black"}}>
              For after hours, emergency support please call:
            </span>
            <br />
            <span style={{ color: "#AF110C", fontWeight: "bold" }}>
              {contect?.emergencyPhone}
            </span>
          </p>
        </div>
      </div> */}
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
                margin:"0"
              }}
            >
              Contact Information
            </p>
            <p style={{ fontWeight: "bold",margin: "0"}}>
              For more information or to request a demo, please contact us.
            </p>

              <p style={{margin:"0"}}>Hours: Mon-Fri: 8: 00am - 5: 00pm MST</p>
            
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
                  <div style={{ fontSize: ".9rem", lineHeight: "0.5rem" }}>
                    <p style={{ fontWeight: "900" }}>Sales Email: <a href={contect?.saleEmail}>{contect?.saleEmail}</a></p>
                    <p style={{margin:"auto"}}>Phone Number:  {contect?.salePhone}</p>
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
                  <div style={{ fontSize: ".9rem" ,lineHeight: "0.5rem"}}>
                    <p style={{ fontWeight: "900",whiteSpace:"none",lineHeight: "1rem" }}>Support Email: <a href={contect?.saleEmail}>
                      {/* {contect?.saleEmail} */}
                      support@oasisnotes.com
                      </a></p>
                    <p style={{margin:"0"}}>Phone Number:  {contect?.salePhone}</p>
                  </div>

                </div>
                
            {/* <p style={{margin:"0"}}>{contect?.city}</p> */}
            <p style={{margin:"0"}}>Address: {contect?.state}</p>
            <p style={{margin:"0"}}>{contect?.pincode}</p>
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
        {/* <div className="support-page-container22">
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
              }}
            >
              OASIS NOTES SUPPORT
            </p>
            <p style={{ fontWeight: "bold",margin: "0"}}>
              For more information or to request a demo, please contact us.
            </p>

              <p style={{ fontWeight: "900",margin:"0"}}>Hours: </p>
              <p >Mon-Fri: 8: 00am - 5: 00pm MST</p>
            
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
                  <div style={{ fontSize: ".9rem", lineHeight: "0.5rem" }}>
                    <p style={{ fontWeight: "900" }}>Sales Email: <a href={contect?.saleEmail}>{contect?.saleEmail}</a></p>
                    <p style={{margin:"auto"}}>Phone Number:  {contect?.salePhone}</p>
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
                  <div style={{ fontSize: ".9rem" ,lineHeight: "0.5rem"}}>
                    <p style={{ fontWeight: "900",whiteSpace:"none",lineHeight: "1rem" }}>Support Email: <a href={contect?.saleEmail}>
                    
                      support@oasisnotes.com
                      </a></p>
                    <p style={{margin:"0"}}>Phone Number:  {contect?.salePhone}</p>
                  </div>

                </div>
                
            <p style={{margin:"0"}}>{contect?.city}</p>
            <p style={{margin:"0"}}>Address: {contect?.state}</p>
            <p style={{margin:"0"}}>{contect?.pincode}</p>
          
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
        </div> */}
    </div>
  </div>


   
  );
};

export default AboutPage;
