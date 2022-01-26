<template>
  <div class="contents-wrap" role="main">
    <content-header :title="title"></content-header>

    <div class="contents-inner">
      <div class="layer-full">
        <div class="scroll-wrap">
          <div class="scroll-inner">
            <div class="sample-wrap">
              <div class="sample-cont">
                <div class="form-wrap">
                  <div class="label-wrap">
                  
                    <div class="label-line">
                      <div class="label-row">
                        <div class="label-tit">업로드</div>
                        <div class="label-list">
                        
                          <div class="file-upload-wrap">
                            <div class="input-wrap">
                              <basic-file
                                div-cls="input-wrap"
                                placeholder="업로드"
                                id="excelFile"
                                ref="excelFile"
                                v-model="fileUploadInfo"
                                type="file"
                              ></basic-file>
                            </div>
                          </div>
                          <button class="btn blue" @click="btnFileUpload">업로드</button>
                          
                        </div>
                      </div>
                    </div>
                    
                    <div class="label-line">
                      <div class="label-row">
                        <div class="label-tit">다운로드</div>
                        <div class="label-list">
                          <div class="file-upload-wrap">
                            <basic-file
                              div-cls="input-wrap"
                              placeholder=" 다운로드"
                              v-model="fileDownInfo"
                              type="text"
                            ></basic-file>
                            <button class="btn blue" @click="btnFileDown">다운로드</button>
                          </div>
  							예) http://192.168.49.63:31123/cmm/fms/fileDown.do?fileNm=a.png
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Breadcrumb, ContentHeader } from "@/components/commonLayout";
import BasicInput from "@/components/input/BasicInput";
import BasicButton from "@/components/button/BasicButton";
import BasicFile from "@/components/file/BasicFile";

export default {
  name: "File01",

  data() {
    return {
      title: "Basic File",
      downloadUrl: "",
      excelDownloadUrl: "",
      image: "",
      imageUrl: "",
      excelFile: "",
      fileUploadInfo: "",
      fileDownInfo: ""
    };
  },

  components: {
    Breadcrumb,
    ContentHeader,
    BasicInput,
    BasicButton,
    BasicFile
  },

  methods: {
    btnFileUpload() {
    	var info = this.fileUploadInfo;
    	
    	if(info == "") {
    		alert("파일 업로드 파일을 선택하세요");
    	} else {
	      let formData = new FormData()
	      formData.append('file', info);
	
	      this.$http.postFile('http://192.168.49.63:31123/sample/file/fileUpload.do', formData, {
	        headers: {
	          'Content-Type': 'multipart/form-data'
	        }
	      })
	      .then((res) => {
	        alert('업로드가 성공하였습니다')
	      })
	      .catch((err) => {
	        console.log('업로드가 실패하였습니다')
	      })
    	}
    },
  
    btnFileDown() {
    	var url = this.fileDownInfo;
    	if(url == "") {
    		alert("파일 다운로드 주소를 입력하세요");
    	} else {
    		return (window.location.href = url);
    	}
    }
    
  }
};
</script>

<style></style>
