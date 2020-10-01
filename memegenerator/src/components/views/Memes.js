import React from 'react'

export default function Memes(props) {
    console.log(props.match.params.id);
    console.log(props.match.params.text_boxes)
    return (
        <div>
            <h1>Memes Page</h1>
        </div>
    )
}
