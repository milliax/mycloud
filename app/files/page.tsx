import { redirect, permanentRedirect } from "next/navigation"

export default function Files() {
    // permanentRedirect("/files/drive")
    redirect('/files/drive')
}
