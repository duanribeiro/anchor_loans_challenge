<template>
  <div>
    <div v-if="isLoading">
      <p>Uploading your file, please wait...</p>
    </div>
    <div v-else>
      <v-file-input 
      v-model="uploadObject" 
      @change="uploadFile"
      />
    </div>
  </div>
</template>

<script>
  import S3 from 'aws-s3';

  export default {
    data(){
      return {
        isLoading: false,
        uploadObject: "",
        uploadeedUrl: ""
      }
    },
    computed: {
      s3Keys(){
        return this.$auth.user.s3_keys;
      },
      config(){
        return {
          bucketName: 'photos-archor-loans',
          dirName: '',
          region: 'us-east-1',
          accessKeyId: '<YOUR_ACCESS_KEY>',
          secretAccessKey: '<YOUR_ACCESS_KEY>,
          s3Url: this.baseURL
        }
      },
      baseURL(){
        return 'https://photos-archor-loans.s3.us-east-1.amazonaws.com'
      },
      S3Client(){
        return new S3(this.config);
      },
      newFileName(){
        return `${Math.random().toString().slice(2, 5)}-${this.uploadObject.name}`
      },
      url(){
        return `${this.baseURL}/${this.newFileName}`;
      }
    },
    methods: {
      uploadFile() {
        let file = this.uploadObject

        this.isLoading = true
        this.S3Client
            .uploadFile(file, this.newFileName).finally(()=>{
              this.isLoading = false
              let fileExtension = file.type.split('/')[1]
              this.uploadedUrl = `${this.url}.${fileExtension}`
              console.log(this.uploadedUrl)

              this.$axios.post(`https://1mtvc0kke3.execute-api.us-east-1.amazonaws.com/dev/photos/upload_file`, {
                'url': this.uploadedUrl,
                'verified': false,
                'likes': 0,
                'comments': []
              })
              .then(function (response) {
                window.location.reload()
              })
              .catch(function (error) {
                console.log(error);
              });
            })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>