<script type="text/javascript">
import Select2 from 'vue3-select2-component';
const axios = require("axios");
import Form from 'vform'
import $ from 'jquery'
const Swal = require('sweetalert2');
import { useRoute } from 'vue-router';
export default {
    props: ['sila'],
    components: {Select2},
    name: 'OurStore',
    data() {
        return {
            id:{},
            search: '',
            instock: '',
            outstock: '',
            name: "",
            CategoryArray:[],
            BrandArray:[],
            Products:false,
            category:'',
            range: '',
            rangeup: '',
            ProductsDiscount:[],
            lang: localStorage.lang,
            SelectedBrand:'',
        }
    },
    mounted(){
        this.getsetup();
        this.GetCategory();
        this.GetBrand();
        this.GetProduct();
        this.GetProductDiscount();
    },
    computed: {
      filterProducts: function () {
        return this.filterProductsByName(
          this.filterProductsByInStock(
            this.filterProductsByOutStock(
                this.filterProductsByBrand(
                  this.filterProductsByRange(
                    this.filterProductsByRangeUp(
                      this.filterProductsByCategory(this.Products)
                    )
                  )
                )
            )
          )
        );
      },
    },
    methods: {
      getsetup(){
          const route = useRoute()
          this.id = route.params.id;
          if(route.query.type == 'brand'){
            this.GetProductByBrandId(route.query.id);
          }
          if(route.query.type == 'category'){
            this.GetProductByCategoryId(route.query.id);
          }
      },
      filterProductsByName: function (products) {
        return this.search
          ? products.filter(
              (product) =>
                !product.name.toLowerCase().indexOf(this.search.toLowerCase())
            )
          : products;
      },
      filterProductsByInStock: function (products) {
        return this.instock
          ? products.filter((product) => product.stock == 1)
          : products;
      },
      filterProductsByOutStock: function (products) {
        return this.outstock
          ? products.filter((product) => product.stock == 0)
          : products;
      },
      filterProductsByCategory: function (products) {
        return this.category
          ? products.filter((product) => product.category_id == this.category)
          : products;
      },
      filterProductsByBrand: function (products) {
        return this.SelectedBrand
          ? products.filter((product) => product.brand_id == this.SelectedBrand)
          : products;
      },
      filterProductsByRange: function (products) {
        return this.range
          ? products.filter((product) => this.range >= product.price )
          : products;
      },
      filterProductsByRangeUp: function (products) {
        return this.rangeup
          ? products.filter((product) => product.price <= this.rangeup)
          : products;
      },
      GetProduct(){
        axios.get("http://admin.phone.2m-sport.com/api/product").then((res)=>{
          this.Products = res.data.data;
        }).catch(function (error) {
            console.error(error);
        });
      },
      GetProductByCategoryId(id){
        axios.get("http://admin.phone.2m-sport.com/api/productbycategory/"+id).then((res)=>{
          if(res.data.status== true){
              console.log(res.data);
              this.Products = res.data.data;
          }
          else{
              Swal.fire({
                  title: 'Category Not Found',
                  timer: 800,
                  icon: 'error',
                  showConfirmButton: false,
              })
          }
        }).catch(function (error) {
            console.error(error);
        });
      },
      GetProductByBrandId(id){
        axios.get("http://admin.phone.2m-sport.com/api/productbybrand/"+id).then((res)=>{
          if(res.data.status== true){
              this.Products = res.data.data;
          }
          else{
              Swal.fire({
                  title: 'Brand Not Found',
                  timer: 800,
                  icon: 'error',
                  showConfirmButton: false,
              })
          }
        }).catch(function (error) {
            console.error(error);
        });
      },
      GetProductDiscount(){
        axios.get("http://admin.phone.2m-sport.com/api/productdiscount").then((res)=>{
          this.ProductsDiscount = res.data.data;
        }).catch(function (error) {
            console.error(error);
        });
      },
      GetCategory(){
        axios.get("http://admin.phone.2m-sport.com/api/category").then((res)=>{
          this.CategoryArray = res.data.data;
        }).catch(function (error) {
            console.error(error);
        });
      },
      GetBrand(){
        axios.get("http://admin.phone.2m-sport.com/api/brand").then((res)=>{
          this.BrandArray = res.data.data;
        }).catch(function (error) {
            console.error(error);
        });
      },
    },
}
</script>
<template>
<div class="breadcrumb mb-0 py-4">
  <div class="container-xxl">
    <div class="row">
      <div class="col-12">
        <p class="text-center mb-0">
          <a class="text-dark" href="/"  v-if="lang == 'en'" >Our Store</a>
          <a class="text-dark" href="/"  v-if="lang == 'kh'" >ផលិតផល</a>
        </p>
      </div>
    </div>
  </div>
</div>
<section class="store-wrapper home-wrapper-2 py-5">
  <div class="container-xxl" style="display: grid;">
    <span>
      <div class="sila-left">
        <div class="grid-1">

          <div class="box-1 card-category">
            <div class="filter-card mb-3">
              <h3 class="filter-title" style="margin-bottom: 27px;">Shop By Categories</h3>
              <div>
                <ul class="ps-0 limit-h" >
                  <div v-on:click="GetProduct()" class="CategoryArray" >
                       All Categories
                  </div>
                  <div v-for="(value, key, index) in CategoryArray" :key="index">
                    <div v-on:click="GetProductByCategoryId(value.id)" class="CategoryArray" >
                        {{ value.name }}
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div class="box-1">
            <div class="filter-card mb-3">
                <h3 class="filter-title">Filter By</h3>
                <div>
                  <h5 class="sub-title">Availablity</h5>
                  <div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="instock" v-model="instock" value="1">
                      <label class="form-check-label" for="" >In Stock</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="outstock" v-model="outstock" value="0">
                      <label class="form-check-label" for="">Out of Stock</label>
                    </div>
                  </div>
                  <h5 class="sub-title">Price</h5>
                  <div class="d-flex align-items-center gap-10">
                    <div class="form-floating" style="width: 100%;">
                      <input type="number" class="form-control" id="range" placeholder="From" v-model="range">
                      <label for="range">Price</label>
                    </div>
                    <!-- <div class="form-floating">
                      <input type="number" class="form-control" id="rangeup" placeholder="To" v-model="rangeup">
                      <label for="rangeup">To</label>
                    </div> -->
                  </div>
                </div>
              </div>
          </div>
          <div class="box-1 card-tag">
            <div class="filter-card mb-3">
              <h3 class="filter-title" style="margin-bottom: 27px;">Product-Brand</h3>
              <div>
                <ul class="ps-0 limit-h">
                  <div v-on:click="GetProduct()" class="CategoryArray" >
                       All Brand
                  </div>
                    <div v-for="(value, key, index) in BrandArray" :key="index">
                      <div v-on:click="GetProductByBrandId(value.id)" class="TagArray" :id="value.id">
                        <a>
                          {{ value.name }}
                        </a>
                      </div>
                    </div>
                </ul>
              </div>
            </div>
          </div>
          <div class="box-1" v-if="ProductsDiscount != false">
            <div class="filter-card mb-3 promotions">
              <h3 class="filter-title">Promotions</h3>
              <div>

                <div v-for="(value, key, index) in ProductsDiscount" :key="index">
                  <a :href="'/product/'+value.id">
                    <div class="random-products mb-3 d-flex">
                        <div class="w-50">
                          <img :src="'http://admin.phone.2m-sport.com/upload/'+value.photo" class="img-fluid" >
                        </div>
                        <div class="w-50">
                          <h5>{{value.name  }}</h5>
                          <b style="text-decoration: line-through;">$ {{value.price  }}</b>
                          <br>
                          <b style="color: red;">$  {{value.discount  }}</b>
                        </div>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="sila-right">
        <div class="filter-sort-grid mb-4 header-product">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center gap-10 product-tag">
                <!-- <select name="" class="form-control form-select" id="" v-model="SelectedBrand">
                  <option value="manual" >Brand</option>
                  <option  v-for="(value, key, index) in BrandArray" :key="index" :value="value.id" >
                      {{ value.name }}
                  </option>
                </select> -->
                <select class="form-control form-select" v-model="SelectedBrand">
                  <option v-for="(value, key, index) in BrandArray" :key="index" :value="value.id">
                    {{ value.name }}
                  </option>
                </select>


                <select name="" class="form-control form-select select-category" id="" v-model="category">
                  <option value="manual" selected>Categories</option>
                  <option  v-for="(value, key, index) in CategoryArray" :key="index" :value="value.id" >{{ value.name }}</option>
                </select>
              </div>
            </div>
          </div>
          <Container>
              <div class="input-group mb-3 input-group-lg">
                <input type="text" v-model="search"  class="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2">
                <span class="input-group-text p-3" id="basic-addon2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="fs-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </span>
              </div>
                <div class="grid-3" data-aos="slide-up">
                  <div class="box" data-aos="zoom-in"  v-for="(product, key, index) in filterProducts" :key="index">
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
    </span>
  </div>
</section>
</template>
<style scoped>
  a {
      color: black !important;
  }
  .TagArray:hover{
    background: #27ad63;
    color: white;
    padding-left: 5px;
  }
  .CategoryArray:hover{
    background: #27ad63;
    color: white;
    padding-left: 5px;
  }
  textarea:focus, input:focus{
      outline: none !important;
      border: #2cbb69 !important;
  }
  .input-group>.form-control:focus {
    transition: all .2s linear;
    border-color: #2cbb69;
    outline: 0;
    box-shadow: inset 0 0 0 1px #2cbb69;
  }
  .limit-h{
      height: 180px;
      overflow: scroll;
  }
  .filter-sort-grid{
    display: none !important;
  }
  .grid-4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .popular-product{
    display: none;
  }
  @media (max-width: 1000px) {
    .popular-product{
      display: block !important;
    }
    .filter-sort-grid{
        display: none !important;
    }
    .sila-right {
      width: 100% !important;
      padding: 5px;
      float: right;
    }
    .sila-left {
      width: 100% !important;
      padding: 5px;
      float: left;
    }
    .promotions{
      display: none !important;
    }
    .grid-1 {
      display: grid;
      grid-template-columns: 1fr  1fr  1fr !important;
    }
    .box-1 {
      border-radius: 5px;
      overflow: hidden;
      padding: 5PX;
    }
  }
  @media (max-width: 900px) {
   .card-tag{
      display: none !important;
    }
    .filter-sort-grid{
        display: block !important;
    }
    .select-category{
      display: none !important;
    }
    .grid-1 {
      display: grid;
      grid-template-columns: 1fr 1fr !important;
    }
    .box-1 {
      border-radius: 5px;
      overflow: hidden;
      padding: 5px;
    }
    .card-category{
      display: unset !important;
    }
  }
  @media (max-width: 700px) {
    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr !important;
    }
    .grid-4 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr!important;
    }
  }
  @media (max-width: 500px) {
    .select-category{
      display: block !important;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr !important;
    }
    .grid-4 {
      display: grid;
      grid-template-columns: 1fr 1fr !important;
    }
    .grid-1 {
      display: grid;
      grid-template-columns: 1fr !important;
    }
    .box-1 {
      border-radius: 5px;
      overflow: hidden;
      padding: 0px;
    }
    .card-category{
      display: none !important;
    }
  }
  @media (max-width: 300px) {
    .grid-1 {
      display: grid;
      grid-template-columns: 1fr !important;
    }
    .box-1 {
      border-radius: 5px;
      overflow: hidden;
      padding: 0px;
    }
  }
  .sila-left {
    width: 25%;
    padding: 5px;
    float: left;

  }
  .sila-right {
    width: 75%;
    padding: 5px;
    float: right;
  }
  select:focus{
    outline: none !important;
    border: solid 2px #2cbb69;
    box-shadow: unset; 
  }
  .grid-1 {
    display: grid;
    grid-template-columns: 1fr ;
  }
  .box-1 {
    border-radius: 5px;
    overflow: hidden;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .box {
    color: #fff;
    border-radius: 5px;
    padding: 5px;
    font-size: 150%;
    overflow: hidden;
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
  .position-relative {
      position: relative!important;
  }
  .box img{
    width: 100%;
    height: 100%;
  }
  .product-card .product-image img {
      -o-object-fit: contain;
      object-fit: contain;
  }
  .img-fluid{
      max-width: 100%;
      height: 100%;
  }
</style>