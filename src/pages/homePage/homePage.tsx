import StartBlock from "../../widgets/startBlock/ui/startBlock";
import OurServices from "../../widgets/ourServices/ui/ourServices";
import OurTeam from "../../widgets/ourTeam/ui/ourTeam"
import OurMission from "../../widgets/ourMission/ui/ourMission";
import Gallery from "../../widgets/gallery/ui/gallery";
import OurContacts from "../../widgets/ourContacts/ui/ourContacts";

const HomePage = () => {
    return (
        <main>
            <StartBlock/>
            <OurServices/>
            <OurTeam/>
            <Gallery/>
            <OurMission/>
            <OurContacts/>
        </main>
    );
};

export default HomePage;