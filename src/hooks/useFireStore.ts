import {
    addDoc,
    getDoc,
    collection,
    doc,
    query,
    setDoc,
    WithFieldValue,
    QueryConstraint,
} from "firebase/firestore";
import { db } from "../lib/firebase/initialize";

const useFireStore = () => {
    const getDocument = async (path: string, ...pathSegments: string[]) => {
        try {
            const specificDoc = doc(db, path, ...pathSegments);

            const result = await getDoc(specificDoc);
            console.info("FireStore : Get Document");

            if (result.exists()) {
                return result.data();
            } else {
                return null;
            }
        } catch (e) {
            console.error(e);
            throw new Error("FireStore Get Document Error");
        }
    };

    const addData = async <T extends WithFieldValue<{}>>(
        collectionName: string,
        addedData: T
    ) => {
        try {
            const specificCollection = collection(db, collectionName);

            await addDoc(specificCollection, addedData);
            console.info("FireStore : Add Document");
        } catch (e) {
            console.error(e);
            throw new Error("FireStore Added Data Error");
        }
    };

    const setData = async <T extends WithFieldValue<{}>>(
        documentPath: string,
        data: T
    ) => {
        try {
            const specificDoc = doc(db, documentPath);

            await setDoc(specificDoc, data);
            console.info("FireStore : Set Document");
        } catch (e) {
            console.error(e);
            throw new Error("FireStore Set Data Error");
        }
    };

    const queryData = async (
        collectionName: string,
        ...queryConstraints: QueryConstraint[]
    ) => {
        try {
            const specificCollection = collection(db, collectionName);

            query(specificCollection, ...queryConstraints);
            console.info("FireStore : Query Data");
        } catch (e) {
            console.error(e);
            throw new Error("FireStore Query Data Error");
        }
    };

    return {
        addData,
        setData,
        queryData,
        getDocument,
    };
};

export default useFireStore;
