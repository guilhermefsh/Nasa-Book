import { ApodContainer, InfoApodContainer, SearchApod } from './styles'
import imageNasa from '../../../../assets/images/shuttleapproaching_nasa_6048.jpg'

export const APOD = () => {
    return (
        <ApodContainer>
            <SearchApod>
                <h4>IMAGEM ASTRONOMICA DO DIA!</h4>
                <form>
                    <input type="date" />
                    <button>Buscar</button>
                </form>
            </SearchApod>
            <InfoApodContainer>
                <figure>
                    <img src={imageNasa} alt="" />
                </figure>
                <div>
                    <h4>TÍTULO</h4>
                    <p>Lorem ipsum proin habitant ipsum fermentum mattis, habitasse tristique iaculis hendrerit congue, aliquet nisi urna donec facilisis.
                        fermentum netus ullamcorper hac imperdiet fermentum cursus, tristique vulputate sagittis arcu himenaeos aliquet tellus, conubia sed
                        pharetra cras ut.
                        lacus platea lacus risus praesent in inceptos id cras ultricies dictum, sagittis tristique purus quam facilisis felis
                        suscipit hendrerit fusce aliquet accumsan, leo feugiat bibendum imperdiet libero magna sit auctor venenatis.
                    </p>
                </div>
            </InfoApodContainer>
        </ApodContainer>
    )
}
