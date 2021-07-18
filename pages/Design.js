import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {toggleBackground} from "../src/store/slices/BackgroundSlice";
import Oiii from "../src/utils/Oiii/Oiii";
import Heading1 from "../src/components/Content/Heading1";
import ProjectItem from "../src/components/Content/ProjectItem";
import Button from "../src/components/Button";
import Head from "next/head";

function DesignPage() {
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
                <title>Evgeny Berezin - Design demos</title>
            </Head>

            <div className="page" style={{animation: 'pageFadeIn .1s ease-in'}}>
                <div className="content content-code content-design">
                    <Heading1 title={"Design demos"}/>

                    <div className="projectList" data-oi-list={true}>
                        <ProjectItem
                            image={'/uploads/dribbble/evbsite.jpg'}
                            title={'This website'}
                            about={[
                                'I designed my personal website, and you see how it looks right now :)'
                            ]}
                            linkList={[
                                {title: 'evgenyberezin.com', href: 'https://evgenyberezin.com'}
                            ]}
                        />

                        <ProjectItem
                            image={'/uploads/dribbble/subtitles.jpg'}
                            title={'Subtitles editor and translator'}
                            about={[
                                'Recently I search for some subtitle editor application and all of them ugly and without key features that I think must be in program of that class in 2020. So I designed a new one :)'
                            ]}
                            linkList={[
                                {title: 'Dribbble.com', href: 'https://dribbble.com/shots/14232368-Subtitles-editor-and-translator'}
                            ]}
                        />

                        <ProjectItem
                            image={'/uploads/dribbble/spotify_full.jpg'}
                            title={'Spotify iOS App Design - Closer look'}
                            about={[
                                'My try in redesign of Spotify iOS app'
                            ]}
                            linkList={[
                                {title: 'Dribbble.com', href: 'https://dribbble.com/shots/14012919-Spotify-iOS-App-Design-Closer-look'}
                            ]}
                        />

                        <ProjectItem
                            image={'/uploads/dribbble/spotify_collage.jpg'}
                            title={'Spotify iOS App Design'}
                            about={[
                                'My try in redesign of Spotify iOS app'
                            ]}
                            linkList={[
                                {title: 'Dribbble.com', href: 'https://dribbble.com/shots/14009000-Spotify-iOS-App-Design'}
                            ]}
                        />

                        <ProjectItem
                            image={'/uploads/dribbble/avatars.jpg'}
                            title={'Everything (VRTHNG), Kitten & 4itak'}
                            about={[
                                'Logotypes or avatars for telegram channels'
                            ]}
                            linkList={[
                                {title: 'Dribbble.com', href: 'https://dribbble.com/shots/13967879-Everything-VRTHNG-Kitten-4itak'}
                            ]}
                        />

                        <ProjectItem
                            image={'/uploads/dribbble/mapui.jpg'}
                            title={'Neon Map or Neon Navigation'}
                            about={[
                                'Just small Neon Map window/widget with north pointer'
                            ]}
                            linkList={[
                                {title: 'Dribbble.com', href: 'https://dribbble.com/shots/13908614-Neon-Map-or-Neon-Navigation'}
                            ]}
                        />

                        <ProjectItem
                            image={'/uploads/dribbble/authmodal.jpg'}
                            title={'Sign in Modal'}
                            about={[
                                'Authorization modal window'
                            ]}
                            linkList={[
                                {title: 'Dribbble.com', href: 'https://dribbble.com/shots/9478401-Sign-in-Modal'}
                            ]}
                        />

                        <ProjectItem
                            image={'/uploads/dribbble/ivan.jpg'}
                            title={'Discoverivan – Ivan Pritychenko'}
                            about={[
                                'Simple personal website design for my friend'
                            ]}
                            linkList={[
                                {title: 'discoverivan.ru', href: 'https://discoverivan.ru'}
                            ]}
                        />

                        <ProjectItem
                            image={'/uploads/dribbble/batts.jpg'}
                            title={'Be Astronaut: Through The Stars'}
                            about={[
                                'UI/UX for my own game. The game was created with my friend'
                            ]}
                            linkList={[
                                {title: 'Dribbble.com', href: 'https://dribbble.com/shots/5483885-Be-Astronaut'},
                                {title: 'Google Play', href: 'https://play.google.com/store/apps/details?id=org.SkyParadise.BeAstronautTTS'}
                            ]}
                        />
                    </div>
                </div>

                <Button to={"/Navigation"} title={"go back"} isWhite={true} isFixed={false}/>
            </div>
        </>
    )
}

export default DesignPage