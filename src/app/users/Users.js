import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { 
  CssBaseline, 
  AppBar, 
  Toolbar, 
  Typography, 
  Button,
  Grid,
  Paper,
  Snackbar,
  SnackbarContent,
  IconButton,
  Table, 
  TableBody,
  TableCell,
  TableFooter,
  TablePagination, 
  TableRow,
  TableHead,
  Hidden
}  from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import Edit from '@material-ui/icons/Edit';
import PaginationActions from '../common/components/PaginationActions';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import usersStyle from './Users.styles';
import {logout} from '../common/actions/actions';
import {fetchUsersPage, createUser, editUser, getUser} from './Users.actions';

import UserModal from './User.modal'

class Users extends React.Component {
  state = {
    error: null,
    modalType: null,
    openModal: false,
    userInfo: null,
    toastMessage: null,
    renderToast: false,
    toastType: null,
    page: 0
  }

  componentDidMount() {
    const {page} = this.state;
    this.props.fetchUsersPage(page).then(res => {
      this.setState({
        page: this.props.usersList.page
      })
    }).catch(err => {
      this.setState({
        error: 'HA OCURRIDO UN ERROR CARGANDO USUARIOS'
      })
    })
  }

  handleUserChange = field => event => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [field]: event.target.value
      }
    });
  }

  handleChangePage = (event, currentPage) => {
    if(event) {
      this.props.fetchUsersPage(currentPage).then(res => {
        this.setState({
          page: this.props.usersList.page
        })
      }).catch(err => {
        this.setState({
          error: 'HA OCURRIDO UN ERROR CARGANDO USUARIOS'
        })
      })
    } else {
      return;
    }
  };


  handleOpenModal = (type, userId) => {
    if(userId) {
        this.props.getUser(userId).then((res) => {
          const {user} = this.props
          this.setState({
            modalType: type,
            userInfo: user,
            openModal: true
          })
        }).catch(err => {
          console.log(err)
        })
    } else {
      this.setState({
        modalType: type,
        userInfo: null,
        openModal: true
      })
    }
  }

  handleModalButton = (type) => {
    const {userInfo} = this.state
    if(type === 'Create') {
      this.props.createUser(userInfo).then(() => {
        this.renderToast('success', 'Usuario creado correctamente')
      }).catch(err => {
        this.renderToast('error', 'ERROR AL CREAR USUARIO')
      })
    } else {
      this.props.editUser(userInfo).then(() => {
        this.renderToast('success', 'Cambios Guardados')
      }).catch(err => {
        this.renderToast('error', 'Los cambios no pudieron ser guardados')
      })
    }
  }

  handleToastClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ renderToast: false });
  };

  renderToast = (type, message) => {
    this.setState({
      toastMessage: message,
      renderToast: true,
      toastType: type
    })
    
  }

  handleCloseModals = () => {
    this.setState({ 
      modalType: null,
      userInfo: null,
      openModal: false
    });
  }


  render() {
    const { classes, auth, authUser, usersList} = this.props;
    const {openModal, userInfo, modalType, renderToast, toastType, toastMessage, page} = this.state

    return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar
        position="absolute"
        className={classNames(classes.appBar)}
        >
        <Toolbar className={classes.toolbar}>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {auth.name || authUser.name}
            </Typography>
            <Button onClick={this.props.logout}>Logout</Button>
        </Toolbar>
        </AppBar>
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
            <Grid item md={8} xs={12} className={classes.userList}>
            {
              usersList &&
              <Paper className={classes.paper}>
              <Table className={classes.table}>
              <TableHead>
                <TableCell align="left" className={classes.actionsHeader}>
                <Button color="primary" className={classes.createButton} variant="contained" onClick={() => this.handleOpenModal('Create')}>
                  Crear Usuario
                </Button>
                </TableCell>
              </TableHead>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Apellido</TableCell>
                  <TableCell align="center">Acciones</TableCell>
                </TableRow>
              </TableHead>
                <TableBody>
                  {usersList.pages[page].map(row => (
                    <TableRow key={row.id}>
                      <TableCell scope="row">
                        {row.first_name}
                      </TableCell>
                      <TableCell>{row.last_name}</TableCell>
                      <TableCell align={'center'}>
                        <Button color="primary" variant="contained" onClick={() => this.handleOpenModal('View', row.id)}>
                          <Hidden only="xs">
                            Ver Usuario
                          </Hidden>
                          <Hidden only={['sm', 'lg', 'md']}>
                          <Visibility />
                          </Hidden>
                        </Button>
                        <Button color="secondary" variant="contained" onClick={() => this.handleOpenModal('Edit', row.id)}>
                          <Hidden only="xs">
                            Editar Usuario
                          </Hidden>
                          <Hidden only={['sm', 'lg', 'md']}>
                            <Edit />
                          </Hidden>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[5]}
                      colSpan={3}
                      count={usersList.total}
                      rowsPerPage={usersList.per_page}
                      page={page}
                      SelectProps={{
                        native: true,
                      }}
                      onChangePage={this.handleChangePage}
                      ActionsComponent={PaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </Paper>
            }
            </Grid>
        </main>
        <UserModal className={classes.modalStyle} {...this.props} open={openModal} handleClose={this.handleCloseModals} type={modalType} user={userInfo} onChange={this.handleUserChange} handleModalButton={this.handleModalButton}/>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={renderToast}
          onClose={this.handleToastClose}
          autoHideDuration={2000}
        >
        <SnackbarContent
        className={classes[toastType]}
        message={<span className={classes.message} id="client-snackbar">{toastMessage}</span>}
        >
        </SnackbarContent>
        </Snackbar>
    </div>

    );
  }
}


const mapStateToProps = state => {
  console.log(state);
  return ({
    isAuthenticated: state.auth.isAuthenticated,
    authUser: state.auth.user,
    user: state.users.user,
    usersList: state.users.usersList
  })}

const mapDispatchToProps = {
  logout,
  fetchUsersPage,
  createUser,
  getUser,
  editUser
}

export default compose(withStyles(usersStyle), connect(mapStateToProps, mapDispatchToProps))(Users)
