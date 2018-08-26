import * as React from 'react';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import SearchRequest from 'bitclave-base/repository/models/SearchRequest';
import { default as AbstractHolder, AbstractProperties, AbstractState } from './AbstractHolder';

interface Properties extends AbstractProperties<SearchRequest> {
}

export default class SearchRequestHolder extends AbstractHolder<Properties, SearchRequest, AbstractState> {

    public bindModel(model: SearchRequest): object {
        return (
            <Row>
                <Col className="client-data-item-field" xs="2" sm="1">{this.props.model.id.toString()}</Col>
                <Col className="client-data-item-field" xs="6" sm="4">{this.prepareFields()}</Col>
            </Row>
        );
    }

    private prepareFields() {
        const result: Array<object> = [];

        this.props.model.tags.forEach((value, key) => {
            if(key == 'rank' && value < 2){
                result.push(<div class='this-is-red' key={key.toString()}> <font color="red"> {key} => {value}</font></div>);
            }
            else{
                if(key == 'rank' && value < 4){
                    result.push(<div key={key.toString()}><font color="yellow"> {key} => {value}</font></div>);
                } else{
                    if(key == 'rank'){
                        result.push(<div key={key.toString()}><font color="green"> {key} => {value}</font></div>);
                    } else{
                        result.push(<div key={key.toString()}> {key} => {value}</div>);
                    }
                    
                }
                
            }
        });

        return result;
    }

}
