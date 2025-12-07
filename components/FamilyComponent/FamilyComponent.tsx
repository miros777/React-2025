import CharacterComponent from "../CharacterComponent/CharacterComponent.tsx";
import {simpsons} from "../../data/simpsonsData.ts";

export const FamilyComponent = () => {
    return (
        <div>
            {simpsons.map((value, index) => {
                return <CharacterComponent key={index} item={value}>{value.info}</CharacterComponent>
                }
            )}
        </div>
    );
};
