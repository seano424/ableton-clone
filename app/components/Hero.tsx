import Image from 'next/image'

function Hero() {
  return (
    <div className='container bg-white'>
      <div className='container relative h-[800px] xl:w-[1350px]'>
        <Image
          src='/images/ableton.jpeg'
          layout='fill'
          objectFit='cover'
          alt='Ableton Hero'
        />
        <h2 className='text-theme-red absolute inset-0 flex items-center justify-center text-9xl font-medium'>
          Ableton
        </h2>
      </div>
    </div>
  )
}

export default Hero
