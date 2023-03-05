<script>
    import Header_Top from '../components/Header_Top.vue'
    if (localStorage.lang) {
        localStorage.lang;
    }
    else{
        localStorage.lang ='kh';
    }
    export default {
        name:'HeaDer',
        components: {
            Header_Top
        },
        data() {
            return {
            lang: localStorage.lang,
            hover: true,
            }
        },
    }
</script>
<template>
<div class="green">
    <div class="container-xxl">
        <Header_Top/>
        <header class="px-0 v-toolbar v-toolbar--flat sila" style="padding-top:10px;padding-bottom:10px"> 
            <span class="sila">
                <router-link to="/" class="nav-link-example p-r-5px">
                    <button type="button" class="button btn btn-lg nav__item">
                        <span class="v-btn__content">
                            <P v-if="lang == 'kh'" style="font-size: 17px;">ទំព័រដើម</P>
                            <P v-if="lang == 'en'" style="font-size: 17px;">HOME</P>
                        </span>
                    </button>
                </router-link>

                <router-link to="/ourstore" class="nav-link-example p-r-5px">
                    <button type="button" class="button btn btn-lg nav__item">
                        <span class="v-btn__content">
                            <P v-if="lang == 'kh'" style="font-size: 17px;">បញ្ជីផលិតផល</P>
                            <P v-if="lang == 'en'" style="font-size: 17px;">OUR STORE</P>
                        </span>
                    </button>
                </router-link>

                <router-link to="/promotions" class="nav-link-example p-r-5px">
                    <button type="button" class="button btn btn-lg nav__item">
                        <span class="v-btn__content">
                            <P v-if="lang == 'kh'" style="font-size: 17px;">ប្រម៉ូសិន</P>
                            <P v-if="lang == 'en'" style="font-size: 17px;">PROMOTIONS</P>
                        </span>
                    </button>
                </router-link>
                <router-link to="/applyloan" class="nav-link-example p-r-5px">
                    <button type="button" class="button btn btn-lg nav__item">
                        <span class="v-btn__content">
                            <P v-if="lang == 'kh'" style="font-size: 17px;">ស្នើសុំបង់រំលោះ</P>
                            <P v-if="lang == 'en'" style="font-size: 17px;">APPLY LOAN</P>
                        </span>
                    </button>
                </router-link>
                <router-link to="/aboutus" class="nav-link-example p-r-5px">
                    <button type="button" class="button btn btn-lg nav__item">
                        <span class="v-btn__content">
                            <P v-if="lang == 'kh'" style="font-size: 17px;">អំពីយើង</P>
                            <P v-if="lang == 'en'" style="font-size: 17px;">ABOUT US</P>
                        </span>
                    </button>
                </router-link>
            </span>
        </header>
    </div>
    <!-- <div id="popup_footer">
        <div class="footer-contact">
            <span class="mx-2" data-aos="zoom-in">
                <img src="http://presidentphoneshop.com/Content/Upload/Brand/f50d373b-76f0-4bcb-9379-8c2bb42c39dc.png" alt="brand" style="width: 50px; height: 50px;"/>
            </span>
            <span class="mx-2" data-aos="zoom-in">
                <img src="http://presidentphoneshop.com/Content/Upload/Brand/1e843556-b1b1-4905-8f53-9400b45b79da.png" alt="brand" style="width: 50px; height: 50px;"/>
            </span>
            <span class="mx-2" data-aos="zoom-in">
                <img src="http://presidentphoneshop.com/Content/Upload/Brand/d6ba6c94-0e8f-436f-bb5d-7a7b206ab28c.jpg" alt="brand" style="width: 50px; height: 50px;"/>
            </span>
            <span class="mx-2" data-aos="zoom-in">
                <img src="http://presidentphoneshop.com/Content/Upload/Brand/99e126e5-68c1-460a-a0e6-8ae4585e6e41.jpg" alt="brand" style="width: 50px; height: 50px;"/>
            </span>
            <span class="mx-2" data-aos="zoom-in">
                <img src="http://presidentphoneshop.com/Content/Upload/Brand/e5d8667f-9780-4607-b057-0aee8bab287f.jpg" alt="brand" style="width: 50px; height: 50px;"/>
            </span>
            <span class="mx-2" data-aos="zoom-in">
                <img src="http://presidentphoneshop.com/Content/Upload/Brand/bac23cfb-cdb0-4926-badc-4c20b23829cf.jpg" alt="brand" style="width: 50px; height: 50px;"/>
            </span>
        </div>
    </div> -->
</div>
</template>
<style scoped>
    #popup_footer .footer-contact {
        position: fixed;
        bottom: -0%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        text-align: center;
    }
    .footer-contact{
        mix-width: 100%;
    }
   .p-r-5px{
       padding-right: 5px;
   }
    .btn {
        --bs-btn-border-color: user-select: none;;
    }
    p {
        margin-top: 0;
        margin-bottom: 0;
    }
    .green{
        background-color: #046A3A;
    }
    .button{
        box-shadow:unset;
    }
    .button:hover{
        border-radius: 5px;
        font-weight: 800;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;
        justify-content: center!important;
        align-items: center!important;
        margin: 0 auto!important;
        transition: all .3s ease-in-out!important;
        background: radial-gradient(50.43% 23.75% at 50.43% 0,#65ffc4 0,hsla(0,0%,100%,0) 100%),radial-gradient(65% 65% at 50.43% 0,#3a7266ba 0,rgba(255,225,150,0) 100%),linear-gradient(180deg,#43ec78,#2bbd6fba 99.48%)!important;
    }
    .v-btn__content{
        font-family: 'Roboto','Battambang' !important;
        font-size: 15px;
        font-weight: bold;
        color: #fff;
    }
    .sila{
        overflow-x: auto;
        white-space: nowrap;
    }
    .sila::-webkit-scrollbar {
     display: none;
    }
    a.router-link-exact-active {
        color: #fff;
        border-radius: 2px;
    }
    a.router-link-exact-active .button{
        border-radius: 5px;
        font-weight: 800;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;
        justify-content: center!important;
        align-items: center!important;
        margin: 0 auto!important;
        transition: all .3s ease-in-out!important;
        background: radial-gradient(50.43% 23.75% at 50.43% 0,#65ffc4 0,hsla(0,0%,100%,0) 100%),radial-gradient(65% 65% at 50.43% 0,#3a7266ba 0,rgba(255,225,150,0) 100%),linear-gradient(180deg,#43ec78,#2bbd6fba 99.48%)!important;
    }
</style>