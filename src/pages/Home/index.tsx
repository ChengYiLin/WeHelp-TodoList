import { FC } from "react";
import InputBar from "./InputBar";
import TodoList from "./TodoList";
import { TodoListProvider } from "../../context/TodoListContext";

const Home: FC = () => {
    return (
        <TodoListProvider>
            <InputBar />
            <TodoList />
        </TodoListProvider>
    );
};

export default Home;
