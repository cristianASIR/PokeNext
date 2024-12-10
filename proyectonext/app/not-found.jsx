"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Error() {
    const router = useRouter();
    const goToHome = () => {
        router.push('/');
      };

    return (
        <>
        <div>
            <h2>Something went wrong!</h2>
            <img src="/404.gif" alt="" />
            <Link href="/"><button> Botón con Link   </button></Link>
        </div>
        </>
    );
}