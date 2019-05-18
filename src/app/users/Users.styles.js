
const usersStyles = theme => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    title: {
      flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      height: '100vh',
      overflow: 'auto',
    },
    tableContainer: {
      height: 320,
    },
    h5: {
      marginBottom: theme.spacing.unit * 2,
    },
    actionsHeader: {
      marginTop: '20px',
      borderBottom: 'none'
    },
    createButton: {
      marginTop: '20px'
    },
    userList: {
      margin: 'auto !important'
    },
    paperModal: {
      padding: '2%',
      [theme.breakpoints.up('md')]: {
      width: '30%',
      margin: '5% auto',
      },
      [theme.breakpoints.down('sm')]: {
        width: '80%',
        margin: '5% auto'
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        height: 'auto',
        margin: '0'
      },
    },
    paperCard: {
      [theme.breakpoints.up('md')]: {
      width: '30%',
      margin: '5% auto',
      },
      [theme.breakpoints.down('sm')]: {
        width: '80%',
        margin: '5% auto'
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        height: 'auto',
        margin: '0'
      },
    },
    buttonGroup:{
      'text-align': 'center',
        margin: '1%'
    },
    button: {
      marginRight: theme.spacing.unit,
      width: '40%',
      [theme.breakpoints.down('xs')]: {
        width: '40%',
        marginLeft: '1%',
      }
    },
    success: {
      backgroundColor: 'green',
    },
    error: {
      backgroundColor: 'red',
    },
    message: {
      color: 'white'
    },
    avatar: {
      width: '100%',
      height: '100%',
    }
});

export default usersStyles;
