import styles from './Skills.module.css';

function Skills() { 
  const skillList = ["HTML", "CSS","JavaScript", "React"] ;
 return (
    <div className={styles.skills}>
    <h2>Skills</h2>
    <ul>
      {skillList.map((skill) => (
       <li key={skill}>{skill}</li>
      ))}
    </ul>
    </div>
  );
}

export default Skills;