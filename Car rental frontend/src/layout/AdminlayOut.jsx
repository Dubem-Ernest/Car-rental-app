// layouts/MainLayout.tsx
import { Outlet } from 'react-router-dom'


export default function AdminLayOut() {
  return (
    <>
      
      <main className="min-h-screen">
        <Outlet />
      </main>
     
    </>
  )
}
