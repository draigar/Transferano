<template>
    <div class="home row">
        <div class="flex justify-around topPad">
          <div class="genStyle transferanoTopText">Transferano</div>
          <div class="genStyle exchangeText"><span>Exchange</span><span class="leftPad">Forum</span></div>
          <div class="genStyle btnText"><span class="rightPad">Log in</span><button class="regBtn">Register</button></div>
        </div>


        <div class="flex flex-row-reverse" style="padding-top:70px;">
          <div class= "rightPad90"></div>
          <div class= "rightPad90"></div>

          <div class= "btcRadius">
          <div class="flex justify-start topPad10">
              <img class="topPad10" src="~/assets/img/bitcoinImg.png" width=60px; height=60px;/> <span class="topPad20">Bitcoin</span>
              <span class="btnPad"><button class="regBtn">Select New Currency</button></span>
          </div>
          </div>

        </div>

      
            <div class="flex justify-around topPad">
            <div class="desc leftPad">Download the application so you can improve your experience of buying and selling digital assets.</div>
            <div class="desc">Download the application so you can improve your experience of buying and selling digital assets.</div>

            <div class="desc">Download the application so you can improve your experience of buying and selling digital assets.</div>

          </div>
    </div>

</template>

<style>

.desc{
  width: 487px;
height: 52px;

font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
/* or 162% */


/* bg */

color: #F9F9F9;
}
.home {
    background-image: url('assets/img/background.png');
    
    height:100%;
    width:100%;
    background-size:auto;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}
.topPad{
  padding-top:40px;
}

.topPad20{
  padding-top:18px;
  margin-left:5px;
  font-family: Nunito Sans;
font-size: 24px;
line-height: 150%;
/* identical to box height, or 36px */


color: #000000;
}

.btnPad{
  padding-top:10px;
  margin-left:300px;
}



.topPad10{
  padding-left:10px;
  padding-top:8px;

}

.topPad150{
  padding-top:150px;
}

.leftPad{
  padding-left:20px;
}

.leftPadBtn{
  padding-left:40px;
}

.genStyle{
font-family: Nunito Sans;
font-style: normal;
line-height: 150%;
color: #FFFFFF;  
}

.transferanoTopText{
font-weight: normal;
font-size: 36px;
}

.exchangeText{
padding-top: 15px;
font-weight: normal;
font-size: 18px;
}
.btnText{
font-weight: bold;
font-size: 18px;
}
.regBtn{
width: 180px;
height: 50px;

/* complementary color */

background: #2AAAC0;
border-radius: 8px;
}
.padLeftRight{
  padding-left:30px;
  padding-right:30px;
}

.rightPad{
  padding-right:30px;
}

.rightPad90{
  padding-right:90px;
}


.digAssetsInfo{
  font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
/* or 162% */

width: 487px;
height: 52px;
/* bg */

color: #F9F9F9;
}

.btcRadius{
  width: 670px;
height: 80px;

/* white */

background: #FFFFFF;
border-radius: 8px;



}



</style>
