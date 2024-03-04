import { FaArrowCircleLeft } from "react-icons/fa";
import { Button } from './styles';

const BackButton = ({styles}: any) => {
    return(
        <Button style={styles}>
            <FaArrowCircleLeft />
        </Button>
    )
}

export default BackButton;