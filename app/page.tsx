import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1 className="text-3xl font-bold mb-4">Bienvenido a mi aplicación</h1>
        <img src="https://th.bing.com/th/id/R.13cbed9c1204328ff11e93accee627b5?rik=oypWnGLoYGy1XA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-KqIn9k3g9ck%2fUTsdEH8WotI%2fAAAAAAAAAHY%2fKBTqD5kiGWw%2fs1600%2fanimals_beautiful_extraordinary_wild_birds_mad_owl_picture-17.jpg&ehk=PaRRYt7vDNXiCq2ArmqleK%2bR5dBMXkaVo94zD5EfWg0%3d&risl=&pid=ImgRaw&r=0" />
      </header>

      <nav className="mb-8">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" passHref>
              Home
            </Link>
            
          </li>
          <li>
            <Link href="/pages/test" passHref>
                Test
            </Link>
          </li>
        </ul>
      </nav>

      <footer className="text-center">
        <p className="text-sm text-gray-500">
          &copy; 2024 Derechos Reservados | Desarrollado por Estefanía Cabal - Grupo TI02SM22
        </p>
      </footer>
    </main>
  );
}



