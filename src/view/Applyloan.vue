<script>
const axios = require("axios");
export default {
  name: "ApplyLoan",
  data() {
    return {
      BennerApplyLoan:[],
    }
  },
  mounted(){
      this.GetBennerApplyLoan();
  },
  methods: {
    GetBennerApplyLoan(){
      axios.get("http://admin.phone.2m-sport.com/api/bennerapplyloan").then((res)=>{
          this.BennerApplyLoan = res.data.data;
      }).catch(function (error) {
          console.error(error);
      });
    },
  }
};
</script>
<template>
    <div class="breadcrumb mb-0 py-4" data-aos="fade-down">
        <div class="container-xxl">
            <div class="row">
                <div class="col-12">
                <p class="text-center mb-0">
                   How to Get a Money View Mobile Phone Loan
                </p>
                </div>
            </div>
        </div>
    </div>
    <section class="main-product-wrapper py-5 home-wrapper-2">
        <div v-for="(value, key, index) in BennerApplyLoan.slice(0, 1)" :key="index">
          <img :src="'http://admin.phone.2m-sport.com/upload/'+value.photo" alt="" style="max-width: 100%;"  data-aos="zoom-out">
        </div>
        <div hidden class="container">
            <div  class="grid-2">
                <div class="box">
                    <div class="row applyLoanClass d-flex  align-items-center justify-content-center">
                        <div class="col-lg-3 col-md-4 col-6">
                            <div class="d-flex justify justify-content-center align-items-center">
                                <img src="https://d31bgfoj87qaaj.cloudfront.net/Group%2038-1.png" alt="icon" width="100%" height="100" data-aos="zoom-in">
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-8 col-6 padding-left-right" data-aos="zoom-out-right">
                            <p class="mv-why-us green_color text-left"><strong>Check Eligibility</strong></p>
                            <p class="mv-why-us text-left">Visit the Money View website or download the app. Add the details required and find your eligibility!</p>
                        </div>
                    </div>
                    <div class="row applyLoanClass d-flex flex-row-reverse flex-md-row align-items-center justify-content-center">
                        <div class="col-lg-3 col-md-4 col-6">
                            <div class="d-flex justify justify-content-center align-items-center">
                                <img src="https://d31bgfoj87qaaj.cloudfront.net/Group%2038.png" alt="icon" width="100%" height="100" data-aos="zoom-in">
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-8 col-6 padding-left-right" data-aos="zoom-out-right">
                            <p class="mv-why-us green_color text-right text-md-left"><strong>Select Loan Tenure</strong></p>
                            <p class="mv-why-us text-right text-md-left">Select the loan amount and repayment term of your choice based on the options given</p>
                        </div>
                    </div>
                    <div class="row applyLoanClass d-flex  align-items-center justify-content-center">
                        <div class="col-lg-3 col-md-4 col-6">
                            <div class="d-flex justify justify-content-center align-items-center">
                                <img src="https://d31bgfoj87qaaj.cloudfront.net/Group%2044.png" alt="icon" width="100%" height="100" data-aos="zoom-in">
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-8 col-6 padding-left-right" data-aos="zoom-out-right">
                            <p class="mv-why-us green_color text-left"><strong>Upload Documents</strong></p>
                            <p class="mv-why-us text-left">Upload the required documents online. We only need three.</p>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <img data-aos="zoom-in" src="https://d31bgfoj87qaaj.cloudfront.net/choose_sc reen.png" alt="mobile_img" class="w100"/>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>

    .green_color strong{
        color: #0b8c4c;
        line-height: normal;
        margin-bottom: 4px;
    }
    .mv-why-us {
        font-size: 15px;
        font-weight: 400 !important;
        margin-top: 0px;
        color: #3a3a3a;
        margin-bottom: 10px;
        line-height: 1.75;
    }
    .applyLoanClass {
        padding: 32px 0;
    }
  .grid-6 .box p {
      margin-bottom: 1.5em;
      color: #3a3a3a;
      text-align: center;
  }
  .grid-6 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .font-size-name{
    font-size: 48px;
  }
  span.button {
    display: block;
    margin: 12px 0 0 0;
    font-size: 14px;
    font-size: 1.4rem;
    line-height: 1.14286em;
  }
  .button {
    padding: 13px;
    color: #fff;
    font-family: Ubuntu,Kantumruy,sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1em;
    width: 100%;
    background-color: #009a3e;
    -webkit-box-shadow: 0 1px 6px 0 rgb(0 0 0 / 30%);
    box-shadow: 0 1px 6px 0 rgb(0 0 0 / 30%);
    display: block;
    text-align: center;
    position: relative;
    text-transform: initial;
    border-radius: 2px;
    -webkit-transition: all .1s ease-in-out;
    transition: all .1s ease-in-out;
  }
  span.button:after {
    content: "";
    display: block;
    background-color: #fff;
    width: 40px;
    height: 17px;
    position: absolute;
    right: -8px;
    top: -8px;
    -webkit-transform: rotate(25deg);
    transform: rotate(25deg);
  }
  .box:hover .product-details span.button{
    background-color: #e6155d;
  }

  .tile-buy .tile-copy {
      margin-top: 25px;
  }

  .typography-tile-copy {
      font-size: 21px;
      line-height: 1.381002381;
      font-weight: 400;
      letter-spacing: .011em;
      font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  }
  .typography-tile-headline {
      font-size: 48px;
      line-height: 1.0834933333;
      font-weight: 600;
      letter-spacing: -0.003em;
      font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  }
  .large-centered {
      margin-left: auto;
      margin-right: auto;
  }
  .large-8 {
      flex-basis: 66.6666666667%;
      max-width: 66.6666666667%;
  }
  .box img{
    width: 100%;
    height: 100%;
  }
  .zoom:hover img{
    transform: scale(1.05);
    transition: all 0.3s ease-out;
    overflow: hidden;
  }
  .famous-content h5 {
      font-size: 13px;
      line-height: 20px;
      font-weight: 400px;
      color: white;
      margin-bottom: 7px;
      text-transform: uppercase;
  }
  .famous-card img {
      border-radius: 10px;
  }
  .img-fluid {
      max-width: 100%;
      height: 100%;
  }
  .small-banner-content {
      top: 25%;
      left: 10%;
  }
  .main-banner-content {
      top: 15%;
      left: 5%;
  }
  .famous-card{
    box-shadow: 0 0 10px #0000001a;
    border-radius: 10px;
  }
  .shadow-sila{
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    padding: 0px !important;
  }
  .famous-card .famous-content {
      top: 10%;
      left: 5%;
  }
  .position-relative {
      position: relative!important;
  }
  .mx-4 img{
    border-radius: 10px;
  }
  .mx-4:hover img{
    transform: scale(1.05);
    transition: all 0.4s ease-out;
  }
  @media (max-width: 1000px) {
    .grid-4 {
      display: grid;
      grid-template-columns: 1fr 1fr !important;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr !important ;
    }
  
  }
  @media (max-width: 700px) {
    .grid-6 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr !important;
    }
  }
  @media (max-width: 600px) {
    .grid-6 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr !important;
    }
  }
  @media (max-width: 500px) {
    .main-banner-content h4 {
        font-size: 20px;
        font-weight: 400;
        line-height: 0px;
        color: var(--color-bf4800);
        margin: 0 0 0px;
        letter-spacing: 0.3px;
        text-transform: uppercase;
    }
    .main-banner-content h5 {
        font-size: 30px;
        line-height: 60px;
        letter-spacing: 0px;
        font-weight: 500;
        text-transform: none;
    }
    .main-banner-content p {
        font-size: 19px;
        line-height: 0px;
        letter-spacing: 0.4;
    }
    .button{
      padding: 20px;
      font-size: 16px;
      font-size: 1.2rem;
      width: 70%;
    }
    .small-banner-content h4 {
        font-size: 8px;
        font-weight: 400;
        line-height: 24px;
        margin: 0px 0 -10px;
        letter-spacing: 0.3px;
        text-transform: uppercase;
    }
    .small-banner-content h5 {
      font-size: 12px;
      line-height: 20px;
      text-transform: none;
      letter-spacing: unset;
    }
    .small-banner-content p {
        font-size: 12px;
        line-height: unset;
    }

    .famous-content h5{
        font-size: 10px;
        line-height: 20px;
        font-weight: 400px;
        color: white;
        margin-bottom: 7px;
        text-transform: uppercase;
    }
    .famous-content h6 {
        font-size: 17px;
        line-height: 20px;
        font-weight: 500;
        color: white;
    }
    .famous-content p {
        font-size: 15px;
        line-height: 10px;
        font-weight: 100;
        color: white;
    }
    span.button{
        display: block;
        margin: 12px 0 0 0;
        font-size: 10px;
        line-height: 1.14286em;
        padding: 10px;
    }
    span.button:after {
        content: "";
        display: block;
        background-color: #fff;
        width: 25px;
        height: 10px;
        position: absolute;
        right: -8px;
        top: -8px;
        transform: rotate(25deg);
    }
    .grid-6 .box p {
        font-size: 10px !important;
    }
    .grid-6 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr !important;
    }
  }
  @media (max-width: 400px) {
    .main-banner-content h4 {
        font-size: 10px;
        font-weight: 400;
        line-height: 0px;
        color: var(--color-bf4800);
        margin: 0 0 0px;
        letter-spacing: 0.3px;
        text-transform: uppercase;
    }
    .main-banner-content h5 {
        font-size: 20px;
        line-height: 40px;
        letter-spacing: 0px;
        font-weight: 500;
        text-transform: none;
    }
    .main-banner-content p {
        font-size: 15px;
        line-height: 0px;
        letter-spacing: 0.4;
    }
    .button{
      padding: 9px;
      font-size: 16px;
      font-size: 1rem;
      width: 70%;
    }
    .small-banner-content h4 {
        font-size: 5px;
        font-weight: 400;
        line-height: 24px;
        margin: 0px 0 -10px;
        letter-spacing: 0.3px;
        text-transform: uppercase;
    }
    .small-banner-content h5 {
      font-size: 8px;
      line-height: 12px;
      text-transform: none;
      letter-spacing: unset;
    }
    .small-banner-content p {
        font-size: 9px;
        line-height: unset;
    }
    .famous-content h5{
        font-size: 5px;
        line-height: 20px;
        font-weight: 400px;
        color: white;
        margin-bottom: 7px;
        text-transform: uppercase;
    }
    .famous-content p {
        font-size: 7px;
        line-height: 10px;
        font-weight: 100;
        color: white;
    }
    .famous-content h6 {
        font-size: 9px;
        line-height: 1px;
        font-weight: 500;
        color: white;
    }

    .font-size-name{
      font-size: 30px;
    }
    .product-card .product-image {
        height: 150px;
    }
    .product-card .product-details h6 {
        font-size: 9px;
    }
    .product-card .product-details h5 {
        font-size: 11px;
    }
    .product-card .product-details p.price {
        font-size: 11px;
    }
    span.button{
        display: block;
        margin: -1px 0 0 0;
        font-size: 14px;
        font-size: 0.5rem;
        line-height: 1.14286em;
    }
    span.button:after {
        content: "";
        display: block;
        background-color: #fff;
        width: 15px;
        height: 11px;
        position: absolute;
        right: -8px;
        top: -8px;
        transform: rotate(25deg);
    }
    .grid-6 .box p {
        font-size: 10px !important;
    }
    .grid-6 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr !important;
    }

  }
  .grid-small-2 {
    display: grid;
    grid-template-columns: 1fr 1fr ;
  }
  .box-small {
    color: #fff;
    border-radius: 5px;
    padding: 5px;
    font-size: 150%;
    overflow: hidden;
  }  
  .grid-4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5px;
  }
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-gap: 5px;
  }
  .box {
    color: #fff;
    border-radius: 5px;
    padding: 5px;
    font-size: 150%;
    overflow: hidden;
  }

  .mx-4 {
    margin-right: 1.5rem!important;
    margin-left: 1.5rem!important;
  }
 .sila{
        white-space: nowrap;
  }
  .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
  }
  .overlay::before, .overlay::after {
      background: linear-gradient(to right, var(--gradient-color));
      content: "";
      height: 100%;
      position: absolute;
      width: var(--gradient-width);
      z-index: 2;
  }
  .overlay::after {
      right: 0;
      top: 0;
      transform: rotateZ(180deg);
  }
</style>