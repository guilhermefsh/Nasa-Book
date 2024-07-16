import { AboutContainer, AboutInfo, AboutLinks } from "./styles"

export const About = () => {
    return (
        <AboutContainer>
            <AboutInfo>
                <h4>SOBRE</h4>
                <p>
                    Esse site foi criado com intuito de estudos para consolidar os conhecimentos
                    aprendidos no decorrer do meu treinamento, e, junto a isso poder trazer uma
                    boa experiência para aqueles que gostam de explorar o maravilhoso universo.
                    Todas API’s utilizadas são encontradas no site da  Nasa.
                </p>
            </AboutInfo>

            <AboutLinks>
                <span>LINKS</span>
                <a href="https://api.nasa.gov/" target="_blank">API UTILIZADA</a>
                <a href="https://github.com/guilhermefsh/Nasa-Book/tree/main" target="_blank">Repositório do Projeto</a>
            </AboutLinks>
        </AboutContainer>
    )
}
