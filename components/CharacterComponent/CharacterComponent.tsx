// import React from 'react';
import type {SimpsonsModel} from "../../models/simpsonsModel.ts";
import * as React from "react";
import type {FC} from "react";

type ChildrenModel = {
    item: SimpsonsModel,
    children: React.ReactNode,
}
const CharacterComponent:FC<ChildrenModel> = ({item, children}) => {
    return (
        <div className="bg-amber-500 mb-4 p-4">
            <h1 className="text-center text-red-900 font-bold pb-2">{item.age} {item.surname}</h1>
            <h2 className="italic">{children}</h2>
            <div className="flex justify-center"><img src={item.photo} alt={item.name} width="130px"/></div>
        </div>
    );
};

export default CharacterComponent;