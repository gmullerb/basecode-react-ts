// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

interface Props {
  readonly b64Content: string;
  readonly contentType: string;
}

export function B64Img({ b64Content, contentType, className }: PropsWithClassName<Props>): React.ReactElement {
  return (
    <img src={`data:${contentType};base64,${b64Content}`} className={className}/>
  )
}
