'use client'

import {useState} from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Home() {
  const [count, setCount] = useState(0);

  const router = useRouter()


  function handleClick() {
    setCount(count + 1);
    if(count > 5) {
      router.push('/home/section-one', { scroll: false })
    }
  }

  return (
      <>
        <button onClick={handleClick}>
          Clic {count} veces
        </button>
        <div>
          <Link href="/home/section-one">Cambiar</Link>
        </div>
      </>
)
}