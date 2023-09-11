interface YouTubeVideoProps {
  src?: string
}

export default function YouTubeVideo({
  src = 'https://www.youtube.com/embed/9SbnhgjeyXA?si=rvNT9SRUWdGD30Br',
}: YouTubeVideoProps) {
  return (
    <iframe
      className='px-base h-80 w-full xl:h-96'
      src={src}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    ></iframe>
  )
}
