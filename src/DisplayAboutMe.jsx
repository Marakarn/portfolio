const Display = ({ section }) => {
    let show;
    if (section === "Profile") {
      show = <DisplayProfile />;
    } else if (section === "Education") {
      show = <DisplayEducation />;
    }

    return <div>{show}</div>;
}

const DisplayProfile = () => {
    return (
        <>
            <p>I graduated from
                <p className="text-3xl inline"> Generation's Junior Software Developer Bootcamp</p>
                <br /><br />determined to pursue a career as a Front-end Software Developer.
                <br />I have 2 years experience in Graphic Design, which allowed me creative, detail-oriented and a team player.
                <br /><br />my passion is to use these skills and experiences to create beautiful and user-friendly websites.</p>
        </>
    )
}

const DisplayEducation = () => {
    return (
        <>
        <div className="mb-10">
            <div className="flex justify-between mb-5">
                <p className="w-3/5 text-lg font-semi">Rajamangala University of Technology Isan, Khonkaen Campus, Khonkaen</p>
                <p className="w-1/5">2015 - 2019</p>
            </div>
                <p>Bachelor of Business Administration, Major in Management, GPAX 3.40</p>
        </div>
        <div>
            <div className="flex justify-between mb-5">
                <p className="w-3/5 text-lg font-semi">KhonKaen Vocational College, Khonkaen</p>
                <p className="w-1/5">2012 - 2015</p>
            </div>
            <p>Certificate of Technical Vocation, Major in Computer Graphics, GPAX 2.78</p>
        </div>
        </>
    )
}

export default Display;