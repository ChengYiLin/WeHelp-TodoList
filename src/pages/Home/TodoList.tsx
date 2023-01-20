import { FC, useState } from "react";
import {
    RiBallPenLine,
    RiDeleteBin6Line,
    RiCloseLine,
    RiCheckLine,
} from "react-icons/ri";

interface TodoItemProps {
    index: number;
    content: string;
    deleteItem: (deleteIndex: number) => void;
    updateItem: (updateIndex: number, updateContent: string) => void;
    getListData: () => void;
}

const TodoItem: FC<TodoItemProps> = ({
    index,
    content,
    deleteItem,
    updateItem,
    getListData,
}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editValue, setEditValue] = useState(content);

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

interface TodoListProps {
    data: string[];
    deleteItem: (deleteIndex: number) => void;
    updateItem: (updateIndex: number, updateContent: string) => void;
    getListData: () => void;
}

const TodoList: FC<TodoListProps> = ({
    data,
    deleteItem,
    updateItem,
    getListData,
}) => {
    return (
        <div className="my-8 mx-4 max-w-[300px]">
            {Array.isArray(data) &&
                data.map((item, index) => (
                    <TodoItem
                        key={`${item}_${index}`}
                        index={index}
                        content={item}
                        deleteItem={deleteItem}
                        updateItem={updateItem}
                        getListData={getListData}
                    />
                ))}
        </div>
    );
};

export default TodoList;
