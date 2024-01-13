import React from "react";
import SkillBox from "./Genral/SkillBox";
import Tagline from "./Genral/Tagline";
import Title from "./Genral/Title-name";
import SkillInfo from "./My info/skills";

function Skills() {
  return (
    <div id="Skills">
      <Title first="Skills &" second="Abilites" icon="1" />
      <Tagline value="Transforming challenges into technical triumphs"/>
      <div id="myskiils">
        {SkillInfo.map((noteItem) => (
          <SkillBox
            src={noteItem.src}
            name={noteItem.name}
          />
        ))}
      </div>
      <div id="Fortest"></div>
    </div>
  );
}
export default Skills;
