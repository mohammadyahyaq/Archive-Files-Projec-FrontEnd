import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import publicFolder from "./publicFolder";

function SortBy(props) {
    const [sortRule, setSortRule] = useState("");
    const [isAscending, setIsAscending] = useState(true);

    useEffect(() => {
        if(isAscending) {
            document.getElementById("arrow").classList.remove("rotate");
        } else {
            document.getElementById("arrow").classList.add("rotate");
        }
    }, [isAscending]);

    useEffect(() => {
        if(sortRule === "") {
            document.getElementById("arrow-button").classList.add("requires-selection");
            return;
        } else {
            document.getElementById("arrow-button").classList.remove("requires-selection");
        }
        props.controller(prevState => {
            let newFiles = [...prevState];
            switch (sortRule) {
                case "fileName":
                    newFiles = newFiles.sort((x, y) => {
                        if (isAscending) {
                            return x.fileName.localeCompare(y.fileName);
                        } else {
                            return x.fileName.localeCompare(y.fileName) * -1;
                        }
                    });
                    break;
                case "lastModified":
                    newFiles = newFiles.sort((x, y) => {
                        if (isAscending) {
                            return x.lastModified - y.lastModified;
                        } else {
                            return (x.lastModified - y.lastModified) * -1;
                        }
                    });
                    break;
                case "owner":
                    newFiles = newFiles.sort((x, y) => {
                        if (isAscending) {
                            return x.owner.localeCompare(y.owner);
                        } else {
                            return x.owner.localeCompare(y.owner) * -1;
                        }
                    });
                    break;
                default:
                //do nothing
            }
            return newFiles;
        });
    }, [sortRule, isAscending]);

    return (
        <div className="sort-by">
            <select key="1" required onChange={(e) => {
                setSortRule(e.target.value);
            }}>
                <option value="" disabled selected hidden>فرز حسب</option>
                <option value="fileName">اسم الملف</option>
                <option value="lastModified">آخر تعديل</option>
                <option value="owner">صاحب الملف</option>
            </select>
            <button id="arrow-button" onClick={() => {
                if(sortRule !== "") {
                    setIsAscending(!isAscending);
                }
            }}><i id="arrow" className="bi bi-arrow-down"></i></button>
        </div>
    );
}

export default SortBy;