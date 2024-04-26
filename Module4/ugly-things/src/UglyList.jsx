import React, { useContext } from "react";
import { AppContext } from "./AppContext";

export default function UglyList() {
    // passing down the value of Ugly using Context
    const {ugly} = useContext(AppContext)

        return (
            <div>
                {ugly}
            </div>
        )

}