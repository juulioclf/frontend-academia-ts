import ImageText from "../Images/ImagesText";
import { Container, BlockImage } from "./styles";
import ManRunning from '../../Assets/images/man-running.jpg'
import ManLifting from '../../Assets/images/man-lifting.webp'


export default function Services () {

    const TitleLeft = [
        "Basic Fitness"
    ]

    const Titleright = [
        "Medium Fitness"
    ]

    const Listleft = [
        "Consultoria online",
        "Protocolo para iniciantes",
        "Protocolo para atletas",
    ]

    const Listright = [
        "Protocolo personalizado",
        "envio por e-mail",
        "em pdf",
    ]

    return (
        <Container>
            <h1>NOSSOS <strong>SERVIÇOS</strong>:</h1>
            <BlockImage>
                <ImageText imageSrc={ManRunning} altText="homem correndo" titleItem={TitleLeft} listItem={Listleft} />
                <ImageText imageSrc={ManLifting} altText="homem levantando peso" titleItem={Titleright} listItem={Listright} />
            </BlockImage>
        </Container>
    )
}
