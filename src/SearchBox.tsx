import {h, Component} from 'preact';

export interface SearchBoxProps {
    name: string
}

export default class SearchBox extends Component<SearchBoxProps, any> {
    render (props) {
        return <input type="text" name="search" />
    }
}
