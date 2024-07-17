import { APOD } from "./components/APOD";
import { Gallery } from "./components/Gallery";
import { MarsRover } from "./components/MarsRover";
import { HomeContainer, SeeMore, TitlePageContainer } from "./styles"
import { GiGalaxy } from "react-icons/gi";

export const Home = () => {
    return (
        <>
            <HomeContainer>
                <TitlePageContainer>
                    <h1>Explore a galáxia com imagens oficias da nasa!</h1>
                    <GiGalaxy size={40} />
                </TitlePageContainer>

                <div>
                    <SeeMore>
                        <p>DECOLE PARA MAIS INFORMAÇÕES</p>
                    </SeeMore>
                </div>

            </HomeContainer>

            <APOD />

            <Gallery />

            <MarsRover />
        </>
    )
}
