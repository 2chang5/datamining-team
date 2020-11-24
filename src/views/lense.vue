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
      <input type="radio" id="four" value="Association" name="algorithm" v-model="algorithmtype">
      <label for="four">Association rule</label>
      <br>
      <div id='result'>선택: {{ algorithmtype }}</div>
    </div>
    <!--새로운 데이터 입력부-->
    </div>
    <h1 class="attribute">1.age</h1>
    <div class='box'>
      <input type="radio" id="one" value="young" name="age" v-model="age">
      <label for="one">young</label>
      <input type="radio" id="two" value="pre-presbyopic" name="age" v-model="age">
      <label for="two">pre-presbyopic</label>
      <input type="radio" id="three" value="presbyopic" name="age" v-model="age">
      <label for="three">presbyopic</label>
    </div>
    <h1 class="attribute">2.spectacle-prescrip</h1>
    <div class='box'>
      <input type="radio" id="one" value="myope" name="spectacle-prescrip" v-model="spectaclePrescrip">
      <label for="one">myope</label>
      <input type="radio" id="two" value="hypermetrope" name="spectacle-prescrip" v-model="spectaclePrescrip">
      <label for="two">hypermetrope</label>
    </div>
    <h1 class="attribute">3.astigmatism</h1>
    <div class='box'>
      <input type="radio" id="one" value="yes" name="astigmatism" v-model="astigmatism">
      <label for="one">yes</label>
      <input type="radio" id="two" value="no" name="astigmatism" v-model="astigmatism">
      <label for="two">no</label>
    </div>
    <h1 class="attribute">4.tear-prod-rate</h1>
    <div class='box'>
      <input type="radio" id="one" value="reduced" name="tear-prod-rate" v-model="tearProdRate">
      <label for="one">reduced</label>
      <input type="radio" id="two" value="normal" name="tear-prod-rate" v-model="tearProdRate">
      <label for="two">normal</label>
    </div>
    <!--결과 및 정확도 표시-->
    <my-class v-bind:myClass="myClass" v-on:pass="finish"></my-class>
    <div class="acc" v-if='hideAccuracy' >정확도 : {{ accuracy }}</div>
  </div>
</template>

<script>
import MyClass from '../components/MyClass'

export default {
   components: {
    MyClass,
  },
  data() {
    return{
      //입력받은 데이터 담는 변수
      age:'',
      spectaclePrescrip:'',
      astigmatism:'',
      tearProdRate:'',
      myClass:'',
      algorithmtype:'',
      accuracy:'',
      hideAccuracy:true,

      //naive관련 변수
      likehoodSoft:'',
      naiveSoft: 0.22,
      naiveSoftAge:'',
      naiveSoftSpec:'',
      naiveSoftAsti:'',
      naiveSoftTear:'',
      likehoodHard:'',
      naiveHard:0.19,
      naiveHardAge:'',
      naiveHardSpec:'',
      naiveHardAsti:'',
      naiveHardTear:'',
      likehoodNone:'',
      naiveNone: 0.59,
      naiveNoneAge:'',
      naiveNoneSpec:'',
      naiveNoneAsti:'',
      naiveNoneTear:'',
      probabilitySoft:'',
      probabilityHard:'',
      probabilityNone:'',
      biggest:'',
    }
  },
  methods:{
    finish:function(){
      if(this.algorithmtype==""){
        window.alert('알고리즘을 선택하세요')

      //one rule 결과도출
      }else if(this.algorithmtype=='OneRule'){
        this.accuracy='70.833%';
        this.hideAccuracy=true;
        if(this.age==''){
          window.alert('age값을 입력하세요')
        }else if(this.spectaclePrescrip==''){
          window.alert('spectacle prescrip값을 입력하세요')
        }else if(this.astigmatism==''){
          window.alert('astigmatism값을 입력하세요')
        }else if(this.tearProdRate==''){
          window.alert('tear prod rate값을 입력하세요')
        }else if(this.tearProdRate=='reduced'){
          this.myClass='none'
        }else if(this.tearProdRate=='normal'){
          this.myClass='soft'
        }

      //naive bayesian 결과도출
      }else if(this.algorithmtype=='NaiveBayesian'){
        this.accuracy='70.833%'
        this.hideAccuracy=true;
        if(this.age==''){
          window.alert('age값을 입력하세요')
        }else if(this.spectaclePrescrip==''){
          window.alert('spectacle prescrip값을 입력하세요')
        }else if(this.astigmatism==''){
          window.alert('astigmatism값을 입력하세요')
        }else if(this.tearProdRate==''){
          window.alert('tear prod rate값을 입력하세요')
        }
        if(this.age=='young'){
          this.naiveSoftAge=3/8;
          this.naiveHardAge=3/7;
          this.naiveNoneAge=5/18;
        }else if(this.age=='pre-presbyopic'){
          this.naiveSoftAge=3/8;
          this.naiveHardAge=2/7;
          this.naiveNoneAge=6/18;
        }else if(this.age=='presbyopic'){
          this.naiveSoftAge=2/8;
          this.naiveHardAge=2/7;
          this.naiveNoneAge=7/18;
        }
        if(this.spectaclePrescrip=='myope'){
          this.naiveSoftSpec=3/7;
          this.naiveHardSpec=4/6;
          this.naiveNoneSpec=8/17;
        }else if(this.spectaclePrescrip=='hypermetrope'){
          this.naiveSoftSpec=4/7;
          this.naiveHardSpec=2/6;
          this.naiveNoneSpec=9/17;
        }
        if(this.astigmatism=='no'){
          this.naiveSoftAsti=6/7;
          this.naiveHardAsti=1/6;
          this.naiveNoneAsti=8/17;
        }else if(this.astigmatism=='yes'){
          this.naiveSoftAsti=1/7;
          this.naiveHardAsti=5/6;
          this.naiveNoneAsti=9/17;
        }
        if(this.tearProdRate=='reduced'){
          this.naiveSoftTear=1/7;
          this.naiveHardTear=1/6;
          this.naiveNoneTear=13/17;
        }else if(this.tearProdRate=='normal'){
          this.naiveSoftTear=6/7;
          this.naiveHardTear=5/6;
          this.naiveNoneTear=4/17;
        }   
        this.likehoodSoft=this.naiveSoft*this.naiveSoftAge*this.naiveSoftSpec*this.naiveSoftAsti*this.naiveSoftTear;
        this.likehoodHard=this.naiveHard*this.naiveHardAge*this.naiveHardSpec*this.naiveHardAsti*this.naiveHardTear;
        this.likehoodNone=this.naiveNone*this.naiveNoneAge*this.naiveNoneSpec*this.naiveNoneAsti*this.naiveNoneTear;
        this.probabilitySoft=this.likehoodSoft/(this.likehoodSoft+this.likehoodHard+this.likehoodNone);
        this.probabilityHard=this.likehoodHard/(this.likehoodSoft+this.likehoodHard+this.likehoodNone);
        this.probabilityNone=this.likehoodNone/(this.likehoodSoft+this.likehoodHard+this.likehoodNone);
        this.biggest=Math.max(this.probabilityHard,this.probabilitySoft,this.probabilityNone);

        if(this.biggest==this.probabilitySoft){
          this.myClass='soft'
        }else if(this.biggest==this.probabilityHard){
          this.myClass='hard'
        }else if(this.biggest==this.probabilityNone){
          this.myClass='none'
        }

      //tree 결과도출
      }else if(this.algorithmtype=='Tree'){
        this.accuracy='83.333%'
        this.hideAccuracy=true;
        if(this.age==''){
          window.alert('age값을 입력하세요')
        }else if(this.spectaclePrescrip==''){
          window.alert('spectacle prescrip값을 입력하세요')
        }else if(this.astigmatism==''){
          window.alert('astigmatism값을 입력하세요')
        }else if(this.tearProdRate==''){
          window.alert('tear prod rate값을 입력하세요')
        }else if(this.tearProdRate=='normal'&&this.astigmatism=='yes'&&this.spectaclePrescrip=='hypermetrope'){
          this.myClass='none'
        }else if(this.tearProdRate=='normal'&&this.astigmatism=='yes'&&this.spectaclePrescrip=='myope'){
          this.myClass='hard'
        }else if(this.tearProdRate=='normal'&&this.astigmatism=='no'){
          this.myClass='soft'
        }else if(this.tearProdRate=='reduced'){
          this.myClass='none'
        }

      //Association 결과 저장부
      }else if(this.algorithmtype=='Association'){
        this.hideAccuracy=false;
        if(this.age==''){
          window.alert('age값을 입력하세요')
        }else if(this.spectaclePrescrip==''){
          window.alert('spectacle prescrip값을 입력하세요')
        }else if(this.astigmatism==''){
          window.alert('astigmatism값을 입력하세요')
        }else if(this.tearProdRate==''){
          window.alert('tear prod rate값을 입력하세요')
        }
        this.myClass=`Best rules found:
        
        1. tear-prod-rate=reduced 12 ==> contact-lenses=none 12    <conf:(1)> lift:(1.6) lev:(0.19) [4] conv:(4.5)
        2. spectacle-prescrip=myope tear-prod-rate=reduced 6 ==> contact-lenses=none 6    <conf:(1)> lift:(1.6) lev:(0.09) [2] conv:(2.25)
        3. spectacle-prescrip=hypermetrope tear-prod-rate=reduced 6 ==> contact-lenses=none 6    <conf:(1)> lift:(1.6) lev:(0.09) [2] conv:(2.25)
        4. astigmatism=no tear-prod-rate=reduced 6 ==> contact-lenses=none 6    <conf:(1)> lift:(1.6) lev:(0.09) [2] conv:(2.25)
        5. astigmatism=yes tear-prod-rate=reduced 6 ==> contact-lenses=none 6    <conf:(1)> lift:(1.6) lev:(0.09) [2] conv:(2.25)
        6. contact-lenses=soft 5 ==> astigmatism=no 5    <conf:(1)> lift:(2) lev:(0.1) [2] conv:(2.5)
        7. contact-lenses=soft 5 ==> tear-prod-rate=normal 5    <conf:(1)> lift:(2) lev:(0.1) [2] conv:(2.5)
        8. tear-prod-rate=normal contact-lenses=soft 5 ==> astigmatism=no 5    <conf:(1)> lift:(2) lev:(0.1) [2] conv:(2.5)
        9. astigmatism=no contact-lenses=soft 5 ==> tear-prod-rate=normal 5    <conf:(1)> lift:(2) lev:(0.1) [2] conv:(2.5)
        10. contact-lenses=soft 5 ==> astigmatism=no tear-prod-rate=normal 5    <conf:(1)> lift:(4) lev:(0.16) [3] conv:(3.75)
        `
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