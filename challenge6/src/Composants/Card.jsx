function Card () {
    const Cards=[
        {
            description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine",
            image: "/images/profile-1.jpg",
            name: "Satish Patel",
            title: "Founder & CEO, Huddle"
        },
        {
            description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine",
            image: "/images/profile-2.jpg",
            name: "Bruce McKenzie",
            title: "Founder & CEO, Huddle"
        },
        {
            description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine",
            image: "/images/profile-3.jpg",
            name: "Iva Boyd",
            title: "Founder & CEO, Huddle"  
        }
    ]


  return (
    <div className='grid grid-cols-1 md:grid-cols-3 text-neutral-white p-4 w-full place-items-center '>
      {Cards.map(({ image, title, description, name }) => (
        <div key={title} className='flex flex-col text-neutral-white m-4 w-80 bg-primary-navy-850 p-6 rounded-lg shadow-xl'>
            <p className='text-sm'>{description}</p>
            <div className="flex gap-2 items-center mt-4">
                <img src={image} alt={title} className='w-8 h-8 mb-2 rounded-full' />
                <div>
                    <p className='text-sm font-bold mt-2'>By {name}</p>
                    <h4 className='text-xs mb-2'>{title}</h4>
                </div>
                
            </div>      
          
          
        </div>
      ))}
    </div>
  );
}
export default Card;




   