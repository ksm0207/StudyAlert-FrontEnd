<template>
    <div style="border: 1px solid rgb(28, 26, 26);">
        <CurrentTime />
    </div>
    
    <div style="margin-top: 20px;">
        <span>시작시간 : </span>
        <input type="time"
               v-model="firstTime"
               @input="handleStartTimeChange"
        /> |
        <span>종료시간 : </span>
        <input type="time"
               v-model="endTime"
               @input="handleEndTimeChange"
        /> | 
        <button @click="saveStartTime">저장하기</button> <br>
        <button @click="saveHistoryTime">연서꺼 ^^ 저장하기</button> <br>

        <span>적립 포인트 : {{reservePoint}} </span>
        
    </div>


</template>

<script setup>

// get Components
import CurrentTime from '../components/CurrentTime.vue'

import {ref} from 'vue'
import axios from 'axios'

// 시작시간
const firstTime = ref(null)
// 종료시간
const endTime = ref(null)
// 적립포인트
const reservePoint = ref(null)



// 시작시간 클릭함수 
const handleStartTimeChange = (event) => {
    firstTime.value = event.target.value
}
const handleEndTimeChange = (event) => {
    endTime.value = event.target.value
}

// 시작시간이 현재시간보다 작은지 검증
// const handleTimeCheck = () =>{
//     const now = new Date()
//     const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false }
//     const timeFormatter = new Intl.DateTimeFormat('ko-KR', timeOptions)
//     const time = timeFormatter.format(now)
//     return time
// }
// 시작시간 저장하기
const saveStartTime = async () => {
    if (firstTime.value === null || endTime.value === null) {
        alert("시작시간과 종료시간을 입력해주세요.")
        return false;
    }
    // 추후 종료시간 - 시작시간 계산하는 함수필요.
    // 계산된 시간만큼 적립포인트 계산하기

    // 서버저장
    try {

        const response = await axios.post("/v1/hello",{
            first_time : firstTime.value,
            end_time : endTime.value
        })
        alert("응답 값 : ", response.data)
        if (response.data !== null) {
            reservePoint.value = response.data.reserve_point
        }else {
            
        }

    }catch(error) {
        alert("서버오류 : " , error)
        reservePoint.value = 0
    }
}


const saveHistoryTime = async () => {
    if (firstTime.value === null || endTime.value === null) {
        alert("시작시간과 종료시간을 입력해주세요.")
        return false;
    }
    // 추후 종료시간 - 시작시간 계산하는 함수필요.
    // 계산된 시간만큼 적립포인트 계산하기

    // 서버저장
    try {
        const response = await axios.post("/v1/insert",{
            member_id : 1,
            start_date_time : "2024-07-21"+"T"+firstTime.value,
            end_date_time : "2024-07-21"+"T"+endTime.value
        })
        alert("응답 값 : ", response.data)
        if (response.data !== null) {
            reservePoint.value = response.data.reserve_point
        }else {
            
        }

    }catch(error) {
        alert("서버오류 : " , error)
        reservePoint.value = 0
    }
}

</script>