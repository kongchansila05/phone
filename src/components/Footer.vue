  <script>
  import { defineComponent } from "vue";
  const axios = require("axios");
  if (localStorage.lang) {
        localStorage.lang;
  }
  else{
      localStorage.lang ='kh';
  }
  export default defineComponent({
    name:"FooTer",
    data() {
        return {
            About: '',
            Contact: '',
            Quick: '',
            lang: localStorage.lang,
        }
    },
    mounted(){
        this.GetAbout();
        this.GetContact();
        this.GetQuick();
    },
    methods: {
      GetAbout(){
        axios.get("http://admin.phone.2m-sport.com/api/footerabout").then((res)=>{
          this.About = res.data.data;
        }).catch(function (error) {
            console.error(error);
        });
      },
      GetContact(){
        axios.get("http://admin.phone.2m-sport.com/api/footercontact").then((res)=>{
          this.Contact = res.data.data;
        }).catch(function (error) {
            console.error(error);
        });
      },
      GetQuick(){
        axios.get("http://admin.phone.2m-sport.com/api/footerquick").then((res)=>{
          this.Quick = res.data.data;
        }).catch(function (error) {
            console.error(error);
        });
      }
    },
  });
  </script>
<template>
<div class="green">
  <div class="container-xxl">
      <footer class="py-2 remove-py ">
          <div class="grid-4">
            <div class="box">
              <h4 class="text-white mb-2" v-if="lang == 'kh'" data-aos="fade-down">ព័ត៌មានហាង</h4>
              <h4 class="text-white mb-2" v-if="lang == 'en'" data-aos="fade-down">About Us</h4>
              <div class="footer-link d-flex flex-column" >
                <address class="text-white fs-6" v-for="(value, key, index) in About.slice(0, 1)" :key="index" style="margin-bottom: 6px;">
                  <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="fs-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                    </svg>
                  {{ value.name }}
                </address>
                <address class="text-white fs-6"  v-for="(value, key, index) in About.slice(1, 2)" :key="index">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                    ></path>
                  </svg>
                  {{ value.name }}
                </address>
              </div>
            </div>

            <div class="box">
              <h4 class="text-white mb-2" v-if="lang == 'kh'" data-aos="fade-down">ទាក់ទងមកយើង</h4>
              <h4 class="text-white mb-2" v-if="lang == 'en'" data-aos="fade-down">Contact Us</h4>
              <div>
                <a href="tel:" class=" d-block mb-1 text-white">
                  <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="fs-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z">
                    </path>
                      <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z">
                      </path>
                    </svg> 
                    <span v-if="lang == 'kh'">ទំនាក់ទំនងពត៌មានបន្ថែម:</span>
                    <span v-if="lang == 'en'">Contact More:</span>
                    <br>
                   <div v-for="(value, key, index) in Contact.slice(0, 3)" :key="index">
                    {{ value.name }}
                   </div>
                </a>
                <a href="tel:" class=" d-block mb-1 text-white" v-for="(value, key, index) in Contact.slice(3,4)" :key="index">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="fs-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg" >
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z">
                    </path>
                </svg> 
                {{ value.name }}
                </a>
               
                <div class="social_icons d-flex align-items-center">
                  <a href="https://www.facebook.com/presidentphoneshop" style="padding: 2px;">
                    <img src="/upload/facebook.png" alt="">
                  </a>
                  <a href="https://www.messenger.com/t/493639704413923" style="padding: 2px;">
                    <img src="http://presidentphoneshop.com/Content/social-media/messanger.png" alt="">
                  </a>
                  <a href="https://t.me/PresidentPhoneShop" style="padding: 2px;">
                    <img src="http://presidentphoneshop.com/Content/social-media/telegram.png" alt="">
                  </a>
                  <a href="" style="padding: 2px;">
                    <img src="http://presidentphoneshop.com/Content/social-media/line.png" alt="">
                  </a>
                </div>
              </div>
            </div>
           
            <div class="box">
              <h4 class="text-white mb-2" data-aos="fade-down">Quick Links</h4>
              <div class="footer-link d-flex flex-column" >
                <a class="text-white mb-1" v-for="(value, key, index) in Quick" :key="index">
                {{ value.name }}
                </a>
              </div>
            </div>
          </div>
    </footer>

    <footer class="py-4 remove-p4">
        <div class="row">
          <div class="col-12">
            <p class="text-center mb-0 text-white copyright">© 2023; President Phone Shop. Designed by AIS Technology</p>
          </div>
        </div>
    </footer>
  </div>
</div>
</template>
<style scoped>
  .green{
      background-color: #046A3A;
  }
  .grid-4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr  ;
  }
  footer {
      background-color: transparent;
  }
  .box {
    color: #fff;
    overflow: hidden;
    padding: 10px;

  }  
  @media (max-width: 1000px) {
    .grid-4 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr !important;
    }
    .box {
      color: #fff;
      overflow: hidden;
      padding: 5px;
      font-size: 10px !important;
    }  
    .green{
        background-color: #046A3A;
    }
    .remove-py{
      padding-bottom: 0px !important;
    }
    .remove-p4{
        padding-top: 10px!important;
        padding-bottom: 10px!important;
    }
    address {
        margin-bottom: 0px !important;
        font-size: 9px !important;
    }
    .box h4{
      font-size: 14px !important;
    }
    .copyright{
      font-size: 9px !important;
    }
  
  }
  @media (max-width: 800px) {
    .grid-4 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr !important;
    }
    .box {
      color: #fff;
      overflow: hidden;
      padding: 5px;
      font-size: 10px !important;
    }  
    .green{
        background-color: #046A3A;
    }

    .gap-30 {
        gap: 10px;
    }
    .social_icons a img{
        width: 15px !important;
        height: 15px !important;
    }
    .remove-py{
      padding-bottom: 0px !important;
    }
    .remove-p4{
        padding-top: 10px!important;
        padding-bottom: 10px!important;
    }
    address {
        margin-bottom: 0px !important;
        font-size: 9px !important;
    }
    .box h4{
      font-size: 14px !important;
    }
    .copyright{
      font-size: 9px !important;
    }
  }
  @media (max-width: 700px) {
    .grid-4 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr !important;
    }
    .box {
      color: #fff;
      overflow: hidden;
      padding: 5px;
      font-size: 10px !important;
    }  
    .green{
        background-color: #046A3A;
    }
    .gap-30 {
        gap: 10px;
    }
    .social_icons a img{
        width: 15px !important;
        height: 15px !important;
    }
    .remove-py{
      padding-bottom: 0px !important;
    }
    .remove-p4{
        padding-top: 10px!important;
        padding-bottom: 10px!important;
    }
    address {
        margin-bottom: 0px !important;
    }

  }
  @media (max-width: 600px) {
    .grid-4 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr !important;
    }
    .box {
      color: #fff;
      overflow: hidden;
      padding: 5px;
      font-size: 10px !important;
    }  
    .green{
        background-color: #046A3A;
    }
    .gap-30 {
        gap: 10px;
    }
    .social_icons a img{
        width: 15px !important;
        height: 15px !important;
    }
    .remove-py{
      padding-bottom: 0px !important;
    }
    .remove-p4{
        padding-top: 10px!important;
        padding-bottom: 10px!important;
    }
    address {
        margin-bottom: 0px !important;
        font-size: 9px !important;
    }
    .box h4{
      font-size: 14px !important;
    }
    .copyright{
      font-size: 9px !important;
    }
  }
  @media (max-width: 500px) {
    .grid-4 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr !important;
    }
    .box {
      color: #fff;
      overflow: hidden;
      padding: 5px;
      font-size: 7.5px !important;
    }  
    .box h4{
      font-size: 10px !important;
    }
    .green{
        background-color: #046A3A;
    }
    address{
      font-size: 7px !important;
    }
    .social_icons a img{
        width: 15px !important;
        height: 15px !important;
    }
    .gap-30 {
        gap: 10px;
    }
    a svg{
      font-size: 10px !important;
    }
    address svg {
      font-size: 10px !important;
    }
    .copyright{
      font-size: 10px !important;
    }
    .remove-py{
      padding-bottom: 0px !important;
    }
    .remove-p4{
        padding-top: 10px!important;
        padding-bottom: 10px!important;
    }
    address {
        margin-bottom: 0px !important;
        font-style: normal;
        line-height: inherit;
    }
  }
  @media (max-width: 400px) {
    .remove-py{
      padding-bottom: 0px !important;
    }
    .remove-p4{
        padding-top: 10px!important;
        padding-bottom: 10px!important;
    }
    address {
        margin-bottom: 0px !important;
        font-style: normal;
        line-height: inherit;
    }
    .grid-4 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr !important;
    }
    .box {
      color: #fff;
      overflow: hidden;
      padding: 5px;
      font-size: 5px !important;
    }  
    .box h4{
      font-size: 10px !important;
    }
    .green{
        background-color: #046A3A;
    }
    address{
      font-size: 5px !important;
    }
    .social_icons a img{
        width: 10px !important;
        height: 10px !important;
    }
    .gap-30 {
        gap: 10px;
    }
    a svg{
      font-size: 10px !important;
    }
    address svg {
      font-size: 10px !important;
    }
    .copyright{
      font-size: 7px !important;
    }
  }
  .box h4:hover{
    color:#e6155d !important;
  }
  .social_icons a img{
    width: 25px;
    height: 25px;
  }
</style>