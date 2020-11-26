import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000099'
        },
        secondary: {
            main: '#99ccff'
        },
        white: {
            main: '#ffffff'
        }
    }
})

export default theme;