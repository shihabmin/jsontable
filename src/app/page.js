import Image from 'next/image'
import JsonTable from './pages/JsonTable'

export default function Home() {
  return (
    <main className="flex pt-[64px] pl-[240px] flex-col">
      <JsonTable />
    </main>
  )
}
