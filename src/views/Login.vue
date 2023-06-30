<template>
  <div class="login">
    <div class="header">Vue2.0</div>
    <div class="form-wrap">
      <a-form
        class="form"
        layout="horizontal"
        :form="form"
        @submit="handleSubmit"
      >
        <a-form-item
          :validate-status="userNameError() ? 'error' : ''"
          :help="userNameError() || ''"
        >
          <a-input
            v-decorator="[
              'userName',
              { rules: [{ required: true, message: '请输入用户名!' }] },
            ]"
            placeholder="用户名"
          >
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
        >
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: '请输入密码' }] },
            ]"
            type="password"
            placeholder="密码"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            class="login-submit"
            type="primary"
            html-type="submit"
            :loading="loading"
            :disabled="hasErrors(form.getFieldsError())"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Form, Button, Input, Icon } from 'ant-design-vue'
import { login, staff, menu } from '@/apis/common'
Vue.use(Form)
  .use(Button)
  .use(Input)
  .use(Icon)

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field])
}
export default {
  name: 'Login',
  components: {
    // 'a-form': Form
  },
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
      loading: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields()
    })
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('userName') && getFieldError('userName')
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('password') && getFieldError('password')
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loading = true
          login(values, (res) => {
            sessionStorage.setItem('token', res.data.token)
            sessionStorage.setItem('ticket', res.data.ticket)
            menu({}, () => {
              staff({}, () => {
                this.loading = false
                this.$router.push('/')
              })
            })
          })
        }
      })
    },
  },
}
</script>
<style lang="less" scoped>
@import '../style/base.less';
.login {
  .flexcolumn;
  height: 100%;
}
.header {
  width: 100%;
  height: 40%;
  background-color: #2d333e;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 60px;
}
.form-wrap {
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: center;
  align-items: center;
  .form {
    width: 400px;
    .ant-form-item {
      margin-bottom: 16px;
    }
  }
  .login-submit {
    width: 100%;
  }
}
</style>
