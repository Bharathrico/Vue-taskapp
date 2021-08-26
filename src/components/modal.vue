<template>
<div class="backdrop">
    <div class="newtask">
        <div style="color:white;font-weight:700;font-size:4vmin;padding:0;margin:0;">Add task</div>
        <input v-model="task" class="inputfield" type="text" placeholder="task name"/>
        <input v-model="taskdesc" class="inputfield" type="text" placeholder="task description"/>
        <div class="buttonholder"><button class="buttondata" @click="displaydata()">submit</button><button class="buttondata closebut" @click="onclickevent()">Close</button></div>
    </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
    data()
    {
        return{
            task:"",
            taskdesc:""
        }
    },
    methods:{
        onclickevent()
        {
            this.$emit("clicked")
        },
        displaydata()
        {
            // console.log(this.task)
            axios.post('http://localhost:3000/task',{
                taskdata : this.task,
                taskdes : this.taskdesc,
                completed : 1
            })
            .then((response)=>{
                console.log(response)

            })
            this.onclickevent()
        }
    }

}
</script>
<style scoped>
.backdrop
{
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #00000077;
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}
.newtask
{

    padding: 2vmin;
    padding-left: 3vmin;
    width: 30vw;
    height: 40vh;
    background-color: #192550;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 3vmin;
}
.inputfield
{
    margin: 0;
    border:none;
    outline: none;
    width: 90%;
    height: 6vmin;
    font-size: 3vmin;
    padding-left: 2vmin;
    padding-right: 2vmin;
    border-radius: 1vmin;
}
.buttonholder
{
    margin-top: 3vmin;
    width: 95%;
    height: 3vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.buttondata
{
    cursor: pointer;
    border: none;
    outline: none;
    background-color: #6D2AFA;
    height: 6vh;
    width:45%;
    font-size: 2.5vmin;
    color: white;
    font-weight: 700;
    border-radius: 2vmin;
}
.closebut
{
    background-color: tomato;
}
</style>