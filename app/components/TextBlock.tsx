interface TextBlockProps {
  paragraph1?: string
  paragraph2?: string
}

export default function TextBlock({
  paragraph1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quidem totam assumenda modi consequatur ad saepe atque, sed voluptas distinctio. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  paragraph2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nulla beatae rerum illum ex cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ullam.',
}: TextBlockProps) {
  return (
    <div className='px-base flex flex-col gap-4 leading-relaxed'>
      <p className='text-lg font-medium xl:text-3xl'>
        {paragraph1}
      </p>
      <p className='font-light xl:text-xl'>
        {paragraph2}
      </p>
    </div>
  )
}
