import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import styles from "./SearchInput.module.scss"

const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
});

function SearchInput() {
    const [options, setOptions] = useState<{ value: string }[]>([]);

    const getPanelValue = (searchText: string) =>
        !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

    const onSelect = (data: string) => {
        console.log('onSelect', data);
    };

    return (
        <>
            <AutoComplete
                options={options}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={(text) => setOptions(getPanelValue(text))}
                placeholder="Search"
                className={styles.input}
            />
        </>
    );
};

export default SearchInput;
