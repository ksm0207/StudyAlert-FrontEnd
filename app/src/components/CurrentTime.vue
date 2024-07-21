<template>
    <div>
        <h2>Today : {{ currentDateTime }}</h2>
    </div>
</template>

<<script setup>
import { ref, onMounted } from 'vue'

// 현재 날짜와 시간을 구하는 함수
// toLocaleDateString | toLocaleTimeString : 현지에 맞는 시간/날짜 표기법 리턴
const getCurrentDateTime = () => {
  const now = new Date()
  // '2024년 7월 21일' 형식으로 날짜구하기
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }  
  const date = now.toLocaleDateString('ko-KR', dateOptions) 
  const time = now.toLocaleTimeString()

  return `${date} ${time}`
}

const currentDateTime = ref(getCurrentDateTime())
onMounted(() => {
  setInterval(() => {
    currentDateTime.value = getCurrentDateTime()
  }, 1000)
})
</script>