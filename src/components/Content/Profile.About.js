import InstagramPhoto from "./InstagramPhoto";

function Profile() {
    function getYearsFromBirth() {
        let birthDate = new Date(1998, 5, 29) // 5 because in js January = 0
        const today = Date.now()
        const diff = today - birthDate.getTime()
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
    }

    return (
        <div className="profile" data-oi-list={true}>
            <InstagramPhoto id={0} uri={'/uploads/avatar.jpeg'}/>
            <div className="basicInfo">
                <div className="name">
                    Evgeny Berezin
                </div>
                <div className="age">
                    <p>
                        {getYearsFromBirth()} y.o.
                    </p>
                    <p>
                        originally from Ukraine
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile