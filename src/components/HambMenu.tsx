import { useNavigate } from "react-router-dom"
import '../styles/HambMenu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faXmark,
  faUserPlus,
  faChartSimple,
  faClipboardList,
  faFolderPlus,
  faList,
  faAddressBook,
  faSquarePollVertical,
  faRightFromBracket,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Menu, MenuItem, Tooltip, Typography } from "@mui/material"

const DesktopMenu = ({ redirection, options, name }: { redirection: any, options: any, name: string }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="m-auto mx-4">
      <Tooltip title={name}>
        <button onClick={handleClick}>
          <span className="m-auto cursor-pointer mx-2">{name}</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {options.map((elem: any) => (
          <MenuItem key={elem.name} onClick={() => redirection(elem.url)}>
            <FontAwesomeIcon icon={elem.icon} className="mx-2" />
            <Typography variant="inherit">{elem.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
const HambMenu = ({ removeSession }: { removeSession: any }) => {
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(false)
  const options = {
    Ventas: [
      { name: 'Ultimos pedidos', url: 'sales', icon: faClipboardList },
      { name: 'Historial de ventas', url: 'history-sales', icon: faSquarePollVertical }
    ],
    Productos: [
      { name: 'Agregar producto', url: 'add-product', icon: faFolderPlus },
      { name: 'Ver catalogo', url: 'list-products', icon: faList },
      { name: 'Carga mediante CSV', url: 'create-csv', icon: faFolderPlus }
    ],
    Clientes: [
      { name: 'Agregar cliente', url: 'add-client', icon: faUserPlus },
      { name: 'Lista de clientes', url: 'list-clients', icon: faAddressBook },
      { name: 'Ver estadisticas', url: 'stats', icon: faChartSimple }
    ],
  }

  const redirection = (url: string) => {
    setOpenMenu(false)
    navigate(url)
  }
  return (
    <>
      {window.screen.width < 768 ?
        <div className="hamburger-menu">
          <FontAwesomeIcon
            style={{ width: '20px', height: '20px' }}
            icon={faBars}
            onClick={() => setOpenMenu(true)}
          />
          {openMenu &&
            <div className="menu-hamb">
              <div className="flex justify-end p-3">
                <FontAwesomeIcon
                  style={{ width: '20px', height: '20px' }}
                  icon={faXmark}
                  onClick={() => setOpenMenu(false)}
                />
              </div>
              <div className="menu-hamb-links">
                {Object.entries(options).map(([key, value]) => (
                  <div key={key}>
                    <h2 className="text-xl px-2 mt-5">{key}</h2>
                    <hr />
                    <div className="px-3 flex flex-col items-start">
                      {value.map(elem => (
                        <button className='btn-link' onClick={() => redirection(elem.url)}>
                          <FontAwesomeIcon icon={elem.icon} />
                          <span className="mx-2">{elem.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

              </div>

              <div className="px-3 mt-10 flex justify-end">
                <button className="close-session" onClick={() => removeSession()}>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  <span className="mx-2">Cerrar sesion</span>
                </button>
              </div>
            </div>
          }
        </div>
        :
        <div className="flex">
          {Object.entries(options).map(([key, value]) => (
            <DesktopMenu redirection={redirection} options={value} name={key} key={key} />
          ))}
          {/* <DesktopMenu redirection={redirection} /> */}
          <div className="flex items-center">
            <button className="close-session" onClick={() => removeSession()}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span className="mx-2">Cerrar sesion</span>
            </button>
          </div>
        </div>
      }
    </>
  )
}

export default HambMenu