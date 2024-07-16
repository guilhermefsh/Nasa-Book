import { TbMoodSadDizzy } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { Info, PageNotFoundContainer } from './styles';

export const PageNotFound = () => {
    return (
        <PageNotFoundContainer>
            <Info>
                <h5>PÁGINA NÃO ENCONTRADA</h5>
                <TbMoodSadDizzy size={120} color='#510b96' />
            </Info>

            <Link to='/'>Click aqui e Decole para página inicial!</Link>

        </PageNotFoundContainer>
    )
}
