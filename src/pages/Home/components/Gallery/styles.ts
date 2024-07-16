import styled from "styled-components";

export const GalleryContainer = styled.section`
    height: auto;
    margin-top:8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        text-align: center;
        text-transform:uppercase;
        font-size: 2rem;
        font-weight: bold;
        font-size:2.5rem;
        margin-bottom:.5rem;
        filter: drop-shadow(4px 4px 5px ${props => props.theme.black});
    }
`;

export const GalleryContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
`;

export const Image = styled.div`
    display: flex;
    gap: 40px;
    filter: drop-shadow(2px 2px 2px ${props => props.theme.black});
    div {
        display: flex;
        gap: 40px;

        img {
            width: 100%;
            max-width: 220px;
            height: auto;
        }
    }
`;

export const ImageStylez = styled.div`
display:flex;
flex-direction:column;
filter: drop-shadow(4px 4px 5px ${props => props.theme.black});
        img {
            width: 100%;
            max-width: 300px;
            height: auto;
        }
`

export const ImageStyleColumn = styled.div`
    display:flex;
    margin-top:40px;
    flex-direction:column;
        img {
            width: 100%;
            max-width: 200px;
            height: auto;
        }
`

export const GalleryInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
    max-width: 400px;

    span {
        font-size: 2.5rem;
    }

    strong {
        color: ${props => props.theme['light-purple']};
    }

    a {
        font-size: 1.5rem;
        color: ${props => props.theme.white};
        background-color: transparent;
        border:2px solid ${props => props.theme['light-purple']};
        text-decoration:none;
        padding: 1rem;
        width: 100%;
        border-radius: 20px;
        cursor: pointer;
        filter: drop-shadow(4px 4px 5px ${props => props.theme.black});
        text-transform:uppercase;
        &:hover {
            background-color: ${props => props.theme['dark-purple']};
        }
    }
`;