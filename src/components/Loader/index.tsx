import { useContext } from 'react'
import { SpinnerContainer } from './styles'
import { RingLoader } from 'react-spinners'
import { BookContext } from '../../contexts/BookContext'

export const Loader = () => {
    const { loading } = useContext(BookContext);
    return (
        <SpinnerContainer>
            <RingLoader color="#510b96" loading={loading} />
        </SpinnerContainer>
    )
}
