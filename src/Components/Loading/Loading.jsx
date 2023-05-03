import React from 'react';
import {Dimmer, Loader} from "semantic-ui-react";

export default function Loading({inverted = true, content = 'Loading...'}) {
    return (
        <Dimmer active={true} inverted={inverted}>
            <Loader content={content} />
        </Dimmer>
    )
}