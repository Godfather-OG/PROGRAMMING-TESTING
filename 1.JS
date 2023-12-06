function sortArrayByValueAndFrequency(inputArray) {
  // ในขั้นตอนแรก, เราจะสร้าง map เพื่อเก็บความถี่ของแต่ละตัวเลข
  const frequencyMap = {};
  inputArray.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  // ฟังก์ชันที่ใช้ในการเปรียบเทียบตัวเลขตามความถี่และค่า
  const customSort = (a, b) => {
    const freqA = frequencyMap[a];
    const freqB = frequencyMap[b];

    // หากความถี่เท่ากัน, ให้เรียงตามค่า
    if (freqA === freqB) {
      return a - b;
    } else {
      // มิฉะนั้น, เรียงตามความถี่
      return freqA - freqB;
    }
  };

  // ใช้ฟังก์ชันการเรียงลำดับที่กำหนดเองในการเรียงลำดับอาร์เรย์
  const sortedArray = inputArray.sort(customSort);

  return sortedArray;
}

// ตัวอย่างการใช้งาน
const input = [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8];

// เรียกใช้ฟังก์ชันเพื่อเรียงลำดับอาร์เรย์
const result = sortArrayByValueAndFrequency(input);

// แสดงผลลัพธ์ที่ได้
console.log(result);