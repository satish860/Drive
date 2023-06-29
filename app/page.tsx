import Image from 'next/image'
import Header from '@/components/ui/header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Terminal, Waves } from "lucide-react"
import { Hero } from '@/components/ui/Hero';


export default function Home() {
  const menuItems = ['Overview', 'Features', 'Docs', 'Pricing', 'Blog', 'Contact'];
  return (
    <div className='relative flex min-h-screen flex-col'>
      <Header />
      <Hero />

      
    </div>
  )
}
