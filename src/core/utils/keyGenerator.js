/********************************************************************
 * KeyGeneratorApi 정보
 * 
 * 
 *
 ********************************************************************/

import moment from "moment";


const keyGeneratorVersion = "v1.0";

const KeyGeneratorApi = {
		/**
		 * GLOBAL ID 조회
		 *  
		 * 설명 : REST API 호출시 파라미터로 사용
		 */
		globalId(prefix) {
			let uuid =  ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c=> 
    			(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >>  c / 4).toString(16) 
        	);
			
			uuid = uuid.toUpperCase().replace( "-", "" ).substring( 0, 5 );
			
			let dateTime = moment().format("YYYYMMDDHHmmSSSSS");
			
			let rtnData = prefix + uuid + dateTime;
			
			return rtnData;
	    }

}

export default KeyGeneratorApi;
