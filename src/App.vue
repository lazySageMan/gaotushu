<script>
import "../static/css/app.css"
import {get} from './utils/index'
export default {
  async created () {
    console.log(config.loginUrl)
    // qcloud.setLoginUrl(config.loginUrl);
    // qcloud.login({
    //     success: function (userInfo) {
    //         console.log('登录成功', userInfo);
    //     },
    //     fail: function (err) {
    //         console.log('登录失败', err);
    //     }
    // });
  }
}
</script>

