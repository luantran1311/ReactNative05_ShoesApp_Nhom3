import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";

const storage = new Storage({
    // maximun capicty
    size: 1000,
    // Tương tự như localStorage bên web, thì AsyncStorage sẽ lưu những giá trị vào bộ nhớ của app mobile
    storageBackend: AsyncStorage,
    // expire time
    defaultExpires: 24 * 3600 * 1000, // đổi ra đơn vị ms
    enableCache: true
})

export const saveLocalStorage = (key, data) => {
    storage.save({
        key: key,
        data: data,
        expires: 1 * 3600 * 1000 //ms
    })
}

export const loadLocalStorage = async (key) => {
    try {
        let result = await storage.load({
            key: key,
            autoSync: true,
            syncInBackground: true,
        })
        return result;
    } catch (error) {
        return null;
    }

}