import  React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header } from "semantic-ui-react";

export class TestContainer extends React.Component {

    render() {
        return (
            <Container>
                <Header content="Test page"/>
                <Button as={Link} content="link to home page" to="/"/>
            </Container>
        )
    }

}

export default TestContainer