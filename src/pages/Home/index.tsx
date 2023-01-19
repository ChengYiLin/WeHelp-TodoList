import { FC, useState } from "react";
import InputBar from "./InputBar";
import TodoList from "./TodoList";

const Home: FC = () => {
    const [todoListData, setTodoListData] = useState<string[]>([]);

    return (
        <div>
            <InputBar setTodoList={setTodoListData} />
            <div>
                <TodoList data={todoListData} />
            </div>
        </div>
    );
};

export default Home;
