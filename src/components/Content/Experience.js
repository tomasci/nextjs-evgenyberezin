import Degree from "./Degree.Experience";

function Experience() {
    return (
        <div className="experience">
            <div className="intro">
                <p>
                    Not a great achievement, but I have 2 degrees:
                </p>
            </div>

            <Degree
                title={"2019-2021, Masters degree"}
                description={"Artificial intelligence, mathematical modeling and supercomputer technologies in the development of information systems"}
            />

            <Degree
                title={"2015-2019, Bachelor's degree"}
                description={"Mathematical software and administration of information systems"}
            />

            <div className="work">
                <p>
                    I never worked (except some freelance), but my experience with web like 5 years, and of course I was not learning all this time, but I had much practice.
                </p>
                <p>
                    That mean that I saw many things, and maybe I don’t know something it’s not stop me when I developing this website and some other demos here.
                </p>
                <p>
                    So, I think I know many things, but also as anyone I don’t know many-many other things and I continue learning all of this stuff.
                </p>
            </div>
        </div>
    )
}

export default Experience