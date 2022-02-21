import React, { useState } from 'react';
import stateOptions from './stateoptions.js'
// import makeAnimated from 'react-select/animated';
import { MultiSelect } from "react-multi-select-component";

export default function States() {
    const [selected, setSelected] = useState([]);
        return (
            <div>
            <MultiSelect
                isMulti
                onChange={setSelected}
                className="state-option"
                options={stateOptions}
                value={selected}
                labeledBy={"Select"}
            />
            </div>
        )
    }
