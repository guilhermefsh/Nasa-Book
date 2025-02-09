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

    @media(max-width:764px){
        margin: 4rem 0;
        margin-bottom:7rem;
    }

    @media(max-width:600px){
        h3{
            font-size:1.5rem;
        }
    }
`;

export const GalleryContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;

    @media(max-width:890px){
        flex-direction:column;
        div{
            gap:20px;
            margin:0.75rem 0;
        }
    }

    @media(max-width:600px){
        flex-direction:column;
        div{
            gap:20px;
        }
    }
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

    @media(max-width:974px){

        div{
            gap:20px;

            img{
                max-width:200px;
            }
        }
    }

    @media(max-width:600px){
        flex-direction:column;
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
        -webkit-text-stroke-width: 1.3px;
        -webkit-text-stroke-color: black;
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