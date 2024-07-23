import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard';
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
     <h1 className='sectionTitle'>Projects </h1>

<div className={styles.projectsContainer}>

  <ProjectCard src={viberr} 
     link="https://github.com/Amlendu1611/Lilawati-Restaurant-"
      h3='lilawati restaurant'
      p='A Restaurant App'
  />

<ProjectCard src={freshBurger} 
     link="https://github.com/Amlendu1611/Lilawati-Restaurant-"
      h3='lilawati restaurant'
      p='A Restaurant App'
  />

<ProjectCard src={hipsster} 
     link="https://github.com/Amlendu1611/Lilawati-Restaurant-"
      h3='lilawati restaurant'
      p='A Restaurant App'
  />






</div>
 </section>


  );
}

export default Projects;