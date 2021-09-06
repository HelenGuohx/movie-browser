import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUser = async (keyname: string) => {
    let userData = await AsyncStorage.getItem(keyname)
    return userData ? JSON.parse(userData) : null;
}
export const storeUser = async (keyname: string, data: object) => {
    await AsyncStorage.setItem('userData', JSON.stringify(data)) 
    
}

