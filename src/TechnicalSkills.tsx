export default function TechnicalSkills() {
  const skills = [
    {
      name: "JavaScript",
    }, {
      name: "HTML",
    }, {
      name: "CSS",
    }, {
      name: "Sass",
    }, {
      name: "Golang",
    }, {
      name: "Docker",
    }, {
      name: "Kubernetes",
    }, {
      name: "C#",
    }, {
      name: "SQL Server",
    }, {
      name: "Kafka",
    }, {
      name: "Azure",
    }, {
      name: "Github Actions",
    },
  ];

  return (
    
    <div className="columns is-multiline is-desktop">
      {skills.map((skill) => 
        <div className="column is-3-desktop is-4-tablet">
          <div className="box">{skill.name}</div>
        </div>
      )}
      
    </div>
  );
}
