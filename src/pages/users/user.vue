<template>
    <div>
        <div>个人中心页面</div>
        <button v-if="!user" open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">获取用户信息</button>
    </div>
    
</template>
<script>
import qcloud from 'wafer2-client-sdk'
import config from '../../config'
import {showSuccess} from '../../utils/index'
export default {
    data() {
        return {
            user : null
        }
    },
    created() {
        this.user = wx.getStorageSync("userInfo");
    },
    methods : {
        doLogin () {
            if(!this.user){
                qcloud.setLoginUrl(config.loginUrl);
                qcloud.login({
                    success: function (userInfo) {
                        wx.setStorageSync("userInfo",userInfo);
                        showSuccess("登录成功");
                        this.user = wx.getStorageSync("userInfo");
                        console.log('登录成功', userInfo);
                    },
                    fail: function (err) {
                        console.log('登录失败', err);
                    }
                });
            }
        }
    }
}
</script>
<style>

</style>


