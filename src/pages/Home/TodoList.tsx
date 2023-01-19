import { FC } from "react";

interface Props {
    data: string[];
}

const TodoList: FC<Props> = ({ data }) => {
    return (
        <div>
            {Array.isArray(data) &&
                data.map((item, index) => (
                    <div key={`${item}_${index}`}>{item}</div>
                ))}
        </div>
    );
};

export default TodoList;
