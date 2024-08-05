'use client'

import { AutoComplete, Input, SelectProps } from "antd";
import styles from "./SearchInput.module.scss";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { searchService } from "@/store/features/service/serviceSlice";
import { useRouter } from "next/navigation";
import { ServiceType } from "@/helpers/interfaces/service.interface";

function SearchInput() {
    const [options, setOptions] = useState<SelectProps<object>["options"]>([]);
    const dispatch = useAppDispatch();
    const navigate = useRouter();
    const [searchValue, setSearchValue] = useState<string>("");

    const handleSearchAntd = async (value: string) => {
        console.log("handleSearchAntd called with value:", value);
        setSearchValue(value);
        if (value.trim() !== "") {
            const resultAction = await dispatch(searchService(value.trim()));
            if (searchService.fulfilled.match(resultAction)) {
                const searchResults = resultAction.payload as unknown as ServiceType[];
                if (Array.isArray(searchResults)) {
                    console.log("Search results:", searchResults);
                    setOptions(
                        searchResults.map((service) => ({
                            value: `${service.title_for_image} ${service.title_for_image2}`,
                            label: (
                                <div
                                    key={service.id}
                                    style={{ display: "flex", justifyContent: "space-between" }}
                                    onClick={() => navigate.push(`/service/${service.id}`)}
                                >
                                    <span style={{ cursor: "pointer" }}>
                                        {service.title_for_image} {service.title_for_image2}
                                    </span>
                                </div>
                            ),
                        }))
                    );
                } else {
                    console.log("Search results is not an array:", searchResults);
                    setOptions([]);
                }
            } else {
                console.log("Search service rejected:", resultAction);
                setOptions([]);
            }
        } else {
            setOptions([]);
        }
    };

    const onSelect = (value: string) => {
        setSearchValue("");
        // console.log(value);
    };

    const handleStopClose = (event: React.MouseEvent<HTMLInputElement>) => {
        event.stopPropagation();
    };

    return (
        <div className={styles.modalBackground}>
            <AutoComplete
                popupMatchSelectWidth={325}
                options={options}
                style={{ marginBottom: 15 }}
                size="large"
                onSelect={onSelect}
                onSearch={handleSearchAntd}
                onClick={handleStopClose}
                value={searchValue}
            >
                <Input.Search
                    className={styles.AutoComplete}
                    placeholder="Search..."
                    enterButton
                />
            </AutoComplete>
        </div>
    );
}

export default SearchInput;
