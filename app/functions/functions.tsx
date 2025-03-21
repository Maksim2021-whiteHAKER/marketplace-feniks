'use client'
import { useEffect, useState } from "react"

export function Copyright(){
    const [year, setYear] = useState('')
    useEffect(()=>{
      setYear(new Date().getFullYear().toString())
    }, [])
    return <p>© {year || '2025'} ФЕНИКС. Все права защищены.</p>
  }