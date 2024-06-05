import "./css/Partners.css";
import { useEffect, useState } from "react";
import axios from "axios";

const PartnerPage = () => {
  const [data, setData] = useState(null);

  const BaseUrl = import.meta.env.VITE_API_BASEURL;

  const partnerLogo = async () => {
    try {
      const response = await axios.get(`${BaseUrl}Partner/getPartner`);
      setData(response?.data?.data);
      console.log(response?.data?.data, "partner data");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    partnerLogo();
  }, []);

  return (
    <div className="support-page">
      <div className="support-page-container">
        <p>Partners</p>
      </div>
      <div className="partner-page-container2">
        <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          {data?.title}
        </p>
        <p style={{ color: "#545454", fontSize: ".8rem" }}>
          {data?.description}
        </p>
        <div className="partner-page-container21">
          {data?.dataArray?.map((item, i) => (
            <div className="partner-page-container2111" key={i}>
              <div>
                <img
                  style={{
                    maxWidth: "190px",
                    maxHeight: "50px",
                    width: "auto",
                    height: "auto",
                    marginBottom: "1rem",
                  }}
                  src={item?.image}
                  alt="partner"
                />
              </div>
              <p>
                {item?.description}
                <br />
                <button
                  style={{
                    padding: "0.5rem 1.5rem",
                    backgroundColor: "#1A9FB2",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    marginTop: "1rem",
                  }}
                >
                  Learn More
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;
