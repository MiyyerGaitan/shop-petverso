import { Facebook, Smartphone } from 'react-feather'; // Import icons

const Footer = () => {
  return (
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center">
            <a href="https://www.facebook.com/profile.php?id=61569015359891" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://wa.me/+573219853358" target="_blank" rel="noopener noreferrer">
              <Smartphone />
            </a>
          </div>
          <p>Contáctenos: <a href="mailto:versopet026@gmail.com">versopet026@gmail.com</a></p>
          <p>&copy; {new Date().getFullYear()} PetVerso. Todos los derechos reservados.</p>
        </div>
      </footer>
  );
}

export default Footer;