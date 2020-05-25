<template>
	<el-container style="height: 500px; border: 1px solid #eee">
	  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
		<el-menu :default-openeds="['1', '3']">
		  <el-submenu index="1">
			<template slot="title"><i class="el-icon-message"></i>导航一</template>
			<el-menu-item-group>
			  <template slot="title">分组一</template>
			  <el-menu-item index="1-1">选项1</el-menu-item>
			  <el-menu-item index="1-2">选项2</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group title="分组2">
			  <el-menu-item index="1-3">选项3</el-menu-item>
			</el-menu-item-group>
			<el-submenu index="1-4">
			  <template slot="title">选项4</template>
			  <el-menu-item index="1-4-1">选项4-1</el-menu-item>
			</el-submenu>
		  </el-submenu>
		  <el-submenu index="2">
			<template slot="title"><i class="el-icon-menu"></i>导航二</template>
			<el-menu-item-group>
			  <template slot="title">分组一</template>
			  <el-menu-item index="2-1">选项1</el-menu-item>
			  <el-menu-item index="2-2">选项2</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group title="分组2">
			  <el-menu-item index="2-3">选项3</el-menu-item>
			</el-menu-item-group>
			<el-submenu index="2-4">
			  <template slot="title">选项4</template>
			  <el-menu-item index="2-4-1">选项4-1</el-menu-item>
			</el-submenu>
		  </el-submenu>
		  <el-submenu index="3">
			<template slot="title"><i class="el-icon-setting"></i>导航三</template>
			<el-menu-item-group>
			  <template slot="title">分组一</template>
			  <el-menu-item index="3-1">选项1</el-menu-item>
			  <el-menu-item index="3-2">选项2</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group title="分组2">
			  <el-menu-item index="3-3">选项3</el-menu-item>
			</el-menu-item-group>
			<el-submenu index="3-4">
			  <template slot="title">选项4</template>
			  <el-menu-item index="3-4-1">选项4-1</el-menu-item>
			</el-submenu>
		  </el-submenu>
		</el-menu>
	  </el-aside>
	  <el-container>
		<el-header style="text-align: right; font-size: 12px">
		  <el-dropdown>
			<i class="el-icon-setting" style="margin-right: 15px"></i>
			<el-dropdown-menu slot="dropdown">
			  <el-dropdown-item>查看</el-dropdown-item>
			  <el-dropdown-item>新增</el-dropdown-item>
			  <el-dropdown-item>删除</el-dropdown-item>
			</el-dropdown-menu>
		  </el-dropdown>
		  <span>王小虎</span>
		</el-header>
		
		<el-main>
		  <el-table :data="tableData">
			<el-table-column prop="date" label="日期" width="140">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="120">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
		  </el-table>
		   <el-checkbox-group v-model="checkList">
			<el-checkbox label="复选框 A"></el-checkbox>
			<el-checkbox label="复选框 B"></el-checkbox>
			<el-checkbox label="复选框 C"></el-checkbox>
			<el-checkbox label="禁用" disabled></el-checkbox>
			<el-checkbox label="选中且禁用" disabled></el-checkbox>
		  </el-checkbox-group>
		</el-main>
		<el-input
		  type="textarea"
		  autosize
		  placeholder="请输入内容"
		  v-model="textarea1">
		</el-input>
		<div style="margin: 20px 0;"></div>
		<el-input
		  type="textarea"
		  :autosize="{ minRows: 4, maxRows: 4}"
		  placeholder="请输入内容"
		  v-model="textarea2">
		</el-input>
		<div style="margin-top: 15px;">
		  <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
			<el-select v-model="select" slot="prepend" placeholder="请选择">
			  <el-option label="餐厅名" value="1"></el-option>
			  <el-option label="订单号" value="2"></el-option>
			  <el-option label="用户电话" value="3"></el-option>
			</el-select>
			<el-button slot="append" icon="el-icon-search"></el-button>
		  </el-input>
		</div>
	  </el-container>
	</el-container>
</template>

<script>
export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(10).fill(item),
		checkList: ['选中且禁用','复选框 A'],
		textarea1: '',
        textarea2: '',
		input1: '',
		input2: '',
		input3: '',
		select: ''
      }
    }
  };
</script>

<style lang="stylus" scoped>
  import 'element-ui/lib/theme-chalk/display.css'
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>