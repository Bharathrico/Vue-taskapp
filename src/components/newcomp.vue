<template>
    <div class="holder">
        <div @click="clickselect('home')" class="selected element" ref="home">
        <unicon name="estate" :fill="colorval[0]"></unicon>
        </div>
        <div @click="clickselect('comment')" class="element" ref="comment">
        <unicon name="comment-alt" :fill="colorval[1]"></unicon>
        </div>
        <div @click="clickselect('calender')" class="element" ref="calender">
        <unicon name="calender" :fill="colorval[2]"></unicon>
        </div>
        <div @click="clickselect('bookmark')" class="element" ref="bookmark">
        <unicon name="bookmark" :fill="colorval[3]"></unicon>
        </div>
        <div @click="clickselect('at')" class="element" ref="at">
        <unicon name="at" :fill="colorval[4]"></unicon>
        </div>
    </div>
</template>
<script>
export default {
    data()
    {
        return {
            colorval:['#ffffff','#7F8EAB','#7F8EAB','#7F8EAB','#7F8EAB']
        }
    },
    methods:
    {
          clickselect(selectedval)
          {
                if(selectedval=='home')
                {
                    this.$refs.home.classList.add("selected")
                    this.$refs.comment.classList.remove("selected")
                    this.$refs.calender.classList.remove("selected")
                    this.$refs.bookmark.classList.remove("selected")
                    this.$refs.at.classList.remove("selected")
                    this.colorval=['#ffffff','#7F8EAB','#7F8EAB','#7F8EAB','#7F8EAB']
                }
                if(selectedval=='comment')
                {
                    this.$refs.home.classList.remove("selected")
                    this.$refs.comment.classList.add("selected")
                    this.$refs.calender.classList.remove("selected")
                    this.$refs.bookmark.classList.remove("selected")
                    this.$refs.at.classList.remove("selected")
                    this.colorval=['#7F8EAB','#ffffff','#7F8EAB','#7F8EAB','#7F8EAB']
                }
                if(selectedval=='calender')
                {
                    this.$refs.home.classList.remove("selected")
                    this.$refs.comment.classList.remove("selected")
                    this.$refs.calender.classList.add("selected")
                    this.$refs.bookmark.classList.remove("selected")
                    this.$refs.at.classList.remove("selected")
                    this.colorval=['#7F8EAB','#7F8EAB','#ffffff','#7F8EAB','#7F8EAB']
                
                }
                if(selectedval=='bookmark')
                {
                    this.$refs.home.classList.remove("selected")
                    this.$refs.comment.classList.remove("selected")
                    this.$refs.calender.classList.remove("selected")
                    this.$refs.bookmark.classList.add("selected")
                    this.$refs.at.classList.remove("selected")
                    this.colorval=['#7F8EAB','#7F8EAB','#7F8EAB','#ffffff','#7F8EAB']
                }
                if(selectedval=='at')
                {
                    this.$refs.home.classList.remove("selected")
                    this.$refs.comment.classList.remove("selected")
                    this.$refs.calender.classList.remove("selected")
                    this.$refs.bookmark.classList.remove("selected")
                    this.$refs.at.classList.add("selected")
                    this.colorval=['#7F8EAB','#7F8EAB','#7F8EAB','#7F8EAB','#ffffff']
                }
          }
    }
}
</script>
<style scoped>
.holder
{

    width: 7vw;
    height: 70vh;
    /* background-color: azure; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    /* position: fixed; */
}
.element
{
    cursor: pointer;
    width: 3vw;
    height: 2.8vw;
    padding-top: 0.3vw;
    border-radius: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
}
.selected
{
    cursor: pointer;
    width: 3vw;
    height: 2.8vw;
    padding-top: 0.3vw;
    border-radius: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6D2AFA;
}
</style>