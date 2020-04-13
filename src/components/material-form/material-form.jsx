import React from 'react'
import {Input} from '@material-ui/core'

export const MaterialForm = () => {
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
                <Input defaultValue="Disabled" disabled inputProps={{ 'aria-label': 'description' }} />
                <Input defaultValue="Error" error inputProps={{ 'aria-label': 'description' }} />
            </form>
        </div>
    )
}


export default MaterialForm