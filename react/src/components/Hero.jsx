export default function Hero() {
  return (
    <section className='relative'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Hero content */}
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
          {/* Section header */}
          <div className='text-center pb-12 md:pb-16'>
            <h1
              className='text-5xl md:text-8xl font-extrabold leading-tighter tracking-tighter mb-4'
              data-aos='zoom-y-out'
            >
              Make your physique{" "}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
                wonderful
              </span>
            </h1>
            <div className='max-w-3xl mx-auto'>
              <p
                className='text-xl text-gray-600 mb-8'
                data-aos='zoom-y-out'
                data-aos-delay='150'
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium similique totam ea soluta sunt rerum ducimus
                possimus maxime magni.
              </p>
              <div className='flex items-center justify-between max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center'>
                <div>
                  <a
                    className='p-4 text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0'
                    href='#0'
                  >
                    Start free trial
                  </a>
                </div>
                <div>
                  <a
                    className='p-4 text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4'
                    href='#0'
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
