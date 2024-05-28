const ImageCard = ({ url, title }) => {
  return (
    <>
      <div className='card text-bg-dark'>
        <img src={url} alt={title} className='card-img-top' />
        <div className='card-header text-center display-7 shadow'>
          <div className='card-title'>
            {title}
          </div>
        </div>
      </div>
    </>

  )
}

export default ImageCard
