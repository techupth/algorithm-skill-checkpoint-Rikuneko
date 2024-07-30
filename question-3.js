/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
O(n) เพราะว่าใช้ ฟังก์ชันต้องตรวจสอบนักเรียนทุกคนในอาร์เรย์ ซึ่งทำให้จำนวนการตรวจสอบตรงกับจำนวนของนักเรียนในอาร์เรย์
*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
O(log n) เพราะ ฟังก์ชันจะเปรียบเทียบค่ากลางของลิสต์กับค่าที่ต้องการและลดช่วงการค้นหาลงครึ่งหนึ่ง
*/

/* 
Which function is more efficient and why?
Answer:
findProductPrice มีประสิทธิภาพมากกว่าเพราะใช้ binary search ซึ่งเป็น O(log n) ถ้าจำนวนของข้อมูลมีขนาดใหญ่ binary search
จะหาข้อมูลได้เร็วกว่า linear search

*/
