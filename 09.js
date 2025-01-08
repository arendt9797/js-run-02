/**
 * Q: 배열 reduce - 객체 목록 통계
 *
 * - `calculateStatistics` 함수를 작성하세요.
 *   1. users 배열이 [{ age: 10 }, { age: 30 }, ...] 형태라고 가정
 *   2. 평균 나이와 최대 나이를 계산 후 { averageAge, maxAge } 반환
 *   3. reduce를 사용
 *
 * @param {{age:number}[]} users
 * @returns {{ averageAge: number, maxAge: number }}
 */

// TODO: calculateStatistics 함수를 작성하세요.
function calculateStatistics(users) {
  let averageAge = 0
  let maxAge = 0
  if (users.length === 0) {
    return { averageAge, maxAge }
  }
  averageAge = users.reduce((acc, cur) => acc + cur.age, 0) / users.length;
  maxAge = users.reduce((max, cur) => {
    return max >= cur.age ? max : cur.age
  }, -Infinity)
  return { averageAge, maxAge }
}

// export를 수정하지 마세요.
export { calculateStatistics };
