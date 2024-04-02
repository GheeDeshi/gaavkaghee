"use client"

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react'

type Props = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const TableSearch = ({ value, setValue }: Props) => {
  return (
    <div className='relative'>
        <Search size={18} className='absolute left-2 top-1/2 -translate-y-1/2' />
        <Input placeholder='Search' className='pl-8 pr-4' />
    </div>
  )
}

export default TableSearch