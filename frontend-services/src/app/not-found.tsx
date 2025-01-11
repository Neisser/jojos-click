"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

function NotFoundPage() {
    const router = useRouter()

    useEffect(() => {
      router.replace("/")
    })

    return null
}

export default NotFoundPage
