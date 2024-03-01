import { Container, ImageAbout } from './styles';

const ImageText = ({ imageSrc, altText, listItem, titleItem }: any) => {
    return(
        <Container>
        <ImageAbout src={imageSrc} alt={altText} />
            {titleItem.map((title: any, index: any) => (
                <h2 key={index}> {title} </h2>
            ))}

            <ul>
                {listItem.map((item: any, index: any) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            
        </Container>
    )
}

export default ImageText;