import React from 'react'

export default function Picture({ className = '', device, files, alt, ext }) {
  const devices = {
    mobile: device === 'mobile',
    desktop: device === 'desktop',
    all: device === 'all'
  }
  return (
    <picture className={className}>
      { !devices.mobile && 
        <>
          <source media="(min-width: 1104px)" srcSet={`${files[0]}, ${files[1]} 2x`} type="image/webp" alt={alt} loading="lazy"/>
          <source media="(min-width: 1104px)" srcSet={`${files[2]}, ${files[3]} 2x`} type={`image/${ext}`} alt={alt} loading="lazy"/>
          <source media={`(${devices.all ? 'min-width: 768px' : 'max-width: 1104px'})`} srcSet={`${files[4]}, ${files[5]} 2x`} type="image/webp" alt={alt} loading="lazy"/>
          <source media={`(${devices.all ? 'min-width: 768px' : 'max-width: 1104px'})`} srcSet={`${files[6]}, ${files[7]} 2x`} type={`image/${ext}`} alt={alt} loading="lazy"/>
        </>
      }
      { !devices.desktop &&
        <>
          <source media="(min-width: 505px)" srcSet={`${files[devices.all ? 8 : 0]}, ${files[devices.all ? 9 : 1]} 2x`} type="image/webp" alt={alt} loading="lazy"/>
          <source media="(min-width: 505px)" srcSet={`${files[devices.all ? 10 : 2]}, ${files[devices.all ? 11 : 3]} 2x`} type={`image/${ext}`} alt={alt} loading="lazy"/>
          <source media="(max-width: 505px)" srcSet={`${files[devices.all ? 12 : 4]}, ${files[devices.all ? 13 : 5]} 2x`} type="image/webp" alt={alt} loading="lazy"/>
          <source media="(max-width: 505px)" srcSet={`${files[devices.all ? 14 : 6]}, ${files[devices.all ? 15 : 7]} 2x`} type={`image/${ext}`} alt={alt} loading="lazy"/>
        </>
      }
      <img className={className} src={files[2]} type={`image/${ext}`} alt={alt} loading="lazy"/>
    </picture>
  )
}
