import React from 'react'
import { ModalRoutingContext, Link } from 'gatsby-plugin-modal-routing'

export default () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        <Link
          to='./teachers'
        >
          Close Modal
        </Link>

        <h2>Modal Page</h2>

      </div>
    )}
  </ModalRoutingContext.Consumer>
)
