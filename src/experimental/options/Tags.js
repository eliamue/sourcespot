import React, { useState } from 'react';
import tags from './tagoptions.js'
// import makeAnimated from 'react-select/animated';
import { MultiSelect } from "react-multi-select-component";

export default function Tags() {
    const [selected, setSelected] = useState([]);
        return (
            <div>
            <MultiSelect
                isMulti
                onChange={setSelected}
                options={tags}
                value={selected}
                labeledBy={"Select"}
            />
            </div>
        )
    }
