import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const AddStudent = ({ navigation }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async () => {
        if (!name || !age) {
            Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin');
            return;
        }

        try {
            let response = await fetch('http://localhost:5000/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, age }),
            });

            let data = await response.json();
            if (response.ok) {
                Alert.alert('Thành công', 'Đã thêm sinh viên');
                navigation.goBack(); // Quay lại màn hình trước
            } else {
                Alert.alert('Lỗi', data.error);
            }
        } catch (error) {
            Alert.alert('Lỗi', 'Không thể kết nối đến server');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Thêm sinh viên</Text>
            <TextInput
                placeholder="Nhập tên"
                value={name}
                onChangeText={setName}
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
            />
            <TextInput
                placeholder="Nhập tuổi"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
            />
            <Button title="Lưu" onPress={handleSubmit} />
        </View>
    );
};

export default AddStudent;
