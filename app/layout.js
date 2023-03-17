import './globals.css'

export const metadata = {
  title: 'Todo app',
  description: 'Todo list app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
<h1 > Todo app !!</h1>
	  {children}</body>
    </html>
  )
}
