function findEmployeeInfo(employees, targetName) {
  // ในฟังก์ชันนี้เราจะมีรายการของพนักงาน (employees) และชื่อที่ต้องการหา (targetName)

  // เราจะใช้ลูป for-of เพื่อดูข้อมูลของแต่ละคนในบริษัท
  for (const employee of employees) {
    // เราจะเช็คว่าชื่อของพนักงานในรายการนี้ตรงกับ targetName หรือไม่
    if (employee.name === targetName) {
      // ถ้าตรงกัน, เราจะคืนข้อมูลของพนักงานนี้ในรูปแบบข้อความ
      return `ชื่อ: ${employee.name}, ตำแหน่ง: ${employee.position}`;
    }
  }

  // ถ้าไม่มีชื่อที่ตรงกับ targetName ในรายการ, เราจะคืนข้อความบอกว่าไม่พบ
  return `ไม่พบพนักงานที่ชื่อ "${targetName}"`;
}

// ตัวอย่างการใช้งาน
const employees = [
  { name: "Arm", position: "Front End" },
  { name: "Game", position: "Back End" },
];

// เราจะใช้ฟังก์ชันนี้เพื่อหาข้อมูลของพนักงานในบริษัท
const jannyInfo = findEmployeeInfo(employees, "Janny");
const gameInfo = findEmployeeInfo(employees, "Game");

// เราจะแสดงผลลัพธ์ที่ได้ใน console
console.log(jannyInfo); // แสดง: "ไม่พบพนักงานที่ชื่อ "Janny""
console.log(gameInfo);  // แสดง: "ชื่อ: Game, ตำแหน่ง: Back End"