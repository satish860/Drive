import * as React from 'react';
import { Button } from "@/components/ui/button"

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    const menuItems = ['Overview', 'Features', 'Docs', 'Pricing', 'Blog', 'Contact'];
  return (
    <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur'>
    <div className='container flex h-14 items-center justify-between'>
      <a className='mr-6 flex items-center space-x-2' href="/">
        <span className='font-bold sm:inline-block'>MyDrive</span>
      </a>
      {/* Menu Item */}
      <div className='mr-4 hidden md:flex'>
        <nav className='flex items-center space-x-6 text-sm font-medium'>
          {menuItems.map((item, index) => (
            <a key={index} className='transition-colors hover:text-foreground/80 text-foreground/60' href={"/"+item}>{item}</a>
          ))}
        </nav>
      </div>

      <div>
        <Button className='mr-4'>Sign In</Button>
      </div>
    </div>
  
  </header>
  ) ;
};

export default Header;
