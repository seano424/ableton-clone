import Image from 'next/image'

function Hero() {
  return (
    <div className='relative h-[800px]'>
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
  )
}

export default Hero
