<template>
  <div>
    <el-upload
      class="upload-demo"
      action="http://localhost:9000/api/storage/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :before-upload="beforeUpload"
      multiple
      :limit="3"
      :data="uploadParams"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button type="primary" @click="downLoad">下载</el-button>
  </div>
</template>

<script>
  export default {
    name: "fileUpload",
    data() {
      return {
        fileList: [],
        uploadParams: {
          serviceId: 'blog',
          md5: '123'
        }
      };
    },
    methods: {
      downLoad() {
        this.$axios('post', 'api/storage/file_download/3c35653c-e866-487f-adc2-d1864002bcdb').then(res => {
        })
      },
      handleRemove(file, fileList) {
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        fileList.push(file);
      },
      beforeUpload(file) {
        let _this = this;
        let result = new Promise((resolve, reject) => {
          _this.$md5file(file, function (err, md5) {
            let params = {
              serviceId: 'blog',
              name: file.name,
              md5: md5
            };
            _this.$axios('get', 'api/storage/bp_upload/check_md5', params).then(res => {
              if (res.status === 200) {
                if(res.data) {
                  alert("文件已经上传过,秒传了！！");
                  reject(res.data);
                } else {
                  // 没有上传过文件,开始分片上传文件
                  // 以1MB为一个分片
                  let shardSize = 1 * 1024 * 1024;    
                  // 文件大小
                  let size = file.size;
                  // 总片数
                  let shardCount = Math.ceil(size / shardSize);
                  console.log("file size : " + size);
                  console.log("shard count : " + shardCount);
                  let data = file.slice(0, size);
                  console.log(data);

                  resolve(res.data);
                }
              }
            });
          });
        });
        return false;
      }
    }
  }
</script>

<style scoped>

</style>
