import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Typography from "@material-ui/core/Typography"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { User } from '../interfaces'

type Props = {
    data: User
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: theme.spacing(12),
            height: theme.spacing(12),
        },
    }),
);

const UserArea = ({ data }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Avatar className={classes.large}>{ data.firstname[0].toUpperCase() }{ data.lastname[0].toUpperCase() }</Avatar>
            <Typography>
                { data.firstname.charAt(0).toUpperCase() + data.firstname.slice(1) } { data.lastname.toUpperCase() }
            </Typography>
        </div>
    )
}

export default UserArea