import PropTypes from 'prop-types'
import React from 'react'
import MailchimpForm from 'react-mailchimp-form'
import styles from './Mailchimp.module.scss'

export default function Mailchimp (props) {
  const {heading, subtitle, actionUrl} = props

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        {actionUrl && (
          <MailchimpForm
            action={actionUrl}
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Email',
                type: 'email',
                className: styles.email,
                required: true
              }
            ]}
            buttonClassName={styles.button}
            styles={{
              sendingMsg: {
                color: '#0652DD'
              },
              successMsg: {
                color: '#009432'
              },
              duplicateMsg: {
                color: '#EE5A24'
              },
              errorMsg: {
                color: 'red'
              }
            }}
            messages={{
              sending: 'Enviando...',
              success: 'Obrigado por subscrever-se!',
              error: 'Um erro interno inesperado aconteceu.',
              empty: 'Você precisa escrever um e-mail.',
              duplicate: 'Já subscrito',
              button: 'Subscrever-me!'
            }}
            className={styles.form}
          />
        )}
      </div>
    </section>
  )
}

Mailchimp.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  actionUrl: PropTypes.string
}
