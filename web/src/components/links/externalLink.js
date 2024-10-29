import React from 'react'

const ExternalLink = ({ url, linkText, ...rest }) => {
    return (
        <a href={url} target="_blank" rel='noreferrer' {...rest}>{linkText}</a>
    )
}

export default ExternalLink