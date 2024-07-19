/** @format */

import { useEffect, useState } from "react";
import "./css/HomePage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export const HomePage = () => {
  const navigate = useNavigate();
  const [topBanner, setTopBanner] = useState("");
  const [bottomBanner, setBottomBanner] = useState("");
  const [about, setAbout] = useState("");
  const [choosePharma, setChoosePharma] = useState("");
  const [trustedImage, setTrustedImage] = useState([]);
  const [featureDataImage, setFeatureDataImage] = useState([]);
  const [news, setNews] = useState([]);

  const BaseUrl = import.meta.env.VITE_API_BASEURL;

  const getTopBanner = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Banner/getTopBanner`);
      setTopBanner(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ButtomTopBanner = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Banner/getBottomBanner`);
      setBottomBanner(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const aboutUs = async () => {
    try {
      const res = await axios.get(`${BaseUrl}AboutUs/getAboutUs`);
      setAbout(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const choosePharmaData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}WhyChoosePharm/getWhyChoosePharm`);
      setChoosePharma(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const trustedImageData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}TrustedClient/getTrustedClient`);
      setTrustedImage(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const FeatureData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}OurFeatures/getOurFeatures`);
      setFeatureDataImage(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getNewsData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}News/getNews`);
      setNews(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopBanner();
    ButtomTopBanner();
    aboutUs();
    choosePharmaData();
    trustedImageData();
    FeatureData();
    getNewsData();
  }, []);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${topBanner?.image})` }}
        className="top-section-homePage"
      >
        <div className="text-container">
          <p style={{ fontSize: "1.2rem", fontWeight: "100" }}>
            {topBanner?.heading}
          </p>
          <p style={{ fontSize: "2.3rem", fontWeight: "600" }}>
            {topBanner?.title}
          </p>
          <p style={{ fontSize: ".9rem", fontWeight: "100" }}>
            {topBanner?.description}
          </p>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          fontWeight: "100",
          fontSize: "1.5rem",
          marginBottom: "0",
          width: "80%",
          margin: "auto",
          marginTop: "1rem",
        }}
      >
        Behavioral Health Software{" "}
        <span style={{ fontWeight: "bold", color: "#020000" }}>
          Trusted by Clinicians Nationwide
        </span>
      </p>

      
      <Container>
        
      </Container>

      <div className="features-container-homepage1">
        <div>
          <p
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Our Features
          </p>
          <div className="features-container-homepage">
            {featureDataImage?.map((item, i) => (
              <div
                style={{ display: "flex", gap: "1rem", margin: ".2rem" }}
                key={i}
              >
                <img
                  style={{ maxWidth: "45px", maxHeight: "45px" }}
                  src={item?.image}
                  alt="built"
                />
                <div>
                  <p
                    style={{
                      color: "#1C5877",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      lineHeight: "1rem",
                    }}
                  >
                    {item?.title}
                  </p>
                  <p style={{ color: "#3D3D3D" }}>{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Container>
        <div className="home-logos">
          {about?.cate?.map((item, i) => (
            <div key={i} className="Item">
              <img src={item?.image} alt="" />
              <p>{item?.name}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container>
        <div className="container7-homePage">
          <div>
            <p style={{ fontSize: "1.5rem", margin: "0rem" }}>
              {" "}
              {bottomBanner?.heading}
            </p>
            <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
              {bottomBanner?.title}
            </p>
            <p>{bottomBanner?.description}</p>
          </div>
          <div className="img-container">
            <img src={bottomBanner?.image} alt="" />{" "}
            <img src={bottomBanner?.image} alt="" />{" "}
          </div>
        </div>
      </Container>

      <div className="container8-homePage">
        <p style={{ color: "black", fontSize: ".9rem" }}>
          {choosePharma?.title}
        </p>
        <p style={{ fontWeight: "400", width: "70%", color: "black" }}>
          {choosePharma?.description}
        </p>
        <div
          style={{
            color: "#1A9FB2",
            fontWeight: "bold",
            paddingBottom: "2rem",
          }}
          className="content-wrapper"
        >
          {choosePharma?.dataArray?.map((item, i) => (
            <div className="item" key={i}>
              <img
                src="/HomePage/right.png"
                alt="right"
                style={{ width: "20px", height: "20px" }}
              />
              <p
                style={{
                  fontWeight: "bold",
                  paddingTop: ".7rem",
                }}
              >
                {item?.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Container>
        <div className="news-wrapper">
          <div className="content-head">
            <p className="title">News Update</p>
            <div className="head">
              <p className="heading">Latest Healthcare Articles</p>
              <button onClick={() => navigate("/all_news_information")}>
                Read All News
              </button>
            </div>
          </div>

          <div className="news-lists">
            {news?.slice(0, 4)?.map((item, i) => (
              <div className="Item" key={i}>
                <img src={item?.image} alt="" />
                <div className="content">
                  <p className="desc">{item?.title}</p>
                  <p className="title">{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
