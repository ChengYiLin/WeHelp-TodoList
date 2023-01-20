import { FC, useState } from "react";
import {
    RiBallPenLine,
    RiDeleteBin6Line,
    RiCloseLine,
    RiCheckLine,
} from "react-icons/ri";
import { useTodoList } from "../../context/TodoListContext";
interface TodoItemProps {
    index: number;
    content: string;
}

const TodoItem: FC<TodoItemProps> = ({ index, content }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editValue, setEditValue] = useState(content);

    const { updateItem, deleteItem } = useTodoList();

    return (
        <div className="py-4 mb-2 border-b-2 flex items-center justify-between">
            {isEdit ? (
                <input
                    className="focus:outline-none border border-slate-400"
                    type="text"
                    maxLength={30}
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                />
            ) : (
                <p>{content}</p>
            )}
            <div className="flex gap-2">
                {isEdit ? (
                    <>
                        <button
                            onClick={() => {
                                setIsEdit(false);
                                updateItem(index, editValue);
                            }}
                        >
                            <RiCheckLine
                                className="text-teal-400 hover:text-teal-500"
                                style={{ fontSize: "20px" }}
                            />
                        </button>
                        <button
                            onClick={() => {
                                setIsEdit(false);
                                setEditValue(content);
                            }}
                        >
                            <RiCloseLine
                                className="text-rose-400 hover:text-rose-500"
                                style={{ fontSize: "20px" }}
                            />
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setIsEdit(true)}>
                            <RiBallPenLine
                                className="hover:text-teal-500"
                                style={{ fontSize: "20px" }}
                            />
                        </button>
                        <button onClick={() => deleteItem(index)}>
                            <RiDeleteBin6Line
                                className="hover:text-sky-600"
                                style={{ fontSize: "20px" }}
                            />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

interface TodoListProps {}

const TodoList: FC<TodoListProps> = () => {
    const { todoListData } = useTodoList();

    return (
        <div className="my-8 mx-4 max-w-[300px]">
            {Array.isArray(todoListData) &&
                todoListData.map((item, index) => (
                    <TodoItem
                        key={`${item}_${index}`}
                        index={index}
                        content={item}
                    />
                ))}
        </div>
    );
};

export default TodoList;
