<template>
<transition name="modal" appear>
<div class="modal fade in" role="dialog" style="display: block; padding-right: 17px;">
   <div class="modal-dialog">
     <div class="modal-content">
       <div class="modal-header">
         <button type="button" value="x" class="close" data-dismiss="modal" @click="$emit('close')" style="color:#ccc;"> ×</button>
         <h2 class="modal-title"> {{ title }} </h2>
       </div>
       <div class="modal-body">
         <div style="padding:10px 0 50px 10px;">
           <div class="form-group">
             <h4 class=" pull-left"> {{ message }} </h4>
           </div>
         </div>
         <div class="modal-footer">
           <button class="btn btn-gray" type="button" @click="$emit('close')">취소</button>
           <button class="btn btn-conform" type="button" @click="$emit('action')">실행</button>
         </div>
       </div>
     </div>
   </div>
 </div>
</transition>
</template>

<script>
export default {
  name: 'BasicAlertModal',
  props: [
    'type',
    'title',
    'message',
    'action'
  ]
}
</script>