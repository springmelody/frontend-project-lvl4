import cn from 'classnames';
import React from 'react';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        const { channels } = props;
    }

    render() {
        const { channels } = this.props;
        console.log('channels', channels);

        return (
            <div className="col-3 border-right">
                <div className="d-flex mb-2"><span>Channels</span>
                    <button type="button" className="ml-auto p-0 btn btn-link">+</button>
                </div>
                <ul className="nav flex-column nav-pills nav-fill">
                    {/*map*/}
                    <li className="nav-item">
                        <button type="button" className="nav-link btn-block mb-2 text-left btn btn-primary">general
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="nav-link btn-block mb-2 text-left btn btn-light">random
                        </button>
                    </li>
                    <li className="nav-item">
                        <div role="group" className="d-flex mb-2 dropdown btn-group">
                            <button type="button" className="text-left flex-grow-1 nav-link btn btn-light">eee</button>
                            <button aria-haspopup="true" aria-expanded="false" type="button"
                                    className="flex-grow-0 dropdown-toggle dropdown-toggle-split btn btn-light"></button>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}