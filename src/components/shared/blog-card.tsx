"use client"
import React from 'react'
import { Plus } from 'lucide-react'
import Image from 'next/image'

interface BlogCardProps {
  title: string
  description: string
}

function BlogCard({ title, description }: BlogCardProps) {
  return (
    <div >

      <div className="flex justify-between mb-4">
        <h3 className="text-[20px] font-semibold text-black leading-tight ml-3">
          {title}
        </h3>
        <button
          type="button"
          className="cursor-pointer w-[80px] h-[45px] flex items-center justify-center rounded-sm bg-[#F6F6F6] transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gray-200 active:scale-95"
        >
          <Plus className="w-6 h-6 text-black" />
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src={ "/images/blogcard.png"}
          alt={title}
          width={500}
          height={500}
          className="w-full h-50 object-cover"
        />
      </div>

      <p className="mt-6 text-black text-[16px] leading-tight">
        {description}
      </p>
    </div>
  )
}

export default BlogCard