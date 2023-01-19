import { FC, useState } from "react";
// import useTodoList from "../../hooks/useTodoList";
import InputBar from "./InputBar";
import TodoList from "./TodoList";

const Home: FC = () => {
    const [todoListData, setTodoListData] = useState<string[]>(["123", "456"]);

    const addItem = (item: string) => {
        setTodoListData((prev) => [...prev, item]);
    };

    const deleteItem = (deleteIndex: number) => {
        const newListData = JSON.parse(JSON.stringify(todoListData));
        newListData.splice(deleteIndex, 1);
        setTodoListData(newListData);
    };

    return (
        <div>
            <InputBar addItem={addItem} />
            <TodoList data={todoListData} deleteItem={deleteItem} />
        </div>
    );
};

export default Home;
