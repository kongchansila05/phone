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
  name:"AboutUs",
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
  <div class="breadcrumb mb-0 py-4" data-aos="fade-down">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <p class="text-center mb-0">
            <a class="text-dark" v-if="lang == 'en'"> Contact Us</a>
            <a class="text-dark" v-if="lang == 'kh'"> ទាក់ទងមកយើង</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <section class="contact-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12" data-aos="zoom-in-up">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.781705029182!2d104.89992081526816!3d11.567500947255091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095172c6b58c4d%3A0x851b6c6e94c5e160!2sPresident%20Phone%20Shop!5e0!3m2!1sen!2skh!4v1676108655057!5m2!1sen!2skh" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="row mt-5">

          <div data-aos="zoom-out" class="grid-2 contact-inner-wrapper">
           
            <div class="box">
              <h3 class="contact-title mb-4" data-aos="zoom-out-right" v-if="lang == 'en'" >Contact</h3>
              <h3 class="contact-title mb-4" data-aos="zoom-out-right" v-if="lang == 'kh'" >ទាក់ទង</h3>
              <form action="" class="d-flex flex-column gap-15">
                <div data-aos="zoom-out-right">
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div data-aos="zoom-out-right">
                  <input type="email" class="form-control" placeholder="Email" />
                </div>
                <div data-aos="zoom-out-right">
                  <input type="tel" class="form-control" placeholder="Mobile Number" />
                </div>
                <div data-aos="zoom-out-right">
                  <textarea name="" id="" class="w-100 form-control" cols="30" rows="4" placeholder="Comments">
                  </textarea>
                </div>
                <div data-aos="zoom-out-right"><button class="button border-0">Submit</button></div>
              </form>
            </div>

            <div class="box">
              <h3 class="contact-title mb-4" data-aos="zoom-out-left" v-if="lang == 'en'" >Get in touch with us</h3>
              <h3 class="contact-title mb-4" data-aos="zoom-out-left" v-if="lang == 'kh'" >ទាក់ទងមកយើងខ្ញុំ</h3>
              <div>
                <ul class="ps-0">
                  <li class="mb-3 d-flex gap-15 align-items-center" data-aos="zoom-out-left">
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
                    <p class="mb-0" v-for="(value, key, index) in About.slice(0, 1)" :key="index">{{ value.name }}</p>
                  </li>
                  <li class="mb-3 d-flex gap-15 align-items-center" data-aos="zoom-out-left">
                    <svg style="font-size: 2rem!important;" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                      ></path>
                    </svg>
                    <address class="mb-0" v-for="(value, key, index) in About.slice(1, 2)" :key="index">
                      {{ value.name }}
                    </address>
                  </li>
                  <li class="mb-3 d-flex gap-15 align-items-center" data-aos="zoom-out-left">
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
                      <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
                    </svg>
                      <a href="tel:">
                        <div v-for="(value, key, index) in Contact.slice(0, 3)" :key="index">
                          {{ value.name }}
                        </div>
                      </a>
                  </li>
                  <li class="mb-3 d-flex gap-15 align-items-center" data-aos="zoom-out-left" v-for="(value, key, index) in Contact.slice(3, 4)" :key="index">
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
                      <a :href="'mailto:'+value.name" >
                        {{ value.name }}
                      </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
    .contact-inner-wrapper > div {
        width: 100%;
    }
    .contact-inner-wrapper {
        border-radius: 15px;
        background-color: white;
    }
    .contact-title{
        color: #0b8c4c;
    }
    .button{
      background-color: #0b8c4c;
    }
    .grid-2{
      display: grid;
      grid-template-columns: 1fr 1fr ;
    }
    .box {
      color: #fff;
      border-radius: 5px;
      padding: 5px;
      overflow: hidden;
    }
    address, a, p {
        color: #777777;
    }
    li svg{
      color:black;
    }
    @media (max-width: 700px) {
    .grid-2{
      display: grid;
      grid-template-columns: 1fr;
    }
  }
</style>
