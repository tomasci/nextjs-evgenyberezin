function ExperienceItem({title = '', description = []}) {
    return (
        <div className="experience-item">
            {(title ? (
                <h2>
                    {title}
                </h2>
            ) : null)}

            {description && description.map((p, index) => {
                return (
                    <p key={index}>
                        {p}
                    </p>
                )
            })}
        </div>
    )
}

export default ExperienceItem