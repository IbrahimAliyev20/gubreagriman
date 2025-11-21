import React from 'react'
import BlogCard from '../shared/blog-card'

function BlogSec() {
  const blogData = [
    {
      id: 1,
      title: "Новое минеральное удобрение в линейке",
      description: "AGRO GUBRA представила инновационное минеральное удобрение, которое повышает урожайность зерновых культур на 15%.",
      image: "public/images/blogcard.png"
    },
    {
      id: 2,
      title: "Запуск современного центра орошения",
      description: "В Шамкирском районе открыт сервисный центр по установке систем капельного полива для фермеров.",
    },
    {
      id: 3,
      title: "Международная агровыставка в Баку",
      description: "Наша компания приняла участие в крупнейшей агровыставке региона, представив новые семена и стимуляторы роста.",
    },
    {
      id: 4,
      title: "Обновление лабораторных услуг",
      description: "AGRO GUBRA расширила спектр лабораторных анализов — теперь доступны тесты на микроэлементы почвы и качество воды для полива.",
    }
  ]

  return (
    <section className="py-4 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 md:mb-12 flex md:flex-row flex-col items-center justify-between w-[100%]">
        
        <div className='w-full md:w-[30%] mb-4 md:mb-0'>
        <p className="text-[#69B159] text-sm md:text-lg font-medium">Будьте в курсе последних обновлений</p>
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#1E4300]">Новости и события</h2>  
        </div>

        <div className='w-full md:w-[60%] border-b-2 border-black py-2 md:py-3'>
        <p className="text-gray-600 text-xs md:text-sm max-w-2xl">
            Мы делимся важными событиями компании, новыми продуктами и тенденциями в агросфере, чтобы наши партнёры и клиенты всегда оставались на шаг впереди.
          </p>
        </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSec