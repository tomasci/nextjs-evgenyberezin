import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {toggleBackground} from "../src/store/slices/BackgroundSlice";
import Oiii from "../src/utils/Oiii/Oiii";
import Heading1 from "../src/components/Content/Heading1";
import ProjectItem from "../src/components/Content/ProjectItem";
import Button from "../src/components/Button";
import Head from "next/head";

function CodePage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            toggleBackground({
                value: 1002
            })
        )

        let oi = new Oiii()

        return () => {
            oi.unload()
        }
    }, [dispatch])

    return (
        <>
            <Head>
                <title>Evgeny Berezin - Code demos</title>
            </Head>

            <div className="page" style={{animation: 'pageFadeIn .1s ease-in'}}>
                <div className="content content-code">
                    <Heading1 title={"Code demos"}/>

                    <div className="projectList" data-oi-list={true}>
                        <ProjectItem
                            image={'/uploads/dribbble/evbsite.jpg'}
                            title={'This website'}
                            about={[
                                'I developed and designed my personal website, and you see how it works right now :)',
                                'But source code is not available. So, only "how it works" experience.',
                                'Inside: JavaScript, Next.js, SCSS, Redux and Oiii! JS'
                            ]}
                            linkList={[
                                {title: 'evgenyberezin.com', href: 'https://evgenyberezin.com'}
                            ]}
                        />

                        <ProjectItem
                            title={'Oiii! JS'}
                            about={[
                                'My first open-source JavaScript library. It is designed to create beautiful and simple image and video viewer.',
                                'And I think I got my goals. Simple, lightweight and just works. This library also works through all this website so you can touch any image here and watch what happens.',
                                'Inside: JavaScript and SCSS'
                            ]}
                            linkList={[
                                {title: 'GitHub', href: 'https://github.com/tomasci/oiiijs'},
                                {title: 'npmjs', href: 'https://www.npmjs.com/package/oiiijs'},
                                {title: 'jsDelivr', href: 'https://www.jsdelivr.com/package/npm/oiiijs?version=1.0.3&path=build'}
                            ]}
                        />

                        <ProjectItem
                            image={'/uploads/site/kcalorizer.jpg'}
                            title={'kcalorizer – calorie calculator'}
                            about={[
                                'This is my React code demo – Kcal calculator.',
                                'Design is not so good so it is not adapted as well for mobile phones and small PC screens, of course I tried, but it is all ruined from start, so I think it is easier to build "all new" app. But. It mostly my coding ability demonstration so don’t worry about design, my fault. Also used Strapi as backend/API, where products and images, and all the information stored, and from where all you can see is getted. Source code is fully available at GitHub.',
                                'Hosted in USA, sorry if first load is not as fast as your expectation.',
                                'Inside: JavaScript, React, Redux, SCSS and Strapi (backend, database)'
                            ]}
                            linkList={[
                                {title: 'GitHub', href: 'https://github.com/tomasci/kcalorizer'},
                                {title: 'Demo', href: 'http://kcalorizer.evgenyberezin.com'},
                            ]}
                        />
                    </div>
                </div>

                <Button to={"/Navigation"} title={"go back"} isWhite={true} isFixed={false}/>
            </div>
        </>
    )
}

export default CodePage