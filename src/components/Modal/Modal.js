import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { XSVG } from 'components'
import { useDetectOutsideClick } from 'hooks'
import { SModal } from './SModal'

const Modal = ({ children, handleModal, ...props }) => {
  const { show, title } = props

  const modalContentRef = useRef()

  useDetectOutsideClick(modalContentRef, () => {
    if (show) handleModal()
  })

  const handleCloseModal = () => {
    handleModal()
  }

  return (
    <SModal show={show} className="modal">
      <div ref={modalContentRef}>
        <div>
          <div>
            <h1>{title || 'Filters'}</h1>
            <button onClick={handleCloseModal}>
              <XSVG />
            </button>
          </div>
        </div>
        {children}
      </div>
    </SModal>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  handleModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
}

export default Modal
