<template>
  <div class="userManage">

    <div class="left">
      <h4>杭州市公安局</h4>
      <ul class="departments">
        <li class="department" :class="{active: activeDeptId === 1}" @click="onDeptClick(1)">上城区分局</li>
        <li class="department" :class="{active: activeDeptId === 2}" @click="onDeptClick(2)">下城区分局</li>
        <li class="department" :class="{active: activeDeptId === 3}" @click="onDeptClick(3)">西湖区分局</li>
      </ul>
    </div>

    <div class="right">
      <h4>杭州市公安局<span class="red">1355</span>人</h4>
      <div class="top">
        <div class="search-box">
          <label for="keyword"><input id="keyword" type="text" placeholder="请输入姓名或账号进行搜索" /></label>
          <a class="btn primary search">搜索</a>
        </div>
        <div class="btns">
          <a class="btn primary" @click="edit({id: 0})">新增人员</a>
        </div>
      </div>

      <div class="box">
        <table class="tbl">
          <thead>
            <tr>
              <th>姓名</th>
              <th>职务</th>
              <th>账号</th>
              <th>管辖单位名称</th>
              <th>账号状态</th>
              <th>部门</th>
              <th>角色</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tblList" v-bind:key="item.id">
              <td>{{item.chineseName}}</td>
              <td>{{item.duty}}</td>
              <td>{{item.username}}</td>
              <td>{{item.deptName}}</td>
              <td v-if="item.status === 0">正常</td>
              <td v-else>已冻结</td>
              <td>{{item.deptExpend}}</td>
              <td>
                <span v-for="role in item.roles" v-bind:key="role.id">
                  {{role.roleName}}
                </span>
              </td>
              <td>
                <span class="operates">
                  <span @click="edit(item)">详情</span>
                  <span>冻结账户</span>
                  <span>注销</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>

    <!-- <div class="modals" v-if="modalVisible">
      <div class="modal-wrap">
        <div class="modal-mask" @click="onCancel"></div>
        <div class="modal">
          <div class="modal-title">弹窗标题<span class="close" @click="onCancel">X</span></div>
          <div class="modal-body">
            <form @:submit.prevent="onOk">

              <div class="form-item">
                <label class="label" for="chineseName">
                  <span class="required">*</span>
                  <span class="label-name">警员名称:</span>
                </label>
                <div class="form-item-children">
                  <input v-model.trim="chineseName" id="chineseName" type="text" placeholder="请输入警员名称" />
                </div>
              </div>

              <div class="form-item">
                <label class="label" for="idcardNo">
                  <span class="required">*</span>
                  <span class="label-name">警员身份证:</span>
                </label>
                <div class="form-item-children">
                  <input v-model.number.trim="idcardNo" id="idcardNo" type="number" placeholder="请输入警员身份证" />
                </div>
              </div>

              <div class="form-item">
                <label class="label" for="username">
                  <span class="required">*</span>
                  <span class="label-name">登录用户名:</span>
                </label>
                <div class="form-item-children">
                  <input v-model.trim="username" id="username" type="text" placeholder="请输入登录用户名" />
                </div>
              </div>

              <div class="form-item">
                <label class="label" for="password">
                  <span class="required">*</span>
                  <span class="label-name">登录密码:</span>
                </label>
                <div class="form-item-children">
                  <input v-model.trim="password" id="password" type="password" placeholder="请输入登录密码" />
                </div>
              </div>

              <div class="form-item">
                <label class="label" for="deptName">
                  <span class="label-name">管辖单位名称:</span>
                </label>
                <div class="form-item-children">
                  <input v-model.trim="deptName" id="deptName" type="text" placeholder="请输入管辖单位名称" />
                </div>
              </div>

              <div class="form-item">
                <label class="label" for="mobile">
                  <span class="required">*</span>
                  <span class="label-name">手机号码:</span>
                </label>
                <div class="form-item-children">
                  <input v-model.trim="mobile" id="mobile" type="text" placeholder="请输入手机号码" />
                </div>
              </div>

              <div class="form-item">
                <label class="label" for="duty">
                  <span class="label-name">警员职务:</span>
                </label>
                <div class="form-item-children">
                  <input v-model.trim="duty" id="duty" type="text" placeholder="请输入警员职务" />
                </div>
              </div>

              <div class="form-item">
                <label class="label" for="duty">
                  <span class="required">*</span>
                  <span class="label-name">角色:</span>
                </label>
                <div class="form-item-children">
                  <select v-model="roles" aria-placeholder="请选择角色" multiple>
                    <option value="" disabled>请选择角色</option>
                    <option v-for="role in rolesList" :value="role.id" :key="role.id">
                      {{role.roleName}}
                    </option>
                  </select>
                </div>
              </div>

            </form>
          </div>

          <div class="modal-footer">
            <div class="btns">
              <a class="btn primary" @click="onOk">确定</a>
              <a class="btn close" @click="onCancel">取消</a>
            </div>
          </div>

        </div>
      </div>
    </div> -->

    <Modal
      :modalVisible="modalVisible"
      :title="title"
      @onOk="onOk"
      @onCancel="onCancel"
    >
      <template v-slot:main>
        <form @:submit.prevent="onOk">

          <div class="form-item">
            <label class="label" for="chineseName">
              <span class="required">*</span>
              <span class="label-name">警员名称:</span>
            </label>
            <div class="form-item-children">
              <input v-model.trim="chineseName" id="chineseName" type="text" placeholder="请输入警员名称" />
            </div>
          </div>

          <div class="form-item">
            <label class="label" for="idcardNo">
              <span class="required">*</span>
              <span class="label-name">警员身份证:</span>
            </label>
            <div class="form-item-children">
              <input v-model.number.trim="idcardNo" id="idcardNo" type="number" placeholder="请输入警员身份证" />
            </div>
          </div>

          <div class="form-item">
            <label class="label" for="username">
              <span class="required">*</span>
              <span class="label-name">登录用户名:</span>
            </label>
            <div class="form-item-children">
              <input v-model.trim="username" id="username" type="text" placeholder="请输入登录用户名" />
            </div>
          </div>

          <div class="form-item">
            <label class="label" for="password">
              <span class="required">*</span>
              <span class="label-name">登录密码:</span>
            </label>
            <div class="form-item-children">
              <input v-model.trim="password" id="password" type="password" placeholder="请输入登录密码" />
            </div>
          </div>

          <div class="form-item">
            <label class="label" for="deptName">
              <span class="label-name">管辖单位名称:</span>
            </label>
            <div class="form-item-children">
              <input v-model.trim="deptName" id="deptName" type="text" placeholder="请输入管辖单位名称" />
            </div>
          </div>

          <div class="form-item">
            <label class="label" for="mobile">
              <span class="required">*</span>
              <span class="label-name">手机号码:</span>
            </label>
            <div class="form-item-children">
              <input v-model.trim="mobile" id="mobile" type="text" placeholder="请输入手机号码" />
            </div>
          </div>

          <div class="form-item">
            <label class="label" for="duty">
              <span class="label-name">警员职务:</span>
            </label>
            <div class="form-item-children">
              <input v-model.trim="duty" id="duty" type="text" placeholder="请输入警员职务" />
            </div>
          </div>

          <div class="form-item">
            <label class="label" for="duty">
              <span class="required">*</span>
              <span class="label-name">角色:</span>
            </label>
            <div class="form-item-children">
              <select v-model="roles" aria-placeholder="请选择角色" multiple>
                <option value="" disabled>请选择角色</option>
                <option v-for="role in rolesList" :value="role.id" :key="role.id">
                  {{role.roleName}}
                </option>
              </select>
            </div>
          </div>

        </form>
      </template>
    </Modal>

    <Spin :spinning="spinning" />
  </div>
</template>
<script>
// @ is an alias to /src
import Spin from '@/components/Spin.vue'
import Modal from '@/components/Modal.vue'
import message from '@/components/message/main'

export default {
  name: 'UserManage',
  components: {
    Spin,
    Modal,
  },
  data: function () {
    return {
      isAdd: true, // 是否新增模式
      curItem: {}, // 当前编辑的对象
      activeDeptId: 1, // 当前选中的部门id
      spinning: false, // 是否显示loading效果
      // 表单字段 start
      chineseName: '', // 中文名称
      idcardNo: '', // 身份证号码
      username: '', // 用户名
      password: '', // 密码
      deptName: '', // 部门名称
      mobile: '', // 手机号
      duty: '', // 职务
      roles: [], // 角色
      // end
      // 弹窗的配置字段
      title: '新增用户',
      modalVisible: false, // 弹窗的显隐
      // end
      rolesList: [ // 角色列表
        { id: 1, roleName: '超级管理员' },
        { id: 2, roleName: '分局管理员' },
        { id: 3, roleName: '派出所管理员' },
        { id: 4, roleName: '民警' },
      ],
      tblList: [ // 表格列表数据
        {
          id: 1,
          chineseName: '胡市局', 
          duty: '民警', 
          username: 'hhadmin', 
          deptName: '杭州市公安局', 
          deleted: 0, 
          deletedLabel: '正常',
          status: 0,
          deptExpend: '市局委员会',
          roles: [
            {
              id: 1,
              roleName: '超级管理员'
            },
            {
              id: 3,
              roleName: '民警'
            }
          ]
        },
        {
          id: 2,
          chineseName: 'dupi', 
          duty: '管理员', 
          username: 'dupi', 
          deptName: '杭州市公安局', 
          deleted: 0, 
          deletedLabel: '正常',
          status: 0,
          deptExpend: '市局委员会',
          roles: [
            {
              id: 2,
              roleName: '分局管理员'
            }
          ]
        }
      ]
    }
  },
  computed: {
    classObj: function (id) {
      console.log(id)
      return {
        active: id === this.activeDeptId
      }
    }
  },
  methods: {
    // 点击选择部门id
    onDeptClick: function (id) {
      this.activeDeptId = id
      this.spinning = true
      this.timer = setTimeout(() => {
        this.spinning = false
      }, 3000)
    },
    // 编辑详情
    edit: function (item) {
      // console.log(item)
      this.modalVisible = true
      if (item && item.id !== 0) {
        this.isAdd = false
        this.curItem = item
        const keys = Object.keys(item)
        keys.map(key => {
          if (key === 'roles') {
            const arr = []
            item.roles.map(record => {
              arr.push(record.id)
            })
            this.roles = arr
          } else {
            this[key] = item[key]
          }
        })
        // console.log(this.roles)
      } else {
        this.isAdd = true
        this.chineseName = ''
        this.idcardNo =''
        this.username = ''
        this.password = ''
        this.deptName = ''
        this.mobile = ''
        this.duty = ''
        this.roles = []
      }
    },
    // 显示弹窗
    modalShow: function () {
      this.modalVisible = true
    },
    // 关闭弹窗
    onCancel: function () {
      this.modalVisible = false
    },
    // 提交表单
    onOk: function () {
      const params = {
        chineseName: this.chineseName,
        idcardNo: this.idcardNo,
        username: this.username,
        password: this.password,
        deptName: this.deptName,
        mobile: this.mobile,
        duty: this.duty,
        roles: this.roles,
        status: 0,
        deletedLabel: '正常',
      }
      // console.log(params)
      const keys = Object.keys(params)
      if (this.isAdd){ // 新增
        this.tblList.push(params)
        params.id = this.tblList.length + 1
        keys.map(item => {
          // console.log(item)
          if (item === 'roles') {
            this[item] = []
          } else {
            this[item] = ''
          }
        })
      } else { // 编辑
        params.id = this.curItem.id
        const index = this.tblList.findIndex(item => item.id === this.curItem.id)
        this.tblList[index] = params
      }
      this.modalVisible = false
    },
    // 关闭弹窗
  },
  created: function () {
    // console.log('created')
  },
  mounted: function () {
    // console.log('mounted')
    message({
      content: '提示信息',
      duration: 4000,
      // onClose: function (arg) {
      //   console.log(arg)
      // }
    })
    message({
      content: '这是个警告！'
    })
  }
}
</script>
<style lang="less" scoped>
@import '../style/base.less';
.form-item {
  .flexrow;
  margin-bottom: 10px;
  .label{
    text-align: right;
    flex: 0 0 25%;
    margin-right: 6px;
    .required{
      .red;
      font-size: 16px;
      margin-right: 3px;
      vertical-align: middle;
    }
    .label-name{
      vertical-align: middle;
    }
  }
  .form-item-children{
    flex: 1;
  }
  input{
    border: 1px solid #5f6a7e;
    background-color: #fff;
    width: 100%;
    font-size: 12px;
  }
  select{
    width: 100%;
  }
}
.userManage{
  .flexrow;
  height: 100%;
  padding: 16px;
  h4{
      height: 34px;
      line-height: 34px;
      padding: 0 16px;
      border-bottom: 1px solid #ddd;
      text-align: left;
      font-size: 12px;
    }
  .left{
    flex: 0 0 140px;
    border: 1px solid #ddd;
    border-right: 0;
    .department{
      height: 32px;
      line-height: 32px;
      cursor: pointer;
      &.active{
        background-color: #ddeffb;
      }
      &:hover{
        background-color: #edf5fa;
      }
    }
  }
  .right{
    flex: 1;
    border: 1px solid #ddd;
    .top{
      .flexrow;
      padding: 16px;
      padding-bottom: 0;
      .search-box{
        flex: 1;
        text-align: left;
        label{
          vertical-align: bottom;
        }
        input{
          &:focus{
            border-color: #7db1ff;
          }
          border: 1px solid #ddd;
          height: 28px;
          line-height: 28px;
          margin-right: 8px;
          min-width: 220px;
          padding: 0 8px;
        }
        .search{
          // vertical-align: middle;
        }
      }
    }
    .box{
      padding: 16px;
      .tbl{
        width: 100%;
        border: 1px solid #ddd;
        th{
          background-color: #f6f8fc;
        }
        th,td{
          border: 1px solid #ddd;
          text-align: left;
          padding: 10px 8px;
        }
        .operates{
          span{
            color: @blue;
            margin-right: 8px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
