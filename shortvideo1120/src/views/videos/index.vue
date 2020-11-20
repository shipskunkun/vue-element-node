<!--  -->
<template>
  <div class="container">
    <div class="content-header">
      <el-form ref="form" :inline="true" :model="form" size="mini">
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name" placeholder="名称" />
        </el-form-item>
        <el-form-item label="ID" prop="pid">
          <el-input v-model="form.pid" placeholder="ID" />
        </el-form-item>
        <el-form-item label="第三方ID" prop="pid">
          <el-input v-model="form.pid" placeholder="第三方ID" />
        </el-form-item>
        <el-form-item label="标签" prop="pid">
          <el-input v-model="form.pid" placeholder="标签" />
        </el-form-item>

        <el-form-item label="合集ID" prop="name">
          <el-input v-model="form.name" placeholder="合集ID" />
        </el-form-item>
        <el-form-item label="合集名称" prop="pid">
          <el-input v-model="form.pid" placeholder="合集名称" />
        </el-form-item>
        <el-form-item label="用户ID" prop="pid">
          <el-input v-model="form.pid" placeholder="用户ID" />
        </el-form-item>
        <el-form-item label="来源" prop="pid">
          <el-input v-model="form.pid" placeholder="来源" />
        </el-form-item>

        <el-form-item label="CIBN审核" prop="name">
          <el-input v-model="form.name" placeholder="CIBN审核" />
        </el-form-item>
        <el-form-item label="芒果审核" prop="pid">
          <el-input v-model="form.pid" placeholder="芒果审核" />
        </el-form-item>
        <el-form-item label="内容审核" prop="pid">
          <el-input v-model="form.pid" placeholder="内容审核" />
        </el-form-item>
        <el-form-item label="状态" prop="pid">
          <el-input v-model="form.pid" placeholder="状态" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="query()">查询</el-button>
          <el-button type="primary" @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table
      v-loading="dataListLoading"
      :data="dataList"
      border
      :stripe="true"
      :size="'small'"
      style="width: 100%;"
    >
      <el-table-column
        prop="payDate"
        header-align="center"
        align="center"
        label="视频ID"
      />
      <el-table-column
        prop="pid"
        header-align="center"
        align="center"
        label="视频名称"
      />
      <el-table-column
        prop="pidName"
        header-align="center"
        align="center"
        label="内容审核"
      />
      <el-table-column
        prop="vipPlayTimes"
        header-align="center"
        align="center"
        label="用户ID"
      />
      <el-table-column
        prop="vipNum"
        header-align="center"
        align="center"
        label="播放平台"
      />
      <el-table-column
        prop="userPlayTimes"
        header-align="center"
        align="center"
        label="状态"
      />
      <el-table-column
        prop="wechatIncome"
        header-align="center"
        align="center"
        :formatter="this.formatColumnNumber"
        label="第三方ID"
      />
      <el-table-column
        prop="alipayIncome"
        header-align="center"
        align="center"
        :formatter="this.formatColumnNumber"
        label="来源"
      />
      <el-table-column
        prop="iapIncome"
        header-align="center"
        align="center"
        :formatter="this.formatColumnNumber"
        label="操作"
      >
        <template slot-scope="scope">
          <span class="order-detail-button" @click="downLoadOneDay(scope)">停用</span>
          <span class="order-detail-button" @click="downLoadOneDay(scope)">编辑</span>
          <span class="order-detail-button" @click="downLoadOneDay(scope)">上线</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      form: {
        pid: '',
        name: ''
      }
    }
  },
  mounted() {
    this.getDataList()
  },
  methods: {
    query() {
      this.pageIndex = 1
      this.getDataList()
    },
    getDataList() {
      console.log(123)
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.query()
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>
