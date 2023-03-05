<script>
const axios = require("axios");
import MarqueeText from '../components/MarqueeText.vue'
import Vue3Marquee from 'vue3-marquee'
export default {
  components: {
    MarqueeText,
    Vue3Marquee,
  },
  name: 'HoMe',
  data() {
    return {
      lang: localStorage.lang,
      BennerHome:[],
      ProductSpecialFour:[],
      Brand:[],
      Category:[],
      ProductByCategory:[],
    }
  },
  mounted(){
      this.GetBennerHome();
      this.getProductSpecialFour();
      this.Getbrand();
      this.GetCategory();
      this.GetProductBybrand();
      this.GetProductByCategory();
  },
  methods: {

    GetProductBybrand(){
      axios.get("http://admin.phone.2m-sport.com/api/productbybrand").then((res)=>{
        this.ProductBybrand = res.data.product;
      }).catch(function (error) {
          console.error(error);
      });
    },
    GetProductByCategory(){
      axios.get("http://admin.phone.2m-sport.com/api/productbycategory").then((res)=>{
        this.ProductByCategory = res.data;
      }).catch(function (error) {
          console.error(error);
      });
    },
    Getbrand(){
      axios.get("http://admin.phone.2m-sport.com/api/brand").then((res)=>{
          this.Brand = res.data.data;
      }).catch(function (error) {
          console.error(error);
      });
    },
    getProductSpecialFour(){
      axios.get("http://admin.phone.2m-sport.com/api/productspecialfour").then((res)=>{
          this.ProductSpecialFour = res.data.data;
      }).catch(function (error) {
          console.error(error);
      });
    },
    GetCategory(){
      axios.get("http://admin.phone.2m-sport.com/api/category").then((res)=>{
          this.Category = res.data.data;
      }).catch(function (error) {
          console.error('false');
      });
    },
    GetBennerHome(){
      axios.get("http://admin.phone.2m-sport.com/api/bennerhome").then((res)=>{
          this.BennerHome = res.data.data;
      }).catch(function (error) {
          console.error(error);
      });
    },
    brandclick(data){
      this.$router.push({
        path: '/ourstore',
        param:data,
        query: {
          id: data,
          type: 'brand'
        }
      });
    },
    categoryclick(data){
      this.$router.push({
        path: '/ourstore',
        param:data,
        query: {
          id: data,
          type: 'category'
        }
      });
    },
  }
}
</script>
<template>
  <!-- <img src="/upload/benner/benner.png" alt="" style="max-width: 100%;"  data-aos="zoom-out"> -->
  <div v-for="(value, key, index) in BennerHome.slice(0, 1)" :key="index">
    <img :src="'http://admin.phone.2m-sport.com/upload/'+value.photo" alt="" style="max-width: 100%;"  data-aos="zoom-out">
  </div>
  <div class="container-xxl">
    <Container class1="marque-wrapper home-wrapper-2 py-2">
        <div class="py-2"></div>
        <div class="grid-6"  data-aos="zoom-out-left">

          <div class="box sila" data-aos="slide-up" v-for="(value, key, index) in ProductSpecialFour" :key="index"> 
           
            <a class="product-card position-relative" :href="'/product/'+value.id">
                <div class="product-details">
                  <h6 class="brand">New Arrival</h6>
                  <!-- <h6 class="brand" v-else style="color: red;">Out Stock</h6> -->
                </div>
                <div class="product-image">
                  <img :src="'http://admin.phone.2m-sport.com/upload/'+value.photo" class="img-fluid" alt="product image">
                  <img :src="'http://admin.phone.2m-sport.com/upload/'+value.photo" class="img-fluid" alt="product image">
                </div>
                <div class="product-details">
                  <!-- <h6 class="brand" v-if="value.stock == 1"> In Stock</h6>
                  <h6 class="brand" v-else style="color: red;">Out Stock</h6> -->
                  <h5 class="product-title">{{ value.name }}</h5>
                </div>
                <p v-if="value.discount">
                    <span style="text-decoration: line-through;">${{ value.price }}</span>
                    <span style="color: red;"> ${{ value.discount }}</span>
                </p>
                <p v-else>
                    <span>${{ value.price }}</span>
                </p>
            </a>

          </div>

        </div>
        <div class="py-2"></div>
        <div class="col-12">
            <h3 class="font-size-name" style="text-align: center;" data-aos="fade-down">
              <!-- <p class="font-size-name" style="margin-top: 12px;line-height: 1.0834933333;font-weight: 600;letter-spacing: 0em;">You Can Select a Category</p> -->
              You Can Select a Category
            </h3>
        </div>
          <div class="grid-6">
            <div class="box"  v-for="(value, key, index) in Category" :key="index" style="background-color: #cad9ec;cursor: pointer">
              <a @click="categoryclick(value.id)" data-aos="zoom-in" style="margin: 5px;">
                <img :src="'http://admin.phone.2m-sport.com/upload/'+value.photo" alt="" class="img-fluid">
                <div class="tag-name">{{ value.name }}</div>
              </a>
            </div>
          </div>
        <!-- </section> -->
        <div class="py-2"></div>  
        <!-- Brand -->
          <div class="row">
            <div class="col-12">
              <div class="marquee-inner-wrapper card-wrapper">
                <marquee width="100%" direction="left"  Scrollamount=4>
                      <!-- <span class="mx-4" v-for="(value, key, index) in Brand" :key="index" @click="$router.push('/ourstore/'+value.id)" style="cursor: pointer;"> -->
                      <span class="mx-4" v-for="(value, key, index) in Brand" :key="index" @click="brandclick(value.id)" style="cursor: pointer;">
                          <img :src="'http://admin.phone.2m-sport.com/upload/'+value.photo" alt="brand" style="width: 10%;"/>
                      </span>
                </marquee>
              </div>
            </div>
          </div>
        <!--End Brand -->
      </Container>
  </div>
  <div class="py-2"></div>
  <!-- <div class="col-12">
      <img data-aos="zoom-in" src="https://www.apple.com/v/watch/bb/images/overview/ultra/hero_ultra__bjuq9fkxb9ci_large_2x.jpg" alt="" style="width: 100%; height: 100%;">
  </div> -->
  <!-- <div v-for="(value, key, index) in BennerHome.slice(1, 2)" :key="index">
    <img :src="'http://admin.phone.2m-sport.com/upload/'+value.photo" alt="" style="max-width: 100%;"  data-aos="zoom-in">
  </div> -->
  <!-- <section class="main-product-wrapper py-2 home-wrapper-2">
    <div class="container-xxl">
      <Container v-for="(data, key, index) in ProductByTag" :key="index">
          <h3 class="section-heading" style="text-align: center;" data-aos="slide-up">
                <p class="font-size-name" style="margin-top: 12px;line-height: 1.0834933333;font-weight: 600;letter-spacing: 0em;">
                  {{ data.name }} 
                </p>
            </h3>
          <div class="grid-06" data-aos="slide-up">
            <div class="box" data-aos="zoom-in"  v-for="(product, key, index) in data.data" :key="index">
              <a class="product-card position-relative" :href="'/product/'+product.id">
                <div class="product-image">
                  <img :src="'http://admin.phone.2m-sport.com/upload/'+product.photo" class="img-fluid" alt="product image">
                  <img :src="'http://admin.phone.2m-sport.com/upload/'+product.photo" class="img-fluid" alt="product image">
                </div>
                <div class="product-details">
                  <h6 class="brand" v-if="product.stock == 1"> In Stock</h6>
                  <h6 class="brand" v-else style="color: red;">Out Stock</h6>
                  <h5 class="product-title">{{ product.name }}</h5>
                  <p class="price">${{ product.price }}</p>
                  <p v-if="product.discount" class="price">
                    <span style="text-decoration: line-through;">${{ product.price }}</span>
                    <span style="color: red;"> ${{ product.discount }}</span>
                  </p>
                  <p v-else class="price">
                    <span>${{ product.price }}</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Container>
    </div>
  </section> -->
  <!-- <section class="main-product-wrapper home-wrapper-2">
    <div class="col-12">
      <div class="phone">
        <div v-for="(value, key, index) in BennerHome.slice(2, 3)" :key="index">
          <img :src="'http://admin.phone.2m-sport.com/upload/'+value.photo" alt="" style="max-width: 100%;"  data-aos="zoom-in">
        </div>
      </div>
    </div>
  </section> -->
  <div v-for="(data, key, index) in ProductByCategory.product" :key="index">
        <img :src="'http://admin.phone.2m-sport.com/upload/'+data.benner" alt="" style="max-width: 100%;"  data-aos="zoom-in">
    <section class="main-product-wrapper py-2 home-wrapper-2">
    <div class="container-xxl">
          <h3 class="font-size-name" style="text-align: center;" data-aos="slide-up">
                <!-- <p class="font-size-name" style="margin-top: 12px;line-height: 1.0834933333;font-weight: 600;letter-spacing: 0em;"> -->
                  {{ data.name }} 
                <!-- </p> -->
            </h3>
          <div class="grid-06" data-aos="slide-up">
            <div class="box" data-aos="zoom-in"  v-for="(product, key, index) in data.data" :key="index">
              <a class="product-card position-relative" :href="'/product/'+product.id">
                <div class="product-image">
                  <img :src="'http://admin.phone.2m-sport.com/upload/'+product.photo" class="img-fluid" alt="product image">
                  <img :src="'http://admin.phone.2m-sport.com/upload/'+product.photo" class="img-fluid" alt="product image">
                </div>
                <div class="product-details">
                  <h6 class="brand" v-if="product.stock == 1"> In Stock</h6>
                  <h6 class="brand" v-else style="color: red;">Out Stock</h6>
                  <h5 class="product-title">{{ product.name }}</h5>
                  <p v-if="product.discount" class="price">
                    <span style="text-decoration: line-through;">${{ product.price }}</span>
                    <span style="color: red;"> ${{ product.discount }}</span>
                  </p>
                  <p v-else class="price">
                    <span>${{ product.price }}</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
    </div>
  </section>
  </div>
  
 
  <!-- <div v-for="(value, key, index) in BennerHome.slice(3, 4)" :key="index">
    <img :src="'http://admin.phone.2m-sport.com/upload/'+value.photo" alt="" style="max-width: 100%;"  data-aos="zoom-in">
  </div>

  <section class="main-product-wrapper py-2 home-wrapper-2">
      <div class="container-xxl">
          <Container v-for="(data, key, index) in ProductByTablet" :key="index">
            <h3 class="section-heading" style="text-align: center;" data-aos="slide-up">
                  <p class="font-size-name" style="margin-top: 12px;line-height: 1.0834933333;font-weight: 600;letter-spacing: 0em;">
                    {{ data.name }} 
                  </p>
              </h3>
            <div class="grid-06" data-aos="slide-up">
              <div class="box" data-aos="zoom-in"  v-for="(product, key, index) in data.data" :key="index">
                <a class="product-card position-relative" :href="'/product/'+product.id">
                  <div class="product-image">
                    <img :src="'http://admin.phone.2m-sport.com/upload/'+product.photo" class="img-fluid" alt="product image">
                    <img :src="'http://admin.phone.2m-sport.com/upload/'+product.photo" class="img-fluid" alt="product image">
                  </div>
                  <div class="product-details">
                    <h6 class="brand" v-if="product.stock == 1"> In Stock</h6>
                    <h6 class="brand" v-else style="color: red;">Out Stock</h6>
                    <h5 class="product-title">{{ product.name }}</h5>
                    <p v-if="product.discount" class="price">
                      <span style="text-decoration: line-through;">${{ product.price }}</span>
                      <span style="color: red;"> ${{ product.discount }}</span>
                    </p>
                    <p v-else class="price">
                      <span>${{ product.price }}</span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </Container>
      </div>
  </section> -->

</template>
<style scoped>
  .product-card .product-details h5 {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        -webkit-box-orient: vertical;
    }
    .sila .product-card p span {
       margin-bottom: 10px !important;
       font-size: 15px !important;
    }
    .sila .product-card .product-details h5{
        font-size: 15px !important;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        -webkit-box-orient: vertical;
        margin-bottom: 0px !important;
        padding-top: 7px !important;
    }
    .sila:hover .product-card p span{
      color: black !important;
    }
    .sila .product-card .product-details h6{
        font-size: 15px;
    }
    .sila .product-card p {
       margin-bottom: 0px !important;
       font-size: 15px !important;
    }
    .green{
      color: #0b8c4c;
    } 
    .tag-name{
      font-size:15px; 
      color: black; 
      text-align: center;
    }

   .grid-6 .box p {
        margin-bottom: 1.5em;
        color: #3a3a3a;
        text-align: center;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        -webkit-box-orient: vertical;
    }
    .grid-6 .box:hover{
      background: #2cbb69 !important;
    }
    .grid-6 .box:hover img{
      transform: scale(1.05);
      transition: all 0.3s ease-out;
      overflow: hidden;
    }
    .grid-6 .box:hover a p{
      color: white;
    }
    .grid-6 .box {
      box-shadow: rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 16px 0px;
      margin: 5px;
    }
    .grid-6 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }

  .font-size-name{
    font-size: 55px;
  }
  .grid-06 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
    transform: scale(1.08);
    transition: all 0.4s ease-out;
  }

  .product-card .product-image {
        height: 150px;
    }
  @media (max-width: 1200px) {
    .font-size-name{
      font-size: 40px !important;
    }
  }
  @media (max-width: 1100px) {
    .font-size-name{
      font-size: 35px !important;
    }
  }
  @media (max-width: 1000px) {
    .font-size-name{
      font-size: 25px !important;
    }
    .grid-06 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr ;
    }
    .grid-4 {
      display: grid;
      grid-template-columns: 1fr 1fr !important;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr !important ;
    }
    .sila .product-card .product-image{
        height: 70px !important;
    }
    .tag-name{
      font-size:9px !important; 
      color: black; 
      text-align: center;
    }
    .sila .product-card {
        padding-left: 15px !important;
        padding-right: 15px !important;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
    }
    .sila .product-card .product-details h5{
        font-size: 9px !important;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        -webkit-box-orient: vertical;
        margin-bottom: 0px !important;
        padding-top: 7px !important;
    }
    .sila .product-card .product-details h6{
        font-size: 9px;
    }
    .sila .product-card p {
       margin-bottom: 0px !important;
       font-size: 9px !important;
    }
    .sila .product-card p span {
       margin-bottom: 0px !important;
       font-size: 9px !important;
    }
  
  }
  @media (max-width: 700px) {
    .font-size-name{
      font-size: 20px !important;
    }
    .grid-06 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr ;
    }
    .grid-6 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr !important;
    }
    .sila .product-card .product-image{
        height: 70px !important;
    }
    .tag-name{
      font-size:9px !important; 
      color: black; 
      text-align: center;
    }
    .sila .product-card {
        padding-left: 15px !important;
        padding-right: 15px !important;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
    }
    .sila .product-card .product-details h5{
        font-size: 9px !important;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        -webkit-box-orient: vertical;
        margin-bottom: 0px !important;
        padding-top: 7px !important;
    }
    .sila .product-card .product-details h6{
        font-size: 9px;
    }
    .sila .product-card p {
       margin-bottom: 0px !important;
       font-size: 9px !important;
    }
    .sila .product-card p span {
       margin-bottom: 0px !important;
       font-size: 9px !important;
    }
    .mx-4 img{
      width: 20% !important;
    }
  }
  @media (max-width: 600px) {
    .font-size-name{
      font-size: 18px !important;
    }
    .grid-6 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr !important;
    }

    .sila .product-card .product-image{
        height: 70px !important;
    }
    .tag-name{
      font-size:9px !important; 
      color: black; 
      text-align: center;
    }
    .sila .product-card {
        padding-left: 15px !important;
        padding-right: 15px !important;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
    }
    .sila .product-card .product-details h5{
        font-size: 9px !important;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        -webkit-box-orient: vertical;
        margin-bottom: 0px !important;
        padding-top: 7px !important;
    }
    .sila .product-card .product-details h6{
        font-size: 9px;
    }
    .sila .product-card p {
       margin-bottom: 0px !important;
       font-size: 9px !important;
    }
    .sila .product-card p span {
       margin-bottom: 0px !important;
       font-size: 9px !important;
    }
    .mx-4 img{
      width: 20% !important;
    }
  }
  @media (max-width: 500px) {
    .font-size-name{
      font-size: 15px !important;
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
    .grid-06 .box .product-card .product-image{
        height: 90px ;
    }
    .sila .product-card .product-image{
        height: 70px !important;
    }
    .tag-name{
      font-size:9px !important; 
      color: black; 
      text-align: center;
    }
    .sila .product-card {
        padding-left: 15px !important;
        padding-right: 15px !important;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
    }
    .sila .product-card .product-details h5{
        font-size: 9px !important;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        -webkit-box-orient: vertical;
        margin-bottom: 0px !important;
        padding-top: 7px !important;
    }
    .sila .product-card .product-details h6{
        font-size: 9px;
    }
    .sila .product-card p {
       margin-bottom: 0px !important;
       font-size: 9px !important;
    }
    .sila .product-card p span {
       margin-bottom: 0px !important;
       font-size: 9px !important;
    }
    .mx-4 img{
      width: 20% !important;
    }
  }
  @media (max-width: 400px) {
    .mx-4 img{
      width: 20% !important;
    }
    .card-wrapper {
        padding: 10px !important; 
        border-radius: 10px !important;
    }
    .tag-name{
      font-size:9px !important; 
      color: black; 
      text-align: center;
    }
    .sila .product-card {
        padding-left: 15px !important;
        padding-right: 15px !important;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
    }
    .sila .product-card .product-details h5{
        font-size: 8px !important;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        -webkit-box-orient: vertical;
        margin-bottom: 0px !important;
        padding-top: 5px !important;
    }
    .sila .product-card .product-details h6{
        font-size: 6px;
    }
    .sila .product-card p {
       margin-bottom: 0px !important;
       font-size: 4px !important;
    }
    .sila .product-card p span {
       margin-bottom: 0px !important;
       font-size: 7px !important;
    }


    .grid-06 .box .product-card .product-image{
        height: 50px;
    }
    .grid-06 .box .product-details h6{
      font-size: 7px;
    }
    .grid-06 .box .product-details h5{
      font-size: 10px;
    }
    .grid-06 .box .product-details p{
      font-size: 10px !important;
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
        height: 50px;
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
