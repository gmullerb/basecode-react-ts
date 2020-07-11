// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

interface Props {
  image: string;
  label: string;
  imageClassName?: string;
  labelClassName?: string;
}

function LabeledImage({
  image,
  label,
  imageClassName,
  labelClassName
}: Readonly<Props>): React.ReactElement {
  return (
    <React.Fragment>
      <img src={image} alt='' className={imageClassName}/>
      <span className={`image-label-padding ${labelClassName}`}>{label}</span>
    </React.Fragment>
  )
}

export {
  Props,
  LabeledImage
}
