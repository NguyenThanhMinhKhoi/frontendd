import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getStudents, deleteStudent } from '../services/api';

const StudentList = ({ navigation }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents(); // Reload danh sách sau khi xóa
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách sinh viên</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.studentItem}>
            <Text>{item.name} - {item.age} tuổi</Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => navigation.navigate('EditStudent', { student: item })}>
                <Text style={styles.editButton}>Sửa</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Text style={styles.deleteButton}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddStudent')}>
        <Text style={styles.addButtonText}>Thêm Sinh Viên</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  studentItem: { padding: 10, borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between' },
  actions: { flexDirection: 'row' },
  editButton: { color: 'blue', marginRight: 10 },
  deleteButton: { color: 'red' },
  addButton: { backgroundColor: 'green', padding: 10, marginTop: 20, alignItems: 'center' },
  addButtonText: { color: 'white', fontWeight: 'bold' }
});

export default StudentList;
