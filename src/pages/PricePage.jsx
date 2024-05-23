import { useEffect, useState } from "react";
import "./css/PricePage.css";
import axios from "axios";
import Loder from "../components/Loder"// import BaseUrl 
import {show_notification} from "../Api_collection/Api"

// payment gateway
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
const BaseUrl = import.meta.env.VITE_API_BASEURL;

function MyVerticallyCenteredModal(props) {
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email, setEmail] = useState("");
  const [subscriptionId, setSubscriptionId] = useState("");
  const [otp,setOtp]=useState("");
  const [optBollean,setOtpBoolean]=useState(false);

  const [textData, setTextData] = useState("");

  const BaseUrl = import.meta.env.VITE_API_BASEURL;

  useEffect(() => {
    if (props.show === true) {
      setSubscriptionId(props.subscriptionId);
      setTextData(props.textData);
    }
  });

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${BaseUrl}createAdminForSubscription`,
        {
          email,
          firstName,
          lastName
        }
      );
    
    setOtpBoolean(true);
      // window.location.href = res.data.session.url;
    } catch (error) {
   
    }
  };

  const handlePostAgain = async () => {
  
    try {
      const res = await axios.post(
        `${BaseUrl}createAdminForSubscription`,
        {
          email,
        }
      );
    
    setOtpBoolean(true);
    } catch (error) {
   
    }
  };

  const handlePost1 = async (e) => {
    e.preventDefault();
    let redirect;

    try {
      const res = await axios.post(
        `${BaseUrl}admin/forgotVerifyOtp`,
        {
          email,
          otp
        }
      );

      if(res?.data?.status===200){
        redirect = await axios.post(
          `${BaseUrl}takeSubscription/${subscriptionId}`,
          {
            email,
          })
      }else{
        show_notification("Verify Failed!","Verification Failed","danger")
      }
      
      window.location.href = redirect?.data?.session;
    } catch (error) {
      show_notification("Verify Failed!",`${error?.data?.response?.message}`,"danger")
    }
  };


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div>
              <img
                src="/logo.png"
                alt="logo"
                style={{
                  // minHeight: "100px",
                  minWidth: "200px",
                  maxWidth: "120px",
                  width: "auto",
                  cursor: "pointer",
                  paddingBottom: "1.5rem",
                }}
              />
            </div>
            <div>
              <p style={{ fontSize: "16px", fontWeight: "bold" }}>{textData}</p>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          optBollean ? <Form onSubmit={handlePost1}>

             <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "1rem" }}>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "1rem" }}>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "1rem" }}>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "1rem" }}>Enter Otp</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Otp"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>

          <div style={{display:"flex", columnGap:"1rem"}}>
            {
              optBollean &&  <Button
              variant="primary"
              type="button"
              style={{ marginTop: "1.5rem" }}
              onClick={handlePostAgain}
            >
              Again send Otp
            </Button>
            }
          
          <Button
            variant="primary"
            type="submit"
            style={{ marginTop: "1.5rem" }}
          >
            Submit
          </Button>
          </div>
          
        </Form> : <Form onSubmit={handlePost}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "1rem" }}>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "1rem" }}>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          
            <Form.Label style={{ fontSize: "1rem" }}>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ marginTop: "1.5rem" }}
          >
            Submit
          </Button>
        </Form>
        }
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const PricePage = () => {
  // model
  const [modalShow, setModalShow] = useState(false);
  const [subscriptionId, setSubscriptionId] = useState("");
  const [loding,setLoading]=useState(false);

  //inner text
  const [textData, setTextData] = useState("");

  const [pricing, setPricing] = useState([]);
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(0);
  const [showFpq, setShowFpq] = useState(false);
  const [fpq, setFpq] = useState("");
  const [view, setView] = useState("");


  const getPricingData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BaseUrl}Pricing/getPricing`);
      setPricing(res?.data?.data);
      setLoading(false);
    } catch (error) {
 
    }
  };

  const getPricingFpq = async () => {


    try {
      const res = await axios.get(`${BaseUrl}Pricing/getPricingFAQ`);
      setFpq(res?.data?.data);
    } catch (error) {
   
    }
  };

  // const getUserPost = async () => {
  //   try {
  //     const res = await axios.post(`${BaseUrl}Pricing/calculatePricing`, {
  //       noOfUser: user,
  //     });
  //     setUserData(res?.data?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // setPricing(get_PricingData());
    getPricingData();
    getPricingFpq();
  }, []);

  const buttonStyle = {
    marginTop: "1rem",
    marginBottom: "1rem",
    padding: "0.2rem 1rem",
    borderRadius: "55px",
    backgroundColor: "#AF110C",
    color: "white",
    border: "none",
    fontSize: "1rem",
  };
  return (
    <div className="support-page">
      <div className="support-page-container-pricing">
     
        <p>{fpq?.heading}</p>
      </div>
      <div className="pricing-page-container">
        <p
          style={{
            textAlign: "center",
            fontSize: "1.4rem",
            fontWeight: "700",
            color: "#555",
            lineHeight: "2rem",
            fontStyle: "italic",
          }}
        >
          {fpq?.subHeading}
        </p>

        {
          loding ? <Loder/> : <div className="pricing-page-container2">
          {pricing?.slice(0, 2)?.map((item, i) => (
            <>
              <div key={i} className="pricing-child-block">
                <p
                  style={{
                    textAlign: "center",
                    backgroundColor: "#1A9FB2",
                    color: "white",
                    padding: "0.8rem",
                    fontWeight: "500",
                    fontSize: "1.5rem",
                    borderRadius:"10px 10px 0px 0px"
                  }}
                >
                  {item?.name}
                </p>
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#1A9FB2",
                      lineHeight: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "2.5rem" }}>${item?.perUser}</span>{" "}
                    /Month
                  </p>

                  {/* <p
                    style={{
                      color: "#1A9FB2",
                      alignItems: "center",
                      marginTop: "1rem",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      view === item._id ? setView("") : setView(item._id)
                    }
                  >
                    View more
                  </p> */}

                  <div
                    className="pricing-inner-content"
                    dangerouslySetInnerHTML={{ __html: item?.details || "" }}
                  ></div>

                  <button
                    style={{
                      alignItems: "center",
                      marginTop: "0.5rem",
                      cursor: "pointer",
                      backgroundColor:"#555", // Gradient background
                      outline: "none",
                      padding: "10px",
                      border: "none",
                      color: "white",
                      borderRadius: "5px",
                      minWidth: "40%",
                      transition: "background-color 0.3s ease", // Add transition for smooth effect
                    }}
                    onClick={() => {
                      setModalShow(true);
                      setSubscriptionId(item._id);
                      setTextData(
                        `${item?.name} is ${
                          item?.perUser * 3
                        } for the first 3 months and then ${
                          item?.perUser
                        } every month.`
                      );
                    }}
                    // Add hover effect
                    onMouseEnter={(e) =>
                      (e.target.style.background =
                        "linear-gradient(to right, #333, #222)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background =
                        "linear-gradient(to right, #555, #333)")
                    }
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        }

 
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        subscriptionId={subscriptionId}
        textData={textData}
      />
    </div>
  );
};

export default PricePage;
