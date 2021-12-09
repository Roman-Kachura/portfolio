import {faJs, faReact,faHtml5} from "@fortawesome/free-brands-svg-icons";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
// export type FontAwesomeIconType = ReturnType<typeof FontAwesomeIcon>;

export const skills:Array<skillType> = [
    {description:'Описание для HTML/CSS',title:'HTML/CSS',icon:faHtml5},
    {description:'Описание для React',title:'React',icon:faReact},
    {description:'Описание для JS',title:'JS',icon:faJs},
]

export type skillType = {
    description:string
    title:string
    icon: IconDefinition
}