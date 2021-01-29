// Testimonial.js
import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import styles from './Testimonial.module.scss'

const builder = imageUrlBuilder(client)

function Testimonial ({name, photo, quote}) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <figure className={styles.figure}>
          <img
            src={builder
              .image(photo)
              .auto('format')
              .width(200)
              .height(200)
              .url()}
            className={styles.photo}
            alt={photo.alt}
          />
        </figure>
        <blockquote className={styles.quote}>{quote}
          {name && <footer>
            <cite id='baseref'>{name}</cite>
          </footer>}
        </blockquote>
      </div>
    </div>
  )
}

export default Testimonial