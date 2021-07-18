import {particlesConfig} from "../particles.conf";
import {useSelector} from "react-redux";
import Particles from "react-particles-js";
import {useEffect} from "react";
import {generateNoise} from "../utils/Noise";

function Background() {
    const bgValue = useSelector((state) => state.background.value)

    useEffect(() => {
        generateNoise()
    }, [])

    return (
        <div className={'background'}>
            {bgValue === 1002 ? <div className="milkyWay milkyWay-top"/> : <div className="milkyWay"/>}
            {bgValue === 0 ? <div className="moon"/> : (bgValue === 1001) ? <div className="moon moon-left"/> : (bgValue === 1002) ? <div className="moon moon-out"/> : <div className="moon"/> }
            {bgValue === 0 ? <div className="earth"/> : (bgValue === 1001) ? <div className="earth earth-left"/> : (bgValue === 1002) ? <div className="earth earth-out"/> : <div className="earth"/> }

            <div className="noise"/>
            <Particles
                width={'100vw'}
                height={'100vh'}
                params={particlesConfig}/>
            {bgValue === 0 ? <div className="bg bg-type-index"/> : (bgValue === 1000) ? <div className="bg bg-type-index bg-type-index-show"/> : <div className="bg bg-type-index"/> }
        </div>
    )
}

export default Background