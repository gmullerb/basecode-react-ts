// Copyright (c) 2020 Gonzalo Müller Bravo.
import { ReactNode } from 'react'

declare global {
  interface ClickHandlerProp {
    readonly handleClick: <TPARAM, TRES> (arg: TPARAM) => TRES;
  }

  interface ClickProp {
    readonly onClick?: () => void;
  }

  interface ClassNameProp {
    readonly className?: string;
  }

  interface ContainerProp {
    readonly children: ReactNode;
  }

  interface ButtonsProps extends ClassNameProp, ClickProp {
    disabled?: boolean
  }
}
