import './global.css'

export const metadata = {
  title: 'IITMBiteView',
  description: 'IIT Mess Menu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
