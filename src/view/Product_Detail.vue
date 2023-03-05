<script>
    import { useRoute } from 'vue-router';
    const axios = require("axios");
    export default {
      name: "ProductDetail",
      data() {
          return {
          id:{},
          Products:{},
          Image:{},
          clickStatus:false
          }
      },
      mounted(){
          this.getsetup();
          this.GetProduct();
      },
      methods: {
        getsetup(){
            const route = useRoute()
            this.id = route.params.id;
        },
        GetProduct(){
          axios.get("http://admin.phone.2m-sport.com/api/product/"+this.id).then((res)=>{
            this.Products = res.data.data;
            console.log(res.data.data);
          }).catch(function (error) {
              console.error(error);
          });
        },
        ClickImage(id){
          this.clickStatus = true;
          this.Image = id;
        },
      },
    };
</script>
<template>
<div v-for="(value, key, index) in Products" :key="index">
  <div class="breadcrumb mb-0 py-4">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <p class="text-center mb-0">
            <a class="text-dark" href="/">Home &nbsp;</a>/ {{ value.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <section class="main-product-wrapper py-2 home-wrapper-2">
    <div class="container-xxl">
      <div  class="grid-2">
        <div class="row">
          <div class="col-12 limit-img" style="height:575px;">
                  <img v-if="clickStatus == false" :src="'http://admin.phone.2m-sport.com/upload/'+value.photo" style="width: 100% ; height: 100%; border-radius: 10px;" />
                  <img v-else :src="'http://admin.phone.2m-sport.com/upload/'+Image" style="width: 100% ; height: 100%; border-radius: 10px;" />
          </div>
            <div class="grid-4" style="padding: 5px;">
              <div v-if="value.photo1" @click="ClickImage(value.photo)"><img :src="'http://admin.phone.2m-sport.com/upload/'+value.photo" class="img-fluid" alt=""  style="height: 100%; " ></div>
              <div v-if="value.photo1" @click="ClickImage(value.photo1)"><img :src="'http://admin.phone.2m-sport.com/upload/'+value.photo1" class="img-fluid" alt="" style="height: 100%; " ></div>
              <div v-if="value.photo2" @click="ClickImage(value.photo2)"><img :src="'http://admin.phone.2m-sport.com/upload/'+value.photo2" class="img-fluid" alt="" style="height: 100%; " ></div>
              <div v-if="value.photo3" @click="ClickImage(value.photo3)"><img :src="'http://admin.phone.2m-sport.com/upload/'+value.photo3" class="img-fluid" alt="" style="height: 100%; " ></div>
            </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="main-product-details">
              <div class="border-bottom">
                <h3 class="title">
                  {{ value.name }}
                </h3>
              </div>
              <div class="border-bottom py-3">
                <p v-if="value.discount" class="price">
                    PRICE : <span style="text-decoration: line-through;">${{ value.price }}</span>
                  <span style="color: red;"> ${{ value.discount }}</span>
                </p>
                <p v-else class="price">
                    PRICE : <span>${{ value.price }}</span>
                </p>
              </div>
              <div class="py-3">
                <!-- <div class="d-flex gap-10 align-items-center my-2">
                  <h3 class="product-heading">Type :</h3>
                  <p class="product-data">{{ value.type }}</p>
                </div> -->
                <div v-if="value.tag_name" class="d-flex gap-10 align-items-center my-2">
                  <h3 class="product-heading">Brand :</h3>
                  <p class="product-data">{{ value.tag_name }}</p>
                </div>
                <div v-if="value.category_name" class="d-flex gap-10 align-items-center my-2">
                  <h3 class="product-heading">Category :</h3>
                  <p class="product-data">{{ value.category_name }}</p>
                </div>
                <div class="d-flex gap-10 align-items-center my-2">
                  <h3 class="product-heading">Availablity :</h3>
                  <p class="product-data" v-if="value.stock == 1">In Stock</p>
                  <p class="product-data" v-else style="color: red;">Out Stock</p>
                </div>
                <div v-if="value.memory" class="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 class="product-heading">Memory :</h3>
                  <div class="d-flex flex-wrap gap-15">
                    <span class="badge border border-1 bg-white text-dark border-secondary">
                      {{ value.memory }}
                    </span>
                  </div>
                </div>
                <div class="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 class="product-heading">Color :</h3>
                  <ul class="colors ps-0">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div  iv class="d-flex align-items-center gap-15">
                  <div>
                    <a href=""
                      ><svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="fs-5 me-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <desc></desc>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="6" cy="6" r="2"></circle>
                        <circle cx="18" cy="18" r="2"></circle>
                        <path d="M11 6h5a2 2 0 0 1 2 2v8"></path>
                        <polyline points="14 9 11 6 14 3"></polyline>
                        <path d="M13 18h-5a2 2 0 0 1 -2 -2v-8"></path>
                        <polyline points="10 15 13 18 10 21"></polyline>
                      </svg>
                      Add to Compare</a
                    >
                  </div>
                  <div>
                    <a href=""
                      ><svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        class="fs-5 me-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"
                        ></path>
                      </svg>
                      Add to Wishlist</a
                    >
                  </div>
                </div>
                <div class="d-flex gap-10 flex-column my-3">
                  <h3 class="product-heading">Shipping &amp; Returns :</h3>
                  <p class="product-data">
                    Free shipping and returns available on all orders! <br/>
                    We ship all US domestic orders within
                    <b>5-10 business days!</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section v-if="value.detail" class="description-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <h4>Description</h4>
          <div class="bg-white p-3">
            <p>{{ value.detail }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>
<style scoped>
  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
      grid-template-columns: 1fr 1fr  1fr 1fr!important;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr !important ;
    }
    .limit-img{
      height: 700px !important;
    }
    .img-fluid{
      height: 250px !important;
    }
  }
  @media (max-width: 900px) {
    .limit-img{
      height: 650px !important;
    }
    .grid-6 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr !important;
    }
    .img-fluid{
      height: 180px !important;
    }
  }
  @media (max-width: 700px) {
    .limit-img{
      height: 550px !important;
    }
    .grid-6 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr !important;
    }
    .img-fluid{
      height: 150px !important;
    }
  }
  @media (max-width: 600px) {
    .limit-img{
      height: 500px !important;
    }
    .grid-6 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr !important;
    }
    .img-fluid{
      height: 150px !important;
    }
  }
  @media (max-width: 500px) {
    .limit-img{
      height: 350px !important;
    }
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
    .img-fluid{
      height: 100px !important;
    }
  }
  @media (max-width: 400px) {
    .img-fluid{
      height: 80px !important;
    }
    .limit-img{
      height: 300px !important;
    }
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