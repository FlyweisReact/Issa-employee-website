import { useEffect, useState } from "react";
import "./css/DownloadPage.css";
import { Form } from "react-bootstrap";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { show_notification } from '../Api_collection/Api';
import TimezoneSelect from 'react-timezone-select';


const DemoPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [timeZone, setTimeZone] = useState('');
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [describe, setDescribe] = useState("");
  const [timeZones, setTimeZones] = useState([]);
  const [contect, setContect] = useState([]);


  // Error
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError,setLastNameError]=useState("");
  const [compantNameError,setCompanyNameError]=useState("");
  const [emailError,setEmailError]=useState("");
  const [phoneNumberError,setPhoneNumberError]=useState("");
  const [hearAboutUsError,setHearAboutUsError]=useState("");
 

  const BaseUrl = import.meta.env.VITE_API_BASEURL;

  const data = {
    companyName,
    firstName,
    lastName,
    timeZone,
    email,
    phoneNumber,
    hearAboutUs,
    describe,
  };

  const handleData = async (e) => {
    e.preventDefault();

    const validateForm = () => {
      // Validate Company Name
      if (companyName.trim() === "") {
        setCompanyNameError("Company Name is required");
        return false;
      }
      if (firstName.trim() === "") {
        setFirstNameError("Full Name is required");
        return false;
      }
      // if (lastNameError.trim() === "") {
      //   setLastNameError("Last is required");
      //   return false;
      // }
      if (email.trim() === "") {
        setEmailError("Email is required");
        return false;
      }
      if (phoneNumber.trim() === "") {
        setPhoneNumberError("Phone number is required");
        return false;
      }
      if (hearAboutUs.trim() === "") {
        setHearAboutUsError("This is a required");
        return false;
      }
      
      if (!validateForm()) {
        return;
      }
  
      setCompanyNameError('');
      setFirstNameError("");
      // setLastNameError("");
      setEmailError("");
      setPhoneNumberError("");
      setHearAboutUsError("");
  
      return true;
    };

    try {
      const response = await axios.post(
        `${BaseUrl}DemoRequest/createDemoRequest`,
        data
      );
      show_notification("Form Submit Successfully!", response?.data?.message, "success");
      navigate("/");
    } catch (error) {
      show_notification("Something is Wrong!", error?.response?.data?.message, "danger");
    }
  };



  const contectData = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}ContactDetails/viewContactDetails`
      );
      setContect(response?.data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTimeZones();
    contectData();
  }, []);

  const navigate = useNavigate();
  const fetchTimeZones = () => {
    const zones = moment.tz.names();
    setTimeZones(zones);
  };

  const timeHandler = (e) => {
    const selectedTimezone = e.target.value;
    setTimeZone(moment().tz(selectedTimezone).format("h:mm A"));
    const utcTime = currentTime.utc().format("h:mm A");
  };

  return (
    <div className="support-page">
      <div className="support-page-container">
        <p>Demo Request Form</p>
      </div>
      <div className="support-page-container2">
        <div className="download-page-container21">
       
          <Form
            style={{ width: "100%", color: "#545454", fontWeight: "bold",marginTop:"1.5rem" }}
            onSubmit={handleData}
          >
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label>Company Name*</Form.Label>
              <Form.Control
                className="border border-dark"
                type="text"
                required
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                  setCompanyNameError(e.target.value.trim() === "" ? "Company Name is Required" : "");
                }}
              />
              {compantNameError && <Form.Text className="text-danger">{compantNameError}</Form.Text>}
              
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label>Full Name*</Form.Label>
              <Form.Control
                className="border border-dark"
                type="text"
                required
                value={firstName}
                onChange={(e) => {setFirstName(e.target.value);
                  setFirstNameError(e.target.value.trim() === "" ? "First Name is Required" : "")}}
              />
              {firstNameError && <Form.Text className="text-danger">{firstNameError}</Form.Text>}
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Time Zone*</Form.Label>
              <Form.Select
                onChange={(e) => timeHandler(e)}
                className="border border-dark"
                required
              >
                <option>Select</option>
                {timeZones.map((zone, index) => (
                  <option key={index} value={zone}>
                    {zone}
                  </option>
                ))}
             
              </Form.Select>
              <p>Current Time: {timeZone}</p>
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                className="border border-dark"
                type="email"
                value={email}
                required
                onChange={(e) => {setEmail(e.target.value);
                  setEmailError(e.target.value.trim() === "" ? "Email Name is Required" : "")}}
              />
              {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label>Phone Number*</Form.Label>
              <Form.Control
                className="border border-dark"
                type="number"
                value={phoneNumber}
                required
                onChange={(e) => {setPhoneNumber(e.target.value);
                setPhoneNumberError(e.target.value.trim() === "" ? "Phone Number is Required" : "")}}
              />
              {phoneNumberError && <Form.Text className="text-danger">{phoneNumberError}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label>How did you hear about us?*</Form.Label>
              <Form.Select    
               required
                value={hearAboutUs}
                onChange={(e) => {setHearAboutUs(e.target.value)}}>
              <option>Open this select menu</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Other">Other</option>
              setHearAboutUsError(e.target.value.trim() === "" ? "This is a Required" : "");
              </Form.Select>
         
              {hearAboutUsError && <Form.Text className="text-danger">{hearAboutUsError}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label>
                Please describe what you want to see in the demonstration.
              </Form.Label>
              <Form.Control
                className="border border-dark"
                as="textarea"
                rows={3}
                value={describe}
                onChange={(e) => setDescribe(e.target.value)}
              />
            </Form.Group>
            <button
              // onClick={() => navigate("/")}
              type="submit"
              style={{
                backgroundColor: "#1A9FB2",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                padding: "0.3rem 2.5rem",
              }}
            >
              Sent
            </button>
          </Form>
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
{/*                 
            <p style={{margin:"0"}}>{contect?.city}</p> */}
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
      </div>
    </div>
  );
};

export default DemoPage;
