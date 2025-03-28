import axios from 'axios';

const API_URL = 'http://localhost:5000/students'; // Đổi URL nếu cần

// Lấy danh sách sinh viên
export const getStudents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách sinh viên:', error);
    return [];
  }
};


export const addStudent = async (student) => {
  try {
    const response = await axios.post(API_URL, student);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi thêm sinh viên:', error);
  }
};


export const updateStudent = async (id, student) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, student);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi cập nhật sinh viên:', error);
  }
};

export const deleteStudent = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Lỗi khi xóa sinh viên:', error);
  }
};
