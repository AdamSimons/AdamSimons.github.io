import  React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header } from "semantic-ui-react";

export class HomeContainer extends React.Component {

    render() {
        return (
            <Container>
                <Header content="Home page"/>
                <Button as={Link} content="link to second page index" to="/test"/>
            </Container>
        )
    }

}

export default HomeContainer