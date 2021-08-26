import { createApp} from 'vue'

import App from './App.vue'
import Unicon from 'vue-unicons'
import { uniEstate, uniBookmark, uniCalender, uniCommentAlt,uniPlus,uniAt } from 'vue-unicons/dist/icons'

Unicon.add([uniEstate, uniBookmark, uniCalender, uniCommentAlt,uniPlus,uniAt])

createApp(App).use(Unicon).mount('#app')

