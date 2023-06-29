import { Terminal } from 'lucide-react';
import * as React from 'react';
import Link from 'next/link';
import { Button } from './button';

export interface IAppProps {
}

export function Hero (props: IAppProps) {
  return (
    <div className='flex-1 container'>
    <section className='flex flex-col items-start gap-2 px-4 md:pt-4 pb-8'>
      <div className='mb-0'>
        <Link
          href="/changelog/team-invites"
          className="flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"
        >
          <p className="text-sm font-semibold text-gray-700">
            🎉 No Charges For Egress Bandwidth.
          </p>
          <Terminal className="h-4 w-4" />
        </Link>
      </div>
      <div className='flex flex-col'>
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">Simple and Affordable File storage for Web and Podcasts</h1>
        <span className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">Upload, store, and distribute your files worldwide for just $0.02 per GB with our user-friendly platform</span>
      </div>
    </section>
    <section className='flex max-w-[980px] items-start gap-2 px-4'>
      <Button>Get Started</Button>
      <Button variant="outline">See how it works 🎉</Button>
    </section>
  </div>
  );
}
