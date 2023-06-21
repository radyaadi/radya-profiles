import React from 'react';
import { SKILL_LIST } from './skill-list';
import SkillList from './SkillList';

const SkillSection = () => {
  return (
    <section>
      <div className="container py-4 min-[400px]:py-6 min-[750px]:py-8 min-[900px]:py-10 min-[1000px]:py-14">
        <h1 className="mb-7 text-center text-[--main-color]">My Skills</h1>
        <SkillList skillList={SKILL_LIST} />
      </div>
    </section>
  );
};

export default SkillSection;
