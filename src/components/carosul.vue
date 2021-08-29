<template>
    <div class="carosel">
        <h1>Tasks today</h1>
        <div class="innercomponent">
            <transition name="toggle" appear role="out-in">
            <transition-group v-if="valueslist.length" name="listelem" appear>
            <div class="listval" v-for="value in valueslist" :key="value.primkey">
                <div class="numberholder">
                {{value.primkey}}
                </div>
                <div class="taskholder">
                    <h3 style="margin:0;">{{value.taskdata}}</h3>
                    <h4 style="margin:0; font-weight:500;">{{value.taskdes}}</h4>
                </div>
                <div>
                    <button @click="clickedval(value.primkey)" class="complete">Completed</button>
                </div>
            </div>
            </transition-group>
            <span v-else style="font-size:3vh">oops! no task it seems</span>
            </transition>
        </div>
    </div>
</template>
<script>
import axios from  'axios'
export default {
    data()
    {
        return{
            valueslist:[],
            initvalue:1
        }
    },
    created()
    {
        setInterval(()=>{
            axios.get("http://localhost:3000/task")
        .then((response)=>{
            // console.log(response.data.task)
        this.valueslist=response.data.task
        })
        .catch((err)=>{
            console.log("error"+err)
        })
        },100)
        
    },
    methods:{
            clickedval(valueget)
            {
                    axios.patch('http://localhost:3000/task',{
                        id:valueget,
                        task:{
                            completed:0
                        }
                    }).then((response)=>{
                        console.log(response)
                    })
            }
    }
}
</script>
<style scoped>
.carosel
{
 width: 100%;
 height: 65%;
 margin-top: 7vmin;
 background-color:#111C42;
 border-radius: 3vmin;   
 color: white;
 padding-top:2vmin;
 padding-left: 3vmin;
 padding-right: 3vmin;
}
.innercomponent
{
    overflow-y: scroll;
    width: 100%;
    height: 80%;
    position:relative;
    align-items: center;
    /* background-color: white; */
}
.listval
{
    width: 100%;
    height: 10vh;
    background-color: #192550;
    margin-top:2vmin ;
    border-radius: 2vmin;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
}
.numberholder
{
    width: 6vh;
    height: 6vh;
    border-radius: 6vh;
    background-color: #ffffffcc;
    display: flex;
    font-size: 4vh;
    align-items: center;
    justify-content: center;
    color: #111C42;
    font-weight: 700;
}
.taskholder
{
    width: 30%;
    height: 80%;
    color: white;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}
.complete
{
    width: 14vw;
    height: 5vh;
    border: none;
    outline: none;
    background-color: #6D2AFA;
    border-radius: 2vmin;
    color: white;
    font-size: 2vmin;
    font-weight: 700;
}
.listelem-enter-from,
.listelem-leave-to
{
    opacity: 0;
    transform: scale(0);
}
.listelem-enter-to,
.listelem-leave-from
{
    opacity: 1;
    transform: scale(1);
}
.listelem-enter-active
{
   transition: all 0.4s ease;
}
.listelem-leave-active
{
    position: absolute;
    transition: all 0.4s ease;
}
.listelem-move
{
    transition: all 0.2s;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
    border-radius: 5px;
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.toggle-enter-from,
.toggle-leave-to
{
    opacity: 0;

}
.toggle-enter-to,
.toggle-leave-from
{
    opacity: 1;
}
.toggle-enter-active
{
   transition: all 0.4s ease;
}
.toggle-leave-active
{
    position: absolute;
    transition: all 0.4s ease;
}

</style>