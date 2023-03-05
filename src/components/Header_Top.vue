<script>
    if (localStorage.lang) {
        localStorage.lang;
      }
      else{
        localStorage.lang ='kh';
      }
    export default {
      data() {
        return { 
          lang: localStorage.lang,
          hover: false,
        }
      },
      methods: {
        reloadPage() {
          window.location.reload();
        },
        goToGame(text){
          this.hover = false,
          localStorage.lang = text;
          this.lang = text;
          this.reloadPage();
        },
      },
    }
</script>

<template> 
    <div class="display-flex-sb" style="padding-top: 10px;">
      <div class="display-flex-center">
        <div class="home-nav__icon-wrapper">
          <router-link to="/" class="nav-item nav-link ">
          <img src="http://presidentphoneshop.com/Content/Upload/Company/ba7ffc69-390c-4701-9cef-9b13d536fe5b.png" alt="Nature" class="responsive" width="150">
          </router-link>
        </div>
      </div>
      <div class="display-flex-center">
        <div class="v-menu d-none d-sm-flex" style="padding-right: 5px;">
                <!-- <input type="text" class="form-control m-hidden" required id="email" name="email"  placeholder="បញ្ចូលឈ្មោះអ្នកប្រើ"  style="max-width: 190px;" > -->
                <div class="input-group input-group-lg">
                <input type="text" class="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2">
                <span class="input-group-text p-3" id="basic-addon2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="fs-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </span>
              </div>
        </div>
        <div class="language-wrapper"  @mouseover="hover = true" @mouseleave="hover = false">
            <div class="langauge-selection__wrapper">
                <div class="langauge-selection">
                <i class="fas fa-globe  " style="color: white;font-size: 25px;"></i>
                </div>
            </div>
            <div class="language-list__wrapper" :class="{ selected: hover }">
                <div class="language-list__container" @click="goToGame('kh')">
                <div class="language-list__name">
                    <img class="img-contain language-list__name-icon" src="http://kh88bet.net/assets/front/images/flag/kh.svg">
                    <span>ភាសាខ្មែរ</span> 
                    <span style="padding-left: 10px;"><img src="/icon/active.png" alt="" v-if="lang == 'kh'"></span> 
                </div>
                <div class="language-list__tick"></div>
                </div>
                <div class="language-list__container" @click="goToGame('en')">
                <div class="language-list__name">
                    <img class="img-contain language-list__name-icon" src="http://kh88bet.net/assets/front/images/flag/en.svg">
                    <span>English</span> 
                    <span style="padding-left: 10px;"><img src="/icon/active.png" alt="" v-if="lang == 'en'"></span> 
                </div>
                <div class="language-list__tick"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
    .input-group-text {
        background-color: white !important;
    }
  textarea:focus, input:focus{
      outline: none !important;
      border: white !important;
  }
  .input-group>.form-control:focus {
    transition: all .2s linear;
    border-color: white;
    outline: 0;
    box-shadow: inset 0 0 0 1px white;
  }
.language-list__wrapper .language-list__container:hover{
  background: #0c8e4487 !important;
  border-radius: 5px;
}
.app-redirect__icon-bounce_live{
    width: 1.4rem;
    position: absolute;
    top: -0rem;
    left: -1.3rem;
}
.home-nav__match-wrapper {
    position: relative;
    z-index: 3;
}
.display-flex-sb {
    align-items: center;
    justify-content: space-between;
}

.display-flex, .display-flex-align-baseline, .display-flex-align-center, .display-flex-align-end, .display-flex-align-start, .display-flex-center, .display-flex-fe, .display-flex-fs, .display-flex-justify-center, .display-flex-sa, .display-flex-sb, .display-flex-sb-t, .display-flex-se {
    display: flex;
}
.app-redirect__icon-bounce{
    width: 3.125rem;
    position: absolute;
    top: -0.8rem;
    left: -2rem;
}
.display-flex-center {
    align-items: center;
    justify-content: center;
}
.pb-0 {
    padding-bottom: 0;
}
.nav-pill__wrapper {
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
    white-space: nowrap;
}
.language-wrapper{
    position: relative;
}
.langauge-selection__wrapper{
    width: 2.5rem;
    display: flex;
    justify-content: flex-end;
}
.img-contain {
    -o-object-fit: contain;
    object-fit: contain;
}
.langauge-selection,.mobile-default-avatar-wrapper {
    position: relative;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    padding: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey-60);
    cursor: pointer;
}
.language-list__name span{
    color: white;
}
.language-list__wrapper{
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 0.1rem;
    min-width: 12rem;
    background-color: #2bbc69;
    padding: 0.5rem 0.3rem;
    border-radius: 0.5rem;
    transform: scale(0);
    transform-origin: 11.5rem 0;
    transition: all .3s;
}
.language-list__container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    transition: all .3s;
}
.language-list__tick{
    width: 1rem;
    height: 1rem;
}
.language-list__name{
    display: flex;
    align-items: center;
    font-size: .88rem;
}
.language-list__name-icon{
    -o-object-fit: contain;
    object-fit: contain;
    margin-right: 0.7rem;
    width: 1.5rem;
    height: 1.5rem;
}
.app-redirect{
    font-size: .625rem;
    line-height: .875rem;
    font-weight: 700;
    margin-right: 0.75rem;
    display: flex;
    align-items: center;
    position: relative;
}
.app-redirect img{
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
}
.app-redirect__icon{
    width: 2.375rem;
}
.selected .home-nav__child-indicator {
    display: block!important;
}
.home-nav__child {
    color: #fff;
    margin-right: 1rem;
    transition: all .3s;
    font-size: .88rem;
    cursor: pointer;
    transition: all .25s;
}
.relative {
    position: relative;
}
.langauge-selection, .mobile-default-avatar-wrapper {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    padding: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2bbc69;
    cursor: pointer;
}
.language-list__wrapper.selected{
    transform: scale(1);
}
</style>

