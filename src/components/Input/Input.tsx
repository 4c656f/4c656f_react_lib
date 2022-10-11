import React, {FC} from 'react';

interface InputProps{
    label: "string"| "some";
}

const Input:FC<InputProps> = ({
    label
                              }) => {




    return (
        <div>
            {label}
        </div>
    );
};

export default Input;