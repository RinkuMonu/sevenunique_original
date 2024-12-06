// import React from 'react'
// import mainAnimation from '../../component/mainPageAnimation/mainAnimation'

// function home() {
//   return (
//     <>
//       <mainAnimation/>
//     </>
//   )
// }

// export default home

import React from "react";
import "./style.css"; // Import CSS file containing keyframes
import "bootstrap/dist/css/bootstrap.min.css";
import MainAnimation from "../../component/mainPageAnimation/mainAnimation"; // Import Sections component
// import feature from "../../assest/Images/person-payingtechnology.jpg";
// import howWhat from "../../assest/Images/cashToonline.jpg";
// import FinUnique from "../../assest/Images/7unique.png";
import  FinUnique  from '../../assest/Images/mainImg.c8148481b0d144dc249c2474bfa48995.svg';

import feature1 from "../../assest/Images/feature1.a1fb39bd74f8caa76101.png";
import feature2 from "../../assest/Images/feature2.png";
import Button from "react-bootstrap/Button";
import Cashfree from "../../assest/Images/CASHFREE_files/download (1).png";
import AxisBank from "../../../media/AxisBank.2c25c33c58b56bc471b9.png";
import YesBank from "../../../media/YesBank.svg.4994fa5ce212d7fd1fda.png";
import Easebuzz from "../../assest/Images/download.png";

function home() {
  return (
    <>
      <section className="main-bg">
        <MainAnimation />
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-md-5">
              <h1 className="home_heading mb-3">
                We Provide the Best Finance Services All over India{" "}
              </h1>{" "}
              <p className="home-para">
                Our company 's goal is to create a digital network that will
                allow even small retailers to become digitally self - reliant.We
                are also working to connect cities, semi - urban, and remote
                rural areas to the mainstream economy.{" "}
              </p>{" "}
              <Button className="button"> Start Now </Button>{" "}
            </div>{" "}
            <div className="col-lg-7 col-md-6 banner-main-image d-flex justify-content-center">
              <img src={FinUnique} alt="webdevelopement" />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* companies */}
      <section className="companies py-5">
        <div class="container">
          <div class="row justify-content-between align-items-center gy-5">
            <div className="col-md-3">
              <div className="border d-flex align-item-center justify-content-center p-5">
                {" "}
                {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="200"
                              height="40"
                              class="UserLogo variant-- "
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 200 40"
                            >
                              <title>Amazon logo</title>
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  fill="var(--userLogoColor, #EFA82E)"
                                  d="M111.58 33.91C106.18 37.9 98.37 40 91.64 40a36.13 36.13 0 01-24.37-9.28c-.5-.45-.05-1.08.56-.72a49.08 49.08 0 0024.37 6.46c5.98 0 12.55-1.24 18.6-3.8.9-.39 1.67.6.78 1.25"
                                ></path>
                                <path
                                  fill="var(--userLogoColor, #EFA82E)"
                                  d="M113.82 31.36c-.69-.88-4.56-.42-6.3-.21-.52.06-.6-.4-.13-.73 3.09-2.17 8.15-1.54 8.73-.82.6.74-.15 5.8-3.04 8.21-.45.38-.87.18-.67-.31.65-1.63 2.1-5.26 1.41-6.14"
                                ></path>
                                <path
                                  fill="var(--userLogoColor, #1B1A19)"
                                  d="M107.65 15.13v-2.1c0-.33.24-.54.53-.54h9.45c.3 0 .54.22.54.53v1.8c0 .3-.26.7-.71 1.33l-4.9 6.97c1.82-.04 3.74.23 5.4 1.16.36.2.47.51.5.82v2.24c0 .31-.34.67-.7.48a10.89 10.89 0 00-9.98.02c-.33.17-.67-.18-.67-.49v-2.13c0-.34 0-.93.35-1.45l5.67-8.11h-4.94a.53.53 0 01-.54-.53M73.2 28.26h-2.88a.54.54 0 01-.5-.48V13.06c0-.3.24-.53.55-.53h2.67c.28.01.5.23.52.5v1.92h.06c.7-1.86 2-2.73 3.78-2.73 1.8 0 2.92.87 3.73 2.73a4.08 4.08 0 013.96-2.73c1.2 0 2.52.5 3.33 1.61.9 1.24.72 3.04.72 4.62v9.28c0 .3-.25.53-.55.53h-2.87a.54.54 0 01-.52-.52v-7.8c0-.63.06-2.18-.08-2.76-.22-1-.86-1.27-1.69-1.27-.7 0-1.42.46-1.72 1.2-.29.75-.26 1.99-.26 2.82v7.8c0 .3-.25.53-.56.53h-2.87a.54.54 0 01-.51-.52v-7.8c0-1.65.26-4.06-1.77-4.06-2.07 0-1.99 2.35-1.99 4.05v7.8c0 .3-.25.53-.55.53m53.11-13.03c-2.11 0-2.25 2.88-2.25 4.67 0 1.8-.02 5.64 2.23 5.64 2.22 0 2.33-3.1 2.33-4.99 0-1.24-.05-2.72-.43-3.9-.32-1.02-.96-1.42-1.88-1.42m-.02-3.01c4.26 0 6.57 3.66 6.57 8.3 0 4.5-2.55 8.05-6.57 8.05-4.19 0-6.46-3.65-6.46-8.2 0-4.59 2.3-8.15 6.46-8.15m12.1 16.04h-2.87a.54.54 0 01-.51-.52V13a.55.55 0 01.55-.48h2.66c.25.01.46.18.51.41v2.25h.05c.81-2.01 1.94-2.97 3.92-2.97 1.29 0 2.55.47 3.35 1.74.75 1.17.75 3.16.75 4.58v9.26a.55.55 0 01-.55.46h-2.88a.54.54 0 01-.5-.46v-8c0-1.6.18-3.95-1.8-3.95-.7 0-1.35.46-1.67 1.17-.4.9-.46 1.8-.46 2.79v7.92c0 .3-.25.53-.55.53m-35.38-.03a.6.6 0 01-.68.06c-.96-.79-1.13-1.15-1.65-1.9-1.57 1.6-2.7 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 013.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.35-.53-1.02-.75-1.61-.75-1.1 0-2.07.56-2.31 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.24-.05-.5-.24-.43-.6.64-3.37 3.69-4.4 6.42-4.4 1.4 0 3.23.38 4.33 1.44 1.4 1.3 1.26 3.04 1.26 4.93v4.47c0 1.34.56 1.93 1.09 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9h-.01zm-2.9-7c0 1.12.03 2.05-.54 3.05-.45.8-1.18 1.3-1.98 1.3-1.1 0-1.75-.84-1.75-2.08 0-2.44 2.2-2.88 4.27-2.88v.61zm-34.76 7a.6.6 0 01-.68.06c-.95-.79-1.12-1.15-1.65-1.9-1.57 1.6-2.69 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 013.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.34-.53-1.02-.75-1.6-.75-1.1 0-2.08.56-2.32 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.23-.05-.5-.24-.43-.6.64-3.37 3.7-4.4 6.43-4.4 1.4 0 3.22.38 4.32 1.44 1.4 1.3 1.27 3.04 1.27 4.93v4.47c0 1.34.55 1.93 1.08 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9zm-2.9-7c0 1.12.03 2.05-.53 3.05-.46.8-1.18 1.3-2 1.3-1.1 0-1.74-.84-1.74-2.08 0-2.44 2.2-2.88 4.28-2.88v.61z"
                                ></path>
                              </g>
                            </svg> */}{" "}
                <img src={Cashfree} alt="cashfree" />
              </div>{" "}
            </div>{" "}
            <div className="col-md-3">
              <div className="border d-flex align-item-center justify-content-center p-5">
                {" "}
                {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="200"
                              height="40"
                              fill="none"
                              class="UserLogo variant-- "
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 200 40"
                            >
                              <path
                                fill="var(--userLogoColor, #00A1E0)"
                                d="M94.78 4.374c1.846-1.912 4.418-3.121 7.253-3.121 3.78 0 7.055 2.11 8.813 5.23a12.154 12.154 0 014.989-1.054c6.813 0 12.308 5.56 12.308 12.417s-5.517 12.418-12.308 12.418a12.35 12.35 0 01-2.417-.242 9.015 9.015 0 01-7.869 4.615 9.073 9.073 0 01-3.934-.9c-1.56 3.67-5.208 6.263-9.45 6.263-4.418 0-8.198-2.791-9.649-6.725a9.68 9.68 0 01-1.956.198c-5.274 0-9.538-4.308-9.538-9.649a9.658 9.658 0 014.77-8.351 10.885 10.885 0 01-.924-4.418C74.846 4.967 79.835 0 85.945 0c3.604 0 6.813 1.714 8.835 4.374z"
                              ></path>
                              <path
                                fill="var(--userLogoColorAlt, #fff)"
                                d="M79.286 20.747l.242-.637c.044-.11.11-.066.153-.044.066.044.11.066.198.132.682.44 1.319.44 1.517.44.505 0 .835-.264.835-.638v-.022c0-.396-.484-.55-1.055-.725l-.132-.044c-.77-.22-1.604-.55-1.604-1.517v-.022c0-.923.747-1.582 1.824-1.582h.11c.637 0 1.23.176 1.67.461.044.022.088.066.066.132-.022.066-.22.572-.242.638-.044.11-.154.044-.154.044a3.342 3.342 0 00-1.494-.374c-.462 0-.747.242-.747.571v.022c0 .374.505.55 1.077.726l.11.022c.769.241 1.582.571 1.582 1.516v.022c0 1.011-.725 1.627-1.89 1.627-.572 0-1.121-.088-1.715-.396-.11-.066-.22-.11-.33-.198-.021-.044-.065-.066-.021-.154zm17.143 0l.241-.637c.044-.11.132-.066.154-.044.066.044.11.066.198.132.681.44 1.319.44 1.517.44.505 0 .835-.264.835-.638v-.022c0-.396-.484-.55-1.055-.725l-.132-.044c-.77-.22-1.604-.55-1.604-1.517v-.022c0-.923.747-1.582 1.824-1.582h.11c.637 0 1.23.176 1.67.461.044.022.088.066.066.132-.022.066-.22.572-.242.638-.044.11-.154.044-.154.044a3.342 3.342 0 00-1.494-.374c-.462 0-.747.242-.747.571v.022c0 .374.505.55 1.076.726l.11.022c.77.241 1.583.571 1.583 1.516v.022c0 1.011-.726 1.627-1.89 1.627-.572 0-1.121-.088-1.715-.396-.11-.066-.22-.11-.33-.198 0-.044-.043-.066-.021-.154zm12.703-3.01c.088.329.154.68.154 1.054s-.044.725-.154 1.055c-.088.33-.242.615-.44.857-.197.242-.461.44-.747.572a2.652 2.652 0 01-1.055.198c-.395 0-.747-.066-1.055-.198a1.948 1.948 0 01-.747-.572 2.252 2.252 0 01-.439-.857 4.072 4.072 0 01-.154-1.055c0-.373.044-.725.154-1.055.087-.33.241-.615.439-.857s.462-.44.747-.571c.308-.132.66-.22 1.055-.22.396 0 .748.066 1.055.22.308.132.55.33.747.571.198.242.352.528.44.857zm-.989 1.032c0-.571-.11-1.01-.308-1.318-.197-.308-.527-.462-.945-.462-.439 0-.747.154-.945.462-.198.307-.307.747-.307 1.318 0 .572.109 1.011.307 1.34.198.309.506.462.945.462.44 0 .748-.153.945-.461.22-.308.308-.77.308-1.34zm9.033 1.649l.242.659c.022.088-.044.11-.044.11-.374.154-.879.242-1.385.242-.857 0-1.494-.242-1.934-.726-.439-.483-.659-1.143-.659-1.956 0-.373.044-.725.154-1.055s.263-.615.483-.857c.22-.242.484-.44.791-.571a2.8 2.8 0 011.099-.22c.286 0 .528.022.726.044.219.044.527.11.659.176.022 0 .088.044.066.11-.088.263-.154.44-.242.659-.044.11-.11.066-.11.066a3.089 3.089 0 00-1.033-.154c-.483 0-.857.154-1.077.484-.241.307-.373.725-.373 1.296 0 .616.153 1.055.417 1.34.264.287.638.419 1.121.419.198 0 .374-.022.528-.044.153-.022.307-.066.461-.132-.022.044.066.022.11.11zm4.989-2.88c.22.748.11 1.385.088 1.429 0 .088-.088.088-.088.088h-3.319c.022.505.132.857.396 1.099.242.242.615.395 1.143.395.791 0 1.121-.153 1.362-.241 0 0 .088-.022.132.066l.22.615c.044.11 0 .132-.022.154-.198.11-.703.33-1.67.33-.462 0-.879-.066-1.209-.198a2.214 2.214 0 01-.835-.55 2.447 2.447 0 01-.484-.835 3.31 3.31 0 01-.154-1.055c0-.374.044-.725.154-1.055.088-.33.242-.615.44-.857s.461-.44.769-.571c.308-.154.681-.22 1.099-.22.352 0 .681.066.945.198.198.088.418.241.637.483.11.088.308.418.396.726zm-3.297.704h2.352c-.022-.308-.088-.572-.22-.791-.198-.308-.483-.484-.923-.484-.439 0-.747.176-.945.484-.132.197-.198.461-.264.79zm-23.23-.704c.22.748.11 1.385.11 1.429 0 .088-.089.088-.089.088h-3.318c.022.505.132.857.395 1.099.242.242.616.395 1.143.395.791 0 1.121-.153 1.363-.241 0 0 .088-.022.132.066l.22.615c.043.11 0 .132-.022.154-.198.11-.704.33-1.67.33-.462 0-.88-.066-1.21-.198a2.214 2.214 0 01-.835-.55 2.447 2.447 0 01-.483-.835 3.312 3.312 0 01-.154-1.055c0-.374.044-.725.154-1.055.088-.33.242-.615.44-.857.197-.242.46-.44.769-.571.307-.154.68-.22 1.098-.22.352 0 .682.066.946.198.197.088.417.241.637.483.088.088.308.418.373.726zm-3.297.704h2.373c-.022-.308-.087-.572-.22-.791-.197-.308-.483-.484-.922-.484-.44 0-.748.176-.945.484-.154.197-.22.461-.286.79zm-5.824-.176s.263.022.55.066V18c0-.44-.089-.66-.265-.791-.175-.132-.461-.22-.813-.22 0 0-.813 0-1.45.33-.022.022-.044.022-.044.022s-.088.022-.11-.044l-.242-.638c-.044-.088.022-.132.022-.132.308-.241 1.011-.373 1.011-.373a5.95 5.95 0 01.88-.088c.659 0 1.164.154 1.516.462.351.307.527.79.527 1.472v3.033s0 .088-.066.11c0 0-.132.044-.242.066s-.505.11-.835.154c-.33.066-.66.088-1.01.088-.33 0-.616-.022-.88-.088a2.12 2.12 0 01-.681-.286 1.488 1.488 0 01-.44-.528c-.11-.197-.154-.461-.154-.747 0-.285.066-.55.176-.769.11-.22.286-.396.484-.55.198-.153.44-.241.681-.33a3.3 3.3 0 01.813-.109c.264.022.44.022.572.022zm-1.319 2.33s.308.241.967.197c.483-.022.901-.11.901-.11v-1.516s-.418-.066-.901-.066c-.681 0-.967.242-.967.242-.198.132-.286.352-.286.637 0 .176.044.33.11.44.022.044.044.088.176.176zm28.022-4.022c-.022.087-.198.55-.242.703-.022.066-.066.088-.132.088 0 0-.197-.044-.373-.044-.11 0-.286.022-.44.066a1.142 1.142 0 00-.417.242c-.132.11-.22.285-.286.483-.066.198-.11.528-.11.88v2.46c0 .067-.044.11-.11.11h-.879c-.066 0-.11-.043-.11-.11v-4.944c0-.066.044-.11.088-.11h.857c.066 0 .088.044.088.11v.395c.132-.176.352-.33.549-.417.198-.088.44-.154.858-.132.219.022.505.066.549.088.088.022.132.044.11.132zm-8.154-2.286c.022 0 .088.044.066.11l-.264.703c-.022.044-.044.088-.154.044-.022 0-.065-.022-.175-.044-.066-.022-.176-.022-.264-.022a1.71 1.71 0 00-.352.044.56.56 0 00-.285.176 1.1 1.1 0 00-.242.351 3.29 3.29 0 00-.176.748h1.055c.088 0 .11.044.11.11l-.132.681c-.022.11-.11.088-.11.088h-1.099l-.703 4.242c-.088.44-.176.813-.286 1.12-.11.308-.242.528-.439.748-.176.198-.374.351-.616.417-.22.088-.505.132-.813.132-.154 0-.308 0-.484-.044a1.259 1.259 0 01-.307-.088c-.044-.022-.066-.066-.044-.132.022-.065.22-.593.242-.68.043-.089.11-.045.11-.045.065.022.11.044.175.066.088.022.176.022.264.022.154 0 .286-.022.396-.066.132-.044.219-.132.307-.242s.154-.263.242-.461a7.39 7.39 0 00.198-.813l.747-4.154h-.725c-.088 0-.11-.044-.11-.11l.132-.681c.022-.11.11-.088.11-.088h.747l.044-.22c.11-.66.33-1.165.659-1.495.33-.33.813-.505 1.407-.505.176 0 .33.022.461.044a.528.528 0 01.308.044zM90.253 21.23c0 .066-.044.11-.088.11h-.88c-.065 0-.087-.044-.087-.11v-7.055c0-.044.044-.11.088-.11h.879c.066 0 .088.044.088.11v7.055z"
                              ></path>
                              <title>Salesforce logo</title>
                            </svg> */}{" "}
                <img src={AxisBank} alt="AxisBank" />
              </div>{" "}
            </div>{" "}
            <div className="col-md-3">
              <div className="border d-flex align-item-center justify-content-center p-5">
                {" "}
                {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="200"
                              height="40"
                              class="UserLogo variant-- "
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 200 40"
                            >
                              <title>Google logo</title>
                              <g fill="none">
                                <path
                                  fill="var(--userLogoColor, #EA4335)"
                                  d="M92.6 21.65a8.28 8.28 0 01-8.41 8.38 8.28 8.28 0 01-8.4-8.38 8.25 8.25 0 018.4-8.38c4.63 0 8.4 3.52 8.4 8.38zm-3.69 0c0-3.02-2.19-5.08-4.72-5.08-2.54 0-4.73 2.06-4.73 5.08 0 2.98 2.19 5.07 4.73 5.07 2.53 0 4.72-2.1 4.72-5.07z"
                                ></path>
                                <path
                                  fill="var(--userLogoColor, #FBBC05)"
                                  d="M110.73 21.65a8.28 8.28 0 01-8.41 8.38 8.28 8.28 0 01-8.4-8.38 8.26 8.26 0 018.4-8.38c4.63 0 8.4 3.52 8.4 8.38zm-3.68 0c0-3.02-2.2-5.08-4.73-5.08-2.54 0-4.73 2.06-4.73 5.08 0 2.98 2.2 5.07 4.73 5.07 2.54 0 4.73-2.1 4.73-5.07z"
                                ></path>
                                <path
                                  fill="var(--userLogoColor, #4285F4)"
                                  d="M128.1 13.77v15.05c0 6.18-3.65 8.71-7.96 8.71a7.98 7.98 0 01-7.43-4.94l3.2-1.33a4.63 4.63 0 004.23 2.97c2.76 0 4.47-1.7 4.47-4.9v-1.21h-.13a5.7 5.7 0 01-4.41 1.9c-4.2 0-8.03-3.65-8.03-8.34 0-4.73 3.84-8.41 8.03-8.41 2 0 3.58.88 4.41 1.87h.13v-1.36h3.5zm-3.23 7.9c0-2.94-1.97-5.1-4.47-5.1-2.54 0-4.67 2.16-4.67 5.1 0 2.93 2.13 5.05 4.67 5.05 2.5 0 4.47-2.12 4.47-5.04z"
                                ></path>
                                <path
                                  fill="var(--userLogoColor, #34A853)"
                                  d="M133.86 4.96V29.5h-3.59V4.96z"
                                ></path>
                                <path
                                  fill="var(--userLogoColor, #EA4335)"
                                  d="M147.85 24.4l2.86 1.9a8.34 8.34 0 01-6.99 3.72 8.2 8.2 0 01-8.31-8.38c0-4.98 3.58-8.38 7.9-8.38 4.35 0 6.48 3.46 7.17 5.33l.38.96-11.2 4.63a4.26 4.26 0 004.06 2.54c1.88 0 3.18-.92 4.13-2.32zm-8.8-3.01l7.5-3.11c-.42-1.05-1.65-1.78-3.11-1.78a4.6 4.6 0 00-4.38 4.89z"
                                ></path>
                                <path
                                  fill="var(--userLogoColor, #4285F4)"
                                  d="M62.2 19.47V15.9h11.98c.11.62.17 1.35.17 2.15 0 2.66-.73 5.96-3.08 8.31-2.28 2.38-5.2 3.65-9.07 3.65-7.17 0-13.2-5.84-13.2-13C49 9.83 55.03 4 62.2 4c3.97 0 6.8 1.56 8.92 3.59l-2.51 2.5a9.06 9.06 0 00-6.41-2.54 9.33 9.33 0 00-9.34 9.46c0 5.24 4.1 9.46 9.34 9.46a8.7 8.7 0 006.57-2.6c1-1.01 1.66-2.45 1.92-4.4h-8.5z"
                                ></path>
                              </g>
                            </svg> */}{" "}
                <img src={YesBank} alt="YesBank" />
              </div>{" "}
            </div>{" "}
            <div className="col-md-3">
              <div className="border d-flex align-item-center justify-content-center p-5">
                {" "}
                {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="200"
                              height="40"
                              fill="none"
                              class="UserLogo variant-- "
                              viewBox="0 0 200 40"
                              preserveAspectRatio="xMidYMid meet"
                            >
                              <path
                                fill="var(--userLogoColor, #000)"
                                fill-rule="evenodd"
                                d="M119.797 6.018l9.956 27.154h3.447v.196h-10.97v-.195h3.23l-3.274-8.93h-6.646v.004l.036.104c.265.788.397 1.614.389 2.445v3.347c0 1.722.76 3.467 2.213 3.467.852 0 1.533-.3 2.344-1.042l.115.108c-.88.929-1.946 1.324-3.545 1.324-1.206 0-2.239-.29-3.069-.862l-.158-.113c-1.093-.827-1.803-2.178-2.108-4.017l-.049-.296-.051-.45-.005-.077-1.833 4.985h2.6v.196h-5.439v-.196h2.628l2.011-5.474v-.012a18.476 18.476 0 01-.038-.97v-2.39c0-2.937-2.184-4.622-5.993-4.622h-3.743v13.47h3.244v.195H92.412v-.195h3.23l-3.274-8.93h-9.085l-3.244 8.83.136-.022c4.259-.734 6.217-3.984 6.244-7.407h.197v7.724H66L81.303 7.112H75.15c-5.1 0-7.408 3.94-7.444 7.866h-.197V6.916h18.576l-.113.196-15.188 26.06h7.99c.2 0 .397-.01.596-.026a7.45 7.45 0 00.4-.039l.05-.005L89.775 6h.197l.007.018 7.824 21.339V7.112h-3.222v-.198h11.087c5.329 0 9.049 2.735 9.049 6.653 0 2.857-2.548 5.228-6.338 5.902l-.696.09.701.07c2.298.264 4.124.97 5.417 2.101l.009.008L119.594 6h.196l.007.018zm-4.354 17.98l.02.049h6.649l-4.466-12.182-3.676 10.014.019.019.187.185A6.043 6.043 0 01115.443 24zm-13.595-4.492V7.112h2.856c3.816 0 5.831 2.247 5.831 6.496 0 4.52-1.156 5.898-4.947 5.898h-3.74zm-14.017-7.64l-4.476 12.181h8.942l-4.466-12.182z"
                                clip-rule="evenodd"
                              ></path>
                              <title>Zara logo</title>
                            </svg> */}{" "}
                <img src={Easebuzz} alt="Easebuzz" />
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* features */}{" "}
      <section className="connect">
        <div className="container">
          <div className="py-5 service-14">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <span className="badge badge-info rounded-pill px-4 py-2 font-weight-light">
                    How FinUnique Work{" "}
                  </span>{" "}
                  <h3 className="my-3">
                    Empowering Retailers and Enhancing Marketing Efficiency{" "}
                  </h3>{" "}
                  <p>
                    Launch retail stores ' products and services on FinUnique' s
                    platform, reducing costs and increasing marketing
                    efficiency.Gain access to pan - India networking
                    opportunities for enhanced visibility and
                    outreach.Collaborate with our professional team to nurture
                    your ideas into successful ventures.{" "}
                  </p>{" "}
                  <p>
                    Our dedicated developers ensure every task is approached
                    with a positive attitude and efficient time management.{" "}
                  </p>{" "}
                  <a className="btn btn-info-gradiant border-0 text-white btn-md my-3">
                    View Details{" "}
                  </a>{" "}
                </div>{" "}
                <div className="col-lg-4">
                  <div className="mb-4 mb-sm-0">
                    <img
                      className="rounded img-fluid"
                      src={feature1}
                      alt="wrappixel kit"
                    />
                    <div className="mt-3">
                      <h6 className="font-weight-medium"> How To Do </h6>{" "}
                      <p className="mt-3">
                        FinUnique has a team of developers and designers to
                        nurture your ideas till they become fruitful.We work
                        with 100 % flexibility, productivity, and time
                        management.Our developers are the real strength of our
                        organization, maintaining a positive attitude toward
                        every task.{" "}
                      </p>{" "}
                      <a href="javascript:void(0)" className="linking">
                        Learn More{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* <!-- Column --> */}{" "}
                <div className="col-lg-4">
                  <div className="mb-4 mb-sm-0">
                    <img
                      className="rounded img-fluid"
                      src={feature2}
                      alt="wrappixel kit"
                    />
                    <div className="mt-3">
                      <h6 className="font-weight-medium"> What To Do </h6>{" "}
                      <p className="mt-3">
                        FinUnique Portal provides a wide array of business and
                        banking services through our Retailers and
                        Distributors.From broadband to hotel bookings, our
                        platform offers convenient solutions for all your needs
                        in one place.Simplify your tasks with easy access to
                        bill payments, digital vouchers, and travel bookings.{" "}
                      </p>{" "}
                      <a href="javascript:void(0)" className="linking">
                        Learn More{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* <!-- Column --> */}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* how to do and what to do */}{" "}
      {/* <section classNameName="howToDo-whatTodo py-5 mb-3"> */}{" "}
      {/* <div className="container">
                      <div className="row align-item-center justify-content-center">
                        <div className="col-lg-5 col-md-5 align-self-center">
                          <div className="card max-500 border-0 bg-transparent text-white">
                            <div className="card-body">
                              <span className="badge badge-info rounded-pill px-3 py-1 font-weight-light">
                                 How FinUnique Work
                              </span>
                              <h3 className="my-3 text-uppercase">
                                AWESOME EXTRA ORDINARY FLEXIBILITY
                              </h3>
                              <p className="mt-3">
                                You can relay on our amazing features list and also our
                                customer services will be greatexperience for you without
                                doubt and in no-time and with great quality for design.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-7 d-flex align-item-center justify-content-evenly">
                          <div className="item-how-what-todo col-md-5">
                            <a href="#">
                              <img
                                src={feature2}
                                alt="wrappixel"
                                className="img-fluid"
                              />
                              <h5>How To Do</h5>
                            </a>
                          </div>
                          <div className="item-how-what-todo col-md-5">
                            <a href="#">
                              <img
                                src={feature1}
                                alt="wrappixel"
                                className="img-fluid"
                              />
                              <h5>What To Do</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> */}{" "}
      <section className="howToDo-whatTodo py-5 mb-3 py-3 py-md-5 py-xl-8">
        <div className="container overflow-hidden">
          <div className="row gy-4 gy-md-5 gy-lg-0 align-items-center">
            <div className="col-12 col-lg-5">
              <div className="row">
                <div className="col-12 col-xl-11 text-light">
                  <span className="badge badge-info rounded-pill px-3 py-1 my-3 font-weight-light">
                    Features{" "}
                  </span>{" "}
                  <h2 className="display-5 mb-3 mb-xl-4">
                    We are giving you perfect solutions with our proficient
                    Features.{" "}
                  </h2>{" "}
                  <p className="mb-3 mb-xl-4">
                    Our comprehensive suite of services is designed to meet your
                    every need and help you thrive in today 's dynamic business
                    landscape.Contact us today to embark on a journey of growth,
                    innovation, and unparalleled support.Your success is our
                    priority.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-12 col-lg-7 overflow-hidden">
              <div className="row gy-4">
                <div className="col-12 col-sm-6">
                  <div className="card border-0 border-bottom shadow-sm">
                    <div className="card-body text-center p-4 p-xxl-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="currentColor"
                        className="bi bi-textarea-resize mb-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4.5A2.5 2.5 0 0 1 2.5 2h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5v-7zM2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-11zm10.854 4.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0zm0 2.5a.5.5 0 0 1 0 .708l-.5.5a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708 0z" />
                      </svg>{" "}
                      <h4 className="mb-4"> Market Research </h4>{" "}
                      <p className="mb-4">
                        We specialize in deciphering your target audience and
                        uncovering untapped.Our array of bespoke research
                        solutions sets us apart.{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-12 col-sm-6">
                  <div className="card border-0 border-bottom shadow-sm">
                    <div className="card-body text-center p-4 p-xxl-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="currentColor"
                        className="bi bi-tablet mb-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>{" "}
                      <h4 className="mb-4"> Web Design </h4>{" "}
                      <p className="mb-4">
                        We craft visually stunning and user - friendly websites
                        tailored to your brand and audience, ensuring a seamless
                        online experience.{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-12 col-sm-6">
                  <div className="card border-0 border-bottom shadow-sm">
                    <div className="card-body text-center p-4 p-xxl-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="currentColor"
                        className="bi bi-repeat mb-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                      </svg>{" "}
                      <h4 className="mb-4"> Daily Updates </h4>{" "}
                      <p className="mb-4">
                        We deliver daily insights into your business 's
                        performance, offering detailed analytics on website
                        traffic and sales trends to keep you informed.{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-12 col-sm-6">
                  <div className="card border-0 border-bottom shadow-sm">
                    <div className="card-body text-center p-4 p-xxl-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="currentColor"
                        className="bi bi-shield-check mb-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                      </svg>{" "}
                      <h4 className="mb-4"> Free Support </h4>{" "}
                      <p className="mb-4">
                        We extend complimentary assistance to all our clients,
                        ensuring round - the - clock support whenever you
                        require assistance, regardless of the hour.{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* </section> */}
      {/* services */}
      {/* <!-- START SECTION SERVICES --> */}{" "}
      <section className="section-services py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <div className="header-section">
                <h2 className="title"> Exclusive Services </h2>{" "}
                <p className="description">
                  FinUnique retailers now let their customers pay all kinds of
                  bills safely and easily through the FinUnique portal, The
                  Bharat Bill Payment System, which was made by NPCI, is the
                  foundation for services that let you recharge your phone or
                  pay your bills.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="row">
            {" "}
            {/* <!-- Single Service --> */}{" "}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="content">
                  <span className="icon">
                    {" "}
                    {/* <i className="fab fa-battle-net"></i> */}{" "}
                    <i className="fas fa-satellite-dish"> </i>{" "}
                  </span>{" "}
                  <h3 className="title"> DTH Recharge </h3>{" "}
                  <p className="description">
                    FinUnique retailer store and FinUnique app help with Airtel
                    television recharge, Videocon D2H recharge, Dish TV
                    recharge, Reliance Digital TV recharge, Sun Direct recharge,
                    and Tata Sky recharge your entertainment never Ending.{" "}
                  </p>{" "}
                  <a href="#" className="learn-more">
                    Learn More{" "}
                  </a>{" "}
                </div>{" "}
                <span className="circle-before"> </span>{" "}
              </div>{" "}
            </div>{" "}
            {/* <!-- / End Single Service --> */}{" "}
            {/* <!-- Single Service --> */}{" "}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="content">
                  <span className="icon">
                    {" "}
                    {/* <i className="fab fa-asymmetrik"></i> */}{" "}
                    <i className="fas fa-bolt"> </i>{" "}
                  </span>{" "}
                  <h3 className="title"> Electricity Bill Payment </h3>{" "}
                  <p className="description">
                    FinUnique supports all leading electricity providers across
                    different states in India, after making your first
                    electricity bill payment on FinUnique, you will get timely
                    reminders for future bill payments.{" "}
                  </p>{" "}
                  <a href="#" className="learn-more">
                    Learn More{" "}
                  </a>{" "}
                </div>{" "}
                <span className="circle-before"> </span>{" "}
              </div>{" "}
            </div>{" "}
            {/* <!-- / End Single Service --> */}{" "}
            {/* <!-- Single Service --> */}{" "}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="content">
                  <span className="icon">
                    {" "}
                    {/* <i className="fab fa-artstation"></i> */}{" "}
                    <i className="fas fa-tint"> </i>{" "}
                  </span>{" "}
                  <h3 className="title"> Water Bill Payment </h3>{" "}
                  <p className="description">
                    FinUnique can be used to pay for your water bill to the top
                    service providers across a variety of Indian states.The most
                    popular billers for water bill payment on FinUnique are New
                    Delhi Municipal Corporation, Rajasthan PHED, Bangalore Water
                    Supply, and Gurugram Municipal Corporation.{" "}
                  </p>{" "}
                  <a href="#" className="learn-more">
                    Learn More{" "}
                  </a>{" "}
                </div>{" "}
                <span className="circle-before"> </span>{" "}
              </div>{" "}
            </div>{" "}
            {/* <!-- / End Single Service --> */}{" "}
            {/* <!-- Single Service --> */}{" "}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="content">
                  <span className="icon">
                    {" "}
                    {/* <i className="fab fa-500px"></i> */}{" "}
                    <i className="fas fa-gas-pump"> </i>{" "}
                  </span>{" "}
                  <h3 className="title"> Gas Bill Payment </h3>{" "}
                  <p className="description">
                    FinUnique makes it easy and simple to make a gas cylinder
                    booking with just two clicks.You will no longer have to
                    endure the hassle of waiting in line to make your
                    reservation.You can do it from the comfort of your home at
                    home and earn exciting reward points and cashback.{" "}
                  </p>{" "}
                  <a href="#" className="learn-more">
                    Learn More{" "}
                  </a>{" "}
                </div>{" "}
                <span className="circle-before"> </span>{" "}
              </div>{" "}
            </div>{" "}
            {/* <!-- / End Single Service --> */}{" "}
            {/* <!-- Single Service --> */}{" "}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="content">
                  <span className="icon">
                    {" "}
                    {/* <i className="fas fa-chart-pie"></i> */}{" "}
                    <i className="fas fa-credit-card"> </i>{" "}
                  </span>{" "}
                  <h3 className="title"> Credit Card Bill Payment </h3>{" "}
                  <p className="description">
                    It 's extremely simple and convenient to pay credit card
                    balances on 7 unique.in or the FinUnique Website.All you
                    need just follow the easy steps - Visit the page of credit
                    card payments on FinUnique Click on‘ Proceed’ Complete the
                    form and enter the details for the payment amount Pay the
                    bill{" "}
                  </p>{" "}
                  <a href="#" className="learn-more">
                    Learn More{" "}
                  </a>{" "}
                </div>{" "}
                <span className="circle-before"> </span>{" "}
              </div>{" "}
            </div>{" "}
            {/* <!-- / End Single Service --> */}{" "}
            {/* <!-- Single Service --> */}{" "}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="content">
                  <span className="icon">
                    {" "}
                    {/* <i className="fas fa-laptop-code"></i> */}{" "}
                    <i className="fas fa-tags"> </i>{" "}
                  </span>{" "}
                  <h3 className="title"> FasTag </h3>{" "}
                  <p className="description">
                    When you recharge with Fast - Tag you do not have to wait at
                    toll plazas to make the payment.Once you cross the toll
                    plaza, the required amount will get deducted automatically
                    from your FinUnique wallet or bank account.This option has
                    no expiry date, and you can use it as long as it is not
                    tampered with and readable.{" "}
                  </p>{" "}
                  <a href="#" className="learn-more">
                    Learn More{" "}
                  </a>{" "}
                </div>{" "}
                <span className="circle-before"> </span>{" "}
              </div>{" "}
            </div>{" "}
            {/* <!-- / End Single Service --> */}{" "}
            {/* <!-- Single Service --> */}{" "}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="content">
                  <span className="icon">
                    {" "}
                    {/* <i className="fab fa-500px"></i> */}{" "}
                    <i className="fas fa-hotel"> </i>{" "}
                  </span>{" "}
                  <h3 className="title"> Hotel Booking </h3>{" "}
                  <p className="description">
                    To provide a more enjoyable traveling experience, FinUnique
                    offers the best cheap, most affordable hotel deals to hotel
                    booking clients.Through our partnerships with travel and
                    hotel companies, we have access to hotel rooms across India
                    to accommodate the requirements of every budget.{" "}
                  </p>{" "}
                  <a href="#" className="learn-more">
                    Learn More{" "}
                  </a>{" "}
                </div>{" "}
                <span className="circle-before"> </span>{" "}
              </div>{" "}
            </div>{" "}
            {/* <!-- / End Single Service --> */}{" "}
            {/* <!-- Single Service --> */}{" "}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="content">
                  <span className="icon">
                    {" "}
                    {/* <i className="fas fa-chart-pie"></i> */}{" "}
                    <i className="fas fa-bus"> </i>{" "}
                  </span>{" "}
                  <h3 className="title"> Bus Booking </h3>{" "}
                  <p className="description">
                    Many Indians have the option of buses to travel because of
                    their convenience and available seats.FinUnique lets its
                    customers purchase bus tickets across all major routes in
                    India.Customers can buy bus tickets at discounted rates, the
                    most affordable fares, tatkal book tickets, and more
                    discounts from retailers.{" "}
                  </p>{" "}
                  <a href="#" className="learn-more">
                    Learn More{" "}
                  </a>{" "}
                </div>{" "}
                <span className="circle-before"> </span>{" "}
              </div>{" "}
            </div>{" "}
            {/* <!-- / End Single Service --> */}{" "}
            {/* <!-- Single Service --> */}{" "}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="content">
                  <span className="icon">
                    {" "}
                    {/* <i className="fas fa-laptop-code"></i> */}{" "}
                    <i className="fas fa-train"> </i>{" "}
                  </span>{" "}
                  <h3 className="title"> Rail Ticket </h3>{" "}
                  <p className="description">
                    Rail travel is widely used for shorter and longer journeys
                    in India, and it is the most cost - effective way to
                    travel.FinUnique is a licensed IRCTC partner and can book
                    tickets for customers all around India and earn commissions
                    instantly.{" "}
                  </p>{" "}
                  <a href="#" className="learn-more">
                    Learn More{" "}
                  </a>{" "}
                </div>{" "}
                <span className="circle-before"> </span>{" "}
              </div>{" "}
            </div>{" "}
            {/* <!-- / End Single Service --> */}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
}

export default home;
