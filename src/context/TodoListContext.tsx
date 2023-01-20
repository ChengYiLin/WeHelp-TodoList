import {
    useEffect,
    useState,
    createContext,
    useContext,
    FC,
    ReactNode,
} from "react";
import useFireStore from "../hooks/useFireStore";

interface IContextValue {
    todoListData: string[];
    addItem: (item: string) => void;
    updateItem: (updateIndex: number, updateContent: string) => void;
    deleteItem: (deleteIndex: number) => void;
}

const InitialContextValue: IContextValue = {
    todoListData: [],
    addItem: () => {},
    updateItem: () => {},
    deleteItem: () => {},
};

const TodoListContext = createContext<IContextValue>(InitialContextValue);

// Provider
const TodoListProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [todoListData, setTodoListData] = useState<string[]>([]);
    const fireStore = useFireStore();

    const addItem = (item: string) => {
        const newListData = [...JSON.parse(JSON.stringify(todoListData)), item];

        fireStore
            .setData(`todoList/martin`, {
                lastUpdatedTime: new Date().toLocaleString(),
                todoList: newListData,
            })
            .then(() => setTodoListData(newListData))
            .catch((error) => {
                alert("Add Error");
                console.error(error);
            });
    };

    const updateItem = (updateIndex: number, updateContent: string) => {
        const newListData = [...JSON.parse(JSON.stringify(todoListData))];

        newListData.splice(updateIndex, 1, updateContent);

        fireStore
            .setData(`todoList/martin`, {
                lastUpdatedTime: new Date().toLocaleString(),
                todoList: newListData,
            })
            .then(() => setTodoListData(newListData))
            .catch((error) => {
                alert("Update Error");
                console.error(error);
            });
    };

    const deleteItem = (deleteIndex: number) => {
        const newListData = JSON.parse(JSON.stringify(todoListData));
        newListData.splice(deleteIndex, 1);

        fireStore
            .setData(`todoList/martin`, {
                lastUpdatedTime: new Date().toLocaleString(),
                todoList: newListData,
            })
            .then(() => setTodoListData(newListData))
            .catch((error) => {
                alert("Delete Error");
                console.error(error);
            });
    };

    useEffect(() => {
        const getListData = async () => {
            const data = await fireStore.getDocument("todoList", "martin");

            if (data) {
                console.log(data);
                const { todoList } = data;
                setTodoListData(todoList);
            }
        };

        getListData();
    }, []);

    console.log(todoListData);
    console.log("----");
    return (
        <TodoListContext.Provider
            value={{
                todoListData,
                addItem,
                updateItem,
                deleteItem,
            }}
        >
            {children}
        </TodoListContext.Provider>
    );
};

// useContext
const useTodoList = () => {
    const context = useContext(TodoListContext);

    if (context === undefined) {
        console.error("useTodoList must be used within a TodoListProvider");
    }
    return context;
};

// export
export { useTodoList, TodoListProvider };
