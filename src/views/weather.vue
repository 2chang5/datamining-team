<template>
  <div>
    <!--알고리즘 선택하는 영역-->
    <div>
    <h1 class="title">원하는 알고리즘을 고르세요!</h1>
    <div>
      <input type="radio" id="one" value="OneRule" name="algorithm" v-model="algorithmtype">
      <label for="one">one rule</label>
      <input type="radio" id="two" value="NaiveBayesian" name="algorithm" v-model="algorithmtype">
      <label for="two">Naive Bayesian</label>
      <input type="radio" id="three" value="Tree" name="algorithm" v-model="algorithmtype">
      <label for="three">Decision Tree</label>
      <br>
      <div id='result'>선택: {{ algorithmtype }}</div>
    </div>
    <!--새로운 데이터 입력부-->
    </div>
    <h1 class="attribute">1.outlook</h1>
    <div class='box'>
      <input type="radio" id="one" value="sunny" name="outlook" v-model="outlook">
      <label for="one">sunny</label>
      <input type="radio" id="two" value="rainy" name="outlook" v-model="outlook">
      <label for="two">rainy</label>
      <input type="radio" id="three" value="overcast" name="outlook" v-model="outlook">
      <label for="three">overcast</label>
    </div>
    <h1 class="attribute">2.temperature</h1>
    <div class='box'>
      <label for="one">temperture(0~100 사이값 입력)   :     </label>  
      <input type="text" id="one" v-model="temperture">
    </div>
    <h1 class="attribute">3.humidity</h1>
    <div class='box'>
      <label for="one">humidity(0~100 사이값 입력)   :     </label>  
      <input type="text" id="one" v-model="humidity">
    </div>
    <h1 class="attribute">4.windy</h1>
    <div class='box'>
      <input type="radio" id="one" value="true" name="windy" v-model="windy">
      <label for="one">true</label>
      <input type="radio" id="two" value="false" name="windy" v-model="windy">
      <label for="two">false</label>
    </div>
    <!--결과 및 정확도 표시-->
    <my-class v-bind:myClass="myClass" v-on:pass="finish"></my-class>
    <div class="acc">정확도 : {{ accuracy }}</div>
  </div>
</template>

<script>
import MyClass from '../components/MyClass'

export default {
  components: {
    MyClass,
  },
  data() {
    //입력받은 데이터 담는 변수
    return{
      windy: '',
      humidity: '',
      temperture:'',
      outlook:'',
      myClass:'',
      algorithmtype:'',
      accuracy:'',

      //naive관련 변수
      likehoodYes:'',
      naiveYes:0.63,
      naiveYesOutlook:'',
      naiveYesTemperture:'',
      naiveYesHumidity:'',
      naiveYesWindy:'',
      likehoodNo:'',
      naiveNo:0.38,
      naiveNoOutlook:'',
      naiveNoTemperture:'',
      naiveNoHumidity:'',
      naiveNoWindy:'',
      probabilityYes:'',
      probabilityNo:'',
      biggest:'',
    }
  },
  methods:{
    calculation:function(stdDev,mean,newday){
      return (1/(Math.sqrt(2*Math.PI)*stdDev)*Math.pow(Math.E,(-(Math.pow(newday-mean,2))/(2*Math.pow(stdDev,2)))))
    },
    finish:function(){
      if(this.algorithmtype==''){
        window.alert('알고리즘을 선택하세요');
        
        //one rule 결과도출
      }else if(this.algorithmtype=='OneRule'){
        this.accuracy='42.857%';
        if(this.temperture!=''){
        this.temperture=parseInt(this.temperture)
        }
        if(this.humidity!=''){
        this.humidity=parseInt(this.humidity)
        }
        if(this.outlook==''){
          window.alert('outlook을 입력하세요');
        }else if(this.temperture==''){
          window.alert('temperture을 입력하세요');
        }else if(isNaN(this.temperture)){
          window.alert('temperture 값을 숫자로 입력하세요');
          this.temperture=''
          this.humidity=''
        }else if(0>this.temperture||100<this.temperture){
          window.alert('temperture의 입력범위는 0~100까지입니다.')
          this.temperture=''
        }else if(this.humidity==''){
          window.alert('humidity를 입력하세요');
        }else if(isNaN(this.humidity)){
          window.alert('humidity 값을 숫자로 입력하세요 입력하세요');
          this.humidity=''
        }else if(0>this.humidity||100<this.humidity){
          window.alert('humidity의 입력범위는 0~100까지입니다.')
          this.humidity=''
        }else if(this.windy==''){
          window.alert('windy를 입력하세요');
        }else if(this.outlook=='sunny'){
          this.myClass='no'
        }else if(this.outlook=='overcast'){
          this.myClass='yes'
        }else if(this.outlook=='rainy'){
          this.myClass='yes'
        }

      //naive bayesian 결과도출
      }else if(this.algorithmtype=='NaiveBayesian'){
        this.accuracy='64.285%'
        if(this.temperture!=''){
        this.temperture=parseInt(this.temperture)
        }
        if(this.humidity!=''){
        this.humidity=parseInt(this.humidity)
        }
        if(this.outlook==''){
          window.alert('outlook을 입력하세요');
        }else if(this.temperture==''){
          window.alert('temperture을 입력하세요');
        }else if(isNaN(this.temperture)){
          window.alert('temperture 값을 숫자로 입력하세요');
          this.temperture=''
          this.humidity=''
        }else if(0>this.temperture||100<this.temperture){
          window.alert('temperture의 입력범위는 0~100까지입니다.')
          this.temperture=''
        }else if(this.humidity==''){
          window.alert('humidity를 입력하세요');
        }else if(isNaN(this.humidity)){
          window.alert('humidity 값을 숫자로 입력하세요 입력하세요');
          this.humidity=''
        }else if(0>this.humidity||100<this.humidity){
          window.alert('humidity의 입력범위는 0~100까지입니다.')
          this.humidity=''
        }else if(this.windy==''){
          window.alert('windy를 입력하세요');
        }
        if(this.outlook=='sunny'){
          this.naiveYesOutlook=3/12
          this.naiveNoOutlook=4/8
        }else if(this.outlook=='overcast'){
          this.naiveYesOutlook=5/12
          this.naiveNoOutlook=1/8
        }else if(this.outlook=='rainy'){
          this.naiveYesOutlook=4/12
          this.naiveNoOutlook=3/8
        }
        if(this.windy=='true'){
          this.naiveYesWindy=4/11
          this.naiveNoWindy=4/7
        }else if(this.windy=='false'){
          this.naiveYesWindy=7/11
          this.naiveNoWindy=3/7
        }
        this.naiveYesTemperture=this.calculation(5.2304,72.9697,this.temperture)
        this.naiveNoTemperture=this.calculation(7.384,74.8364,this.temperture)
        this.naiveYesHumidity=this.calculation(9.8023,78.8395,this.humidity)
        this.naiveNoHumidity=this.calculation(7.2424,86.1111,this.humidity)

        this.likehoodYes=this.naiveYes*this.naiveYesOutlook*this.naiveYesTemperture*this.naiveYesHumidity*this.naiveYesWindy;
        this.likehoodNo=this.naiveNo*this.naiveNoOutlook*this.naiveNoTemperture*this.naiveNoHumidity*this.naiveNoWindy;
        this.probabilityYes=this.likehoodYes/(this.likehoodYes+this.likehoodNo)
        this.probabilityNo=this.likehoodNo/(this.likehoodYes+this.likehoodNo)
        this.biggest=Math.max(this.probabilityYes,this.probabilityNo)

        if(this.biggest==this.probabilityYes){
          this.myClass='yes'
        }else if(this.biggest==this.probabilityNo){
          this.myClass='no'
        }

      //tree 결과도출
      }else if(this.algorithmtype=='Tree'){
        this.accuracy='64.285%'
        if(this.temperture!=''){
        this.temperture=parseInt(this.temperture)
        }
        if(this.humidity!=''){
        this.humidity=parseInt(this.humidity)
        }
        if(this.outlook==''){
          window.alert('outlook을 입력하세요');
        }else if(this.temperture==''){
          window.alert('temperture을 입력하세요');
        }else if(isNaN(this.temperture)){
          window.alert('temperture 값을 숫자로 입력하세요');
          this.temperture=''
          this.humidity=''
        }else if(0>this.temperture||100<this.temperture){
          window.alert('temperture의 입력범위는 0~100까지입니다.')
          this.temperture=''
        }else if(this.humidity==''){
          window.alert('humidity를 입력하세요');
        }else if(isNaN(this.humidity)){
          window.alert('humidity 값을 숫자로 입력하세요 입력하세요');
          this.humidity=''
        }else if(0>this.humidity||100<this.humidity){
          window.alert('humidity의 입력범위는 0~100까지입니다.')
          this.humidity=''
        }else if(this.windy==''){
          window.alert('windy를 입력하세요');
        }else if(this.outlook=='overcast'){
          this.myClass='yes'
        }else if(this.outlook=='rainy'&&this.windy=='false'){
          this.myClass='yes'
        }else if(this.outlook=='rainy'&&this.windy=='true'){
          this.myClass='no'
        }else if(this.outlook=='sunny'&&this.humidity<=75){
          this.myClass='yes'
        }else if(this.outlook=='sunny'&&this.humidity>75){
          this.myClass='no'
        }

      }
    }
  },
}
</script>

<style>
.box {
  color: #2d3436;
  margin: 50px;
}
.title {
  color: #00b894;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
#result {
  position: relative;
  margin: 40px;
  font-size: 20px;
}
.acc{
  margin: 40px;
}
</style>