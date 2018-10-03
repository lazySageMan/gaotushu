<script>
import "../static/css/app.css"
import {get} from './utils/index'
export default {
  async created () {
    const res = await get("/weapp/test")
    console.log(res)
    // wx.request({
    //   url : config.host + '/weapp/test',
    //   success (res){
    //     console.log(res)
    //   }
    // })
    console.log("小程序启动成功")
  }
}
</script>

