import React from 'react';
import { createBlock } from '../../component';

class Mix extends React.Component {
    static blockTag = 'div';
    static blockName = 'mix';
    static blockMods = [
        'width',
        'round',
        'round-top',
        'round-right',
        'round-bottom',
        'round-left',
        'round-top-left',
        'round-top-right',
        'round-bottom-left',
        'round-bottom-right',
    ];

    render() {
        return (
            React.createElement(
                this.getTagName(),
                this.getProps(),
            )
        );
    }
}

export default createBlock(Mix);
