import React from 'react'
import { View } from "remax/one";
import classNames from 'classnames';
// @ts-ignore
import * as eva from 'eva-icons';
import { EvaFillSvgType, EvaOutLineSvgType } from './types'
import hexToRgb from './hexToRgb'

interface Props {
    width?: number
    height?: number
    icon: EvaFillSvgType | EvaOutLineSvgType | string
    color?: string
    className?: string
    customizeStyle?: React.CSSProperties
}

export default function EggIcon (prop : Props) {
    const { 
        width, height, color, className, customizeStyle
    } = prop

    const classNameProps = classNames('egg-flexbox', className)

    return (
        <View>
            <View
            className={classNameProps}
            style={{
                width: `${width}px`,
                height: `${height || width}px`,
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="${hexToRgb(color || '#000')}" viewBox="0 0 24 24">${eva.icons[prop.icon].contents}</svg>')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                ...customizeStyle,
            }}
            />
        </View>
    )
}

EggIcon.defaultProps = {
    width: 36,
}