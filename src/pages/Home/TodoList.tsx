import { FC } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
    data: string[];
    deleteItem: (deleteIndex: number) => void;
}

const TodoList: FC<Props> = ({ data, deleteItem }) => {
    return (
        <div className="my-8 mx-4 max-w-[300px]">
            {Array.isArray(data) &&
                data.map((item, index) => (
                    <div
                        key={`${item}_${index}`}
                        className="py-4 mb-2 border-b-2 flex items-center justify-between"
                    >
                        <p>{item}</p>
                        <div>
                            <button onClick={() => deleteItem(index)}>
                                <RiDeleteBin6Line
                                    className="hover:text-sky-600"
                                    style={{ fontSize: "20px" }}
                                />
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default TodoList;
