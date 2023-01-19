import { FC, useState } from "react";
import { MdAdd } from "react-icons/md";

interface Props {
    addItem: (item: string) => void;
}

const InputBar: FC<Props> = ({ addItem }) => {
    const [inputText, setInputText] = useState("");

    const handleAddItem = () => {
        addItem(inputText);
        setInputText("");
    };

    return (
        <div className="flex gap-8">
            <input
                className="border rounded-md px-4 py-2 w-[300px] focus:outline-none focus:border-sky-500"
                type="text"
                value={inputText}
                placeholder="Please Write Something ..."
                maxLength={30}
                onChange={(e) => {
                    setInputText(e.target.value);
                }}
            />
            <button
                className="px-4 py-2 bg-sky-300 text-slate-50 rounded-md flex items-center gap-2 hover:bg-sky-400"
                onClick={handleAddItem}
            >
                Add
                <MdAdd className="text-xl" />
            </button>
        </div>
    );
};

export default InputBar;
