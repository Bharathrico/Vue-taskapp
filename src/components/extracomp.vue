<template>
       <modal @clicked="onchildclick" v-show="opendata"/>
    <div class="infotab">
        <div class="work">
            <button class="newbutton" @click="openmodal()"><unicon name="plus" fill="#fff"></unicon> Add task</button>
            <div class="holderdata">
                <div class="leftdata"><div style="font-size:4vmin;color:white;font-weight:700;">Hey, Bharath</div>
                <div style="color:#ddd;font-size:3vmin">Have a nice day</div>
                </div>
                <div class="rightdata">
                    <div style="font-size:5vmin;font-weight:700;color:white;">{{timedata}}</div>
                    <div style="font-size:2vmin;color:white;">{{timestamp}}</div>
                </div>
            </div>
        </div>
        <carosul/>
 
    </div>
</template>
<script>
import carosul from './carosul.vue'
import modal from './modal.vue'
export default {
    data()
    {
      return{
          opendata:false,
          timestamp:"",
          timedata:""
      }  
    },
  components: { carosul ,modal},
  created(){
   setInterval(this.gettimedata(),1000)
  },
  methods:
  {
      gettimedata()
      {
          const today = new Date();
          const time =  today.toDateString();
          var hours = today.getHours();
          var minutes = today.getMinutes();
          var ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          hours = hours ? hours : 12; // the hour '0' should be '12'
          minutes = minutes < 10 ? '0'+minutes : minutes;
          var emoji;
          if((hours>4 && ampm == 'AM')||(hours<6&&ampm == "PM"))
          {
              emoji="☀️"
          }
          else
          {
              emoji="🌙"
          }
          var strTime = hours + ':' + minutes + ' ' + ampm + " " + emoji;
          this.timestamp=time;
          this.timedata=strTime;
          console.log(this.timestamp)
      },
      openmodal()
      {
          console.log("clicked")
          this.opendata=true
      },
      onchildclick()
      {
          console.log("closed")
          this.opendata=false
      }
  }
}
</script>
<style scoped>
.infotab
{
    width: 70vw;
    height: 100vh;
    /* background-color: azure; */
    padding-top: 3vmin;
    padding-left: 3vmin;
    text-align: left;
    padding-right: 3vmin;
}
.work
{
    width: 100%;
    height: 14vh;
        margin-top: 5vh;
    /* background: lightgrey; */
}

.newbutton
{
    cursor:pointer;
    outline: none;
    border: none;
    display: flex;
    height: 5vmin;
    align-items: center;
    justify-content: space-evenly;
    width: 9vw;
    background-color: #6D2AFA;
    color: white;
    border-radius: 1vmin;
    font-weight: 700;
    font-size: 2vmin;
}
.newbutton:active
{
    cursor: pointer;
    background-color:#5a21d4;
}
.holderdata
{
    margin-top: 2vmin;
    width: 100%;
    height: 70%;
    /* background-color: wheat; */
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.leftdata
{
    /* width: 20vw; */
    height: 100%;
    /* background-color: turquoise; */
    /* display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column; */
}
.rightdata
{
    width: 20vw;
    height: 100%;
    /* background-color: turquoise; */
    text-align: right;
}
</style>