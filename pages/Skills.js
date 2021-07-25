import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {toggleBackground} from "../src/store/slices/BackgroundSlice";
import Heading1 from "../src/components/Content/Heading1";
import Experience from "../src/components/Content/Experience";
import Skills from "../src/components/Content/Skills";
import Button from "../src/components/Button";
import Head from "next/head";

function SkillsPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            toggleBackground({
                value: 1002
            })
        )
    }, [dispatch])

    return (
        <>
            <Head>
                <title>Evgeny Berezin - Skills & Experience</title>
            </Head>

            <div className="page" style={{animation: 'pageFadeIn .1s ease-in'}}>
                <div className="content content-skills">
                    <Heading1 title={"Skills & Experience"}/>
                    <Skills skills={[
                        'React',
                        'Next.js',
                        'JavaScript',
                        'TypeScript',
                        'CSS',
                        'Sass',
                        'Scss',
                        'Node.js',
                        'Webpack',
                        'Redux',
                        'Figma',
                        'Photoshop',
                        'HTML',
                        'Git',
                        'SQL'
                    ]}/>
                    <Experience/>
                </div>

                <Button to={"/Navigation"} title={"go back"} isWhite={true} isFixed={false}/>
            </div>
        </>
    )
}

export default SkillsPage