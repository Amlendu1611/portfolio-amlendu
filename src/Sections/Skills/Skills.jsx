import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      
      <h1 className='sectionTitle'>Skills</h1>
    <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="HTML" /> 
    <SkillList src={checkMarkIcon} skill="CSS" /> 
    <SkillList src={checkMarkIcon} skill="JAVASCRIPT" /> 
    <SkillList src={checkMarkIcon} skill="TYPESCRIPT" /> 
    <SkillList src={checkMarkIcon} skill="NODE" />
    </div>
    <hr/>

    <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="REACT" /> 
    <SkillList src={checkMarkIcon} skill="ANGULAR" /> 
    <SkillList src={checkMarkIcon} skill="VUE" /> 
    <SkillList src={checkMarkIcon} skill="TAILWIND CSS" /> 
   </div>
    <hr/>

    <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="REDUX" /> 
    <SkillList src={checkMarkIcon} skill="WEBPACK" /> 
    <SkillList src={checkMarkIcon} skill="GIT" /> 
    <SkillList src={checkMarkIcon} skill="JEST" /> 
    <SkillList src={checkMarkIcon} skill="BOOTSTRAP" />
    </div>
    <hr/>





  </section>
  )
}

export default Skills;