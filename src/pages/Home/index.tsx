import { FC, useEffect, useState } from "react";
// import useTodoList from "../../hooks/useTodoList";
import useFireStore from "../../hooks/useFireStore";
import InputBar from "./InputBar";
import TodoList from "./TodoList";

const Home: FC = () => {
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

    const getListData = async () => {
        const data = await fireStore.getDocument("todoList", "martin");

        if (data) {
            const { todoList } = data;
            setTodoListData(todoList);
        }
    };

    useEffect(() => {
        getListData();
    }, []);

    return (
        <div>
            <InputBar addItem={addItem} />
            <TodoList
                data={todoListData}
                deleteItem={deleteItem}
                getListData={getListData}
                updateItem={updateItem}
            />
        </div>
    );
};

export default Home;
