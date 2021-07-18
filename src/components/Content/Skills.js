function Skills({skills}) {
    return (
        <div className="skillList">
            {skills.map((skill, index) => {
                return (
                    <div className={"tag"} key={index}>
                        <span>
                            {skill}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Skills