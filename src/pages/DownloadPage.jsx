import { useState, useEffect } from "react";
import "./css/DownloadPage.css";
import axios from "axios";


const DownloadPage = () => {
  const [contect, setContect] = useState("");
  const [data,setDate]=useState("")



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

  const Download_logo = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}DownloadPage/getDownloadPage`
      );
      setDate(response?.data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    contectDetail();
    Download_logo();
  }, []);
  return (
    <div className="support-page">
      <div className="support-page-container">
        <p>Downloads</p>
      </div>
      <div className="support-page-container2">
        <div className="download-page-container21">
          <div style={{ border: "1px solid black" }}>
            <div
              style={{
                backgroundColor: "#1A9FB2",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                fontWeight: "600",
              }}
            >
              <p style={{ textAlign: "center" }}>OasisNotes CRM / EHR</p>
              <p style={{ textAlign: "center" }}>Download</p>
            </div>
            <div
              style={{
                color: "black",
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                fontWeight: "600",
                alignItems: "center",
              }}
            >
              <p style={{ textAlign: "center" }}>OasisNotes EHR Client</p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <a href={data?.window}>
                <img
                  style={{
                    maxWidth: "100px",
                    width: "auto",
                    maxHeight: "80px",
                    height: "auto",
                  }}
                  src="/Downloadpage/windows.png"
                  alt="windows"
                />
                </a>
                <a href={data?.mac}>
                <img
                  style={{
                    maxWidth: "100px",
                    width: "auto",
                    maxHeight: "80px",
                    height: "auto",
                  }}
                  src="/Downloadpage/macos.png"
                  alt="windows"
                />
                </a>
              </p>
            </div>
            <div
              style={{
                color: "black",
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                fontWeight: "600",
                alignItems: "center",
                borderTop: "1px solid black",
              }}
            >
              <p style={{ textAlign: "center" }}>OasisNotes Mobile</p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1.8rem",
                  flexWrap: "wrap",
                }}
              >
                 <a href={data?.android}>
                <img
                  style={{
                    maxWidth: "100px",
                    width: "auto",
                    maxHeight: "80px",
                    height: "auto",
                  }}
                  src="/Downloadpage/android.png"
                  alt="windows"
                />
                </a>
                 <a href={data?.ios}>
                <img
                  style={{
                    maxWidth: "100px",
                    width: "auto",
                    maxHeight: "80px",
                    height: "auto",
                  }}
                  src="/Downloadpage/ios.png"
                  alt="windows"
                />
                </a>
              </p>
            </div>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <div style={{ fontWeight: "400", padding: "0rem" }}>
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "#1A9FB2",
                  marginBottom: "1rem",
                }}
              >
                Supported Specifications:
              </p>

              <div style={{lineHeight:"1rem"}}
                    dangerouslySetInnerHTML={{ __html: data?.specification || "" }}
                  ></div>
            
            </div>
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
          <div>
            <p
              style={{
                color: "#1A9FB2",
                marginTop: "1rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              OasisNotes Support
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
              <span style={{ color: "black" }}>
                For after hours, emergency support please call:
              </span>
              <br />
              <span style={{ color: "#AF110C", fontWeight: "bold" }}>
                {contect?.emergencyPhone}
              </span>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DownloadPage;
