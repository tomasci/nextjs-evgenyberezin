// import Degree from "./Degree.Experience";

import ExperienceItem from "./Item.Experience";

function Experience() {
    return (
        <div className="experience">
            <h2>
                Education
            </h2>

            <ExperienceItem
                title={"2019-2021, Masters degree"}
                description={[
                    "Artificial intelligence, mathematical modeling and supercomputer technologies in the development of information systems"
                ]}
            />

            <ExperienceItem
                title={"2015-2019, Bachelor's degree"}
                description={[
                    "Mathematical software and administration of information systems"
                ]}
            />

            <h2>
                Work
            </h2>

            <ExperienceItem
                title={"2017-2020, Freelance"}
                description={[
                    "I have some freelance projects when I was a student. So it is not continuous work, just something from time to time.",
                    "Various technologies has been used. At the time of the beginning it was PHP, and at the end it was Node, React, express and JavaScript at all."
                ]}
            />

            <ExperienceItem
                description={[
                    "My experience with web like 5 years, and of course I was not learning all this time, but I had much practice.",
                    "That mean that I saw many things, and maybe I don’t know something it’s not stopping me when I developing this website and some other demos here.",
                    "So, I think I know many things, but also as anyone I don’t know many-many other things and I continue learning all of this stuff."
                ]}
            />
        </div>
    )
}

export default Experience