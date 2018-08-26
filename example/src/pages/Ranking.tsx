import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Button from 'reactstrap/lib/Button';
import Offer from 'bitclave-base/repository/models/Offer';

interface Props extends RouteComponentProps<{}> {
}

interface State {
    rank: string;
}

export default class Ranking extends React.Component<Props, State> {
    rank: string;

    constructor(props: Props) {
        super(props);
        this.rank = localStorage.getItem('rank');
    }

    render() {
        return (
            <div className="h-100">
                <Button className="m-2" color="primary" size="sm" onClick={() => this.onBackClick()}>
                    Back
                </Button>
                <Button >
                    {this.rank}
                </Button>
            </div>
        );
    }

    private onBackClick() {
        const {history} = this.props;
        history.goBack();
    }



}
