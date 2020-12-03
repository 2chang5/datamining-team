<template>
  <div>
    <!--알고리즘 선택하는 영역-->
    <div>
    <h1 class="title">원하는 알고리즘을 고르세요!</h1>
    <div>
      <input type="radio" id="one" value="OneRule" name="algorithm" v-model="algorithmtype">
      <label for="one">one rule</label>
      <input type="radio" id="three" value="Tree" name="algorithm" v-model="algorithmtype">
      <label for="three">Decision Tree</label>
      <br>
      <div id='result'>선택: {{ algorithmtype }}</div>
    </div>
    <!--새로운 데이터 입력부-->
    <h1 class="attribute">1.age</h1>
    <div class='box'>
      <label for="one">나이(만 연령)   :     </label>  
      <input type="text" id="one" v-model="age">
    </div>
    </div>
    <h1 class="attribute">2.gender</h1>
    <div class='box'>
      <input type="radio" id="one" value="male" name="gender" v-model="gender">
      <label for="one">male</label>
      <input type="radio" id="two" value="female" name="gender" v-model="gender">
      <label for="two">female</label>
    </div>
    <h1 class="attribute">3.address</h1>
    <div class='box'>
      <label for="one">주소지(도 단위까지)   :     </label>  
      <input type="text" id="one" v-model="address">
    </div>
    <h1 class="attribute">4.income(수입)</h1>
    <div class='box'>
      <input type="radio" id="one" value="~100" name="income" v-model="income">
      <label for="one">100미만</label>
      <input type="radio" id="two" value="100~150" name="income" v-model="income">
      <label for="two">100이상 150미만</label>
      <input type="radio" id="three" value="150~200" name="income" v-model="income">
      <label for="three">150이상 200미만</label>
      <input type="radio" id="four" value="200~250" name="income" v-model="income">
      <label for="four">200이상 250미만</label>
      <input type="radio" id="five" value="250~300" name="income" v-model="income">
      <label for="five">250이상 300미만</label>
      <br>
      <br>
      <br>
      <input type="radio" id="six" value="300~" name="income" v-model="income">
      <label for="six">300이상</label>
    </div>
    <h1 class="attribute">5.job(직업)</h1>
    <div class='box'>
      <input type="radio" id="one" value="allowance" name="job" v-model="job">
      <label for="one">용돈</label>
      <input type="radio" id="two" value="partTime" name="job" v-model="job">
      <label for="two">알바</label>
      <input type="radio" id="three" value="fullTime" name="job" v-model="job">
      <label for="three">정기적으로 다니는 직장 월급</label>
      <input type="radio" id="four" value="fund" name="job" v-model="job">
      <label for="four">펀드,주식,이자율 등등의 투자</label>
      <input type="radio" id="five" value="sales" name="job" v-model="job">
      <label for="five">가게,중고거래 등 현물거래</label>
    </div>
    <h1 class="attribute">6.주로 무엇을 쇼핑하시나요</h1>
    <div class='box'>
      <input type="radio" id="one" value="Clothes" name="purpose" v-model="purpose">
      <label for="one">의류</label>
      <input type="radio" id="two" value="Electronics" name="purpose" v-model="purpose">
      <label for="two">전자기기</label>
      <input type="radio" id="three" value="Goods" name="purpose" v-model="purpose">
      <label for="three">취미용품</label>
      <input type="radio" id="four" value="Fine food" name="purpose" v-model="purpose">
      <label for="four">식료품</label>
      <input type="radio" id="five" value="Luxury" name="purpose" v-model="purpose">
      <label for="five">사치품</label>
      <input type="radio" id="six" value="Daily necessity" name="purpose" v-model="purpose">
      <label for="six">생활용품</label>
    </div>
    <h1 class="attribute">7.주로 쇼핑을 할 때 무엇을 중점으로 보시나요?</h1>
    <div class='box'>
      <input type="radio" id="one" value="Cost performance" name="priorValue" v-model="priorValue">
      <label for="one">가성비</label>
      <input type="radio" id="two" value="Quality" name="priorValue" v-model="priorValue">
      <label for="two">품질</label>
      <input type="radio" id="three" value="reliability" name="priorValue" v-model="priorValue">
      <label for="three">신뢰성</label>
      <input type="radio" id="four" value="Brand" name="priorValue" v-model="priorValue">
      <label for="four">브랜드 가치</label>
      <input type="radio" id="five" value="Country of Manufacture" name="priorValue" v-model="priorValue">
      <label for="five">제조국가</label>
      <input type="radio" id="six" value="Trend" name="priorValue" v-model="priorValue">
      <label for="six">유행</label>
    </div>
    <h1 class="attribute">8.쇼핑을 얼마나 즐겨하시나요?(1개월 기준)</h1>
    <div class='box'>
      <input type="radio" id="one" value="0~2" name="frequency" v-model="frequency">
      <label for="one">0~2번</label>
      <input type="radio" id="two" value="3~6" name="frequency" v-model="frequency">
      <label for="two">3~6번</label>
      <input type="radio" id="three" value="6~9" name="frequency" v-model="frequency">
      <label for="three">6~9번</label>
      <input type="radio" id="four" value="10~" name="frequency" v-model="frequency">
      <label for="four">10번 이상</label>
    </div>
    <h1 class="attribute">9.쇼핑비로 얼마를 쓰시나요?</h1>
    <div class='box'>
      <input type="radio" id="one" value="0~10" name="cost" v-model="cost">
      <label for="one">0~10</label>
      <input type="radio" id="two" value="10~20" name="cost" v-model="cost">
      <label for="two">10~20</label>
      <input type="radio" id="three" value="20~30" name="cost" v-model="cost">
      <label for="three">20~30</label>
      <input type="radio" id="four" value="30~40" name="cost" v-model="cost">
      <label for="four">30~40</label>
      <input type="radio" id="five" value="40~50" name="cost" v-model="cost">
      <label for="five">40~50</label>
      <input type="radio" id="six" value="50~" name="cost" v-model="cost">
      <label for="six">50~</label>
    </div>
    <!--결과 및 정확도 표시-->
    <my-class v-bind:myClass="myClass" v-on:pass="finish"></my-class>
    <div class="acc" >정확도 : {{ accuracy }}</div>
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
      gender:'',
      address:'',
      income:'',
      job:'',
      purpose:'',
      priorValue:'',
      frequency:'',
      cost:'',
      myClass:'',
      algorithmtype:'',
      accuracy:'',
      

    }
  },
  methods:{
    finish:function(){
      if(this.algorithmtype==""){
        window.alert('알고리즘을 선택하세요')

      //one rule 결과도출
      }else if(this.algorithmtype=='OneRule'){
        this.accuracy='75%';
        if(this.age==''){
          window.alert('age값을 입력하세요')
        }else if(this.gender==''){
          window.alert('gender값을 입력하세요')
        }else if(this.address==''){
          window.alert('address값을 입력하세요')
        }else if(this.income==''){
          window.alert('income 값을 입력하세요')
        }else if(this.job==''){
          window.alert('job값을 입력하세요')
        }else if(this.purpose==''){
          window.alert('6번문항을 입력하세요')
        }else if(this.priorValue==''){
          window.alert('7번문항을 입력하세요')
        }else if(this.frequency==''){
          window.alert('8번문항을 입력하세요')
        }else if(this.cost==''){
          window.alert('9번문항을 입력하세요')
        }else if(this.address=='Incheon'){
          this.myClass='offline'
        }else if(this.address=='Gyeonggi'){
          this.myClass='online'
        }else if(this.address=='Daejeon'){
          this.myClass='offline'
        }else if(this.address=='ChungCheong'){
          this.myClass='online'
        }else if(this.address=='Seoul'){
          this.myClass='online'
        }

      //tree 결과도출
      }else if(this.algorithmtype=='Tree'){
        this.accuracy='72.5%'
        if(this.age==''){
          window.alert('age값을 입력하세요')
        }else if(this.gender==''){
          window.alert('gender값을 입력하세요')
        }else if(this.address==''){
          window.alert('address값을 입력하세요')
        }else if(this.income==''){
          window.alert('income 값을 입력하세요')
        }else if(this.job==''){
          window.alert('job값을 입력하세요')
        }else if(this.purpose==''){
          window.alert('6번문항을 입력하세요')
        }else if(this.priorValue==''){
          window.alert('7번문항을 입력하세요')
        }else if(this.frequency==''){
          window.alert('8번문항을 입력하세요')
        }else if(this.cost==''){
          window.alert('9번문항을 입력하세요')
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.address=='Foreign'){
          this.myClass='online'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.address=='Gangwon'){
          this.myClass='online'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.address=='Gyeongsang'){
          this.myClass='online'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.address=='ChungCheong'){
          this.myClass='online'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.address=='Jeolla'){
          this.myClass='online'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.address=='Seoul'){
          this.myClass='offline'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.address=='Busan'){
          this.myClass='online'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.address=='Daejeon'){
          this.myClass='online'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.address=='Gyeonggi'){
          this.myClass='online'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.address=='Incheon'){
          this.myClass='online'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.income=='~100'){
          this.myClass='offline'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.income=='150~200'){
          this.myClass='offline'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.income=='200~250'){
          this.myClass='offline'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.income=='300~'){
          this.myClass='offline'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.income=='205~300'){
          this.myClass='offline'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.income=='100~150'){
          this.myClass='online'
        }else if(this.job=='fullTime'&&this.frequency=='10~'&&this.income=='250~300'){
          this.myClass='online'
        }else if(this.job=='fullTime'&&this.frequency=='3~6'){
          this.myClass='online'
        }else if(this.job=='fullTime'&&this.frequency=='6~9'){
          this.myClass='online'
        }else if(this.job=='allowance'&&this.gender=='male'){
          this.myClass='offline'
        }else if(this.job=='allowance'&&this.gender=='female'){
          this.myClass='online'
        }else if(this.job=='partTime'){
          this.myClass='online'
        }else if(this.job=='fund'){
          this.myClass='offline'
        }else if(this.job=='sales'){
          this.myClass='offline'
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