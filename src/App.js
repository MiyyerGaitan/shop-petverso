import React, { useState, useEffect } from 'react';
import { Facebook, Smartphone } from 'react-feather';
import Footer from './components/Footer';

// --- Iconos SVG (Heroicons) ---
const ShoppingCartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);


// --- Datos de Ejemplo ---
const initialProducts = [
  {
    id: 1,
    name: 'Arena Sanitaria para Gato Calabaza',
    description: 'Arena aglomerante ultra absorbente con control de olores aroma de lavanda de 25kg.',
    price: 60.000,
    image: require("./images/Arena-Lavanda-25kg-refact.png"),
    category: 'Aseo',
    stock: 15,
  },
  {
    id: 2,
    name: 'Arena Sanitaria para Gato Calabaza',
    description: 'Arena aglomerante ultra absorbente con control de olores aroma de café de 25kg.',
    price: 60.000,
    image: require("./images/Arena-Cafe-25kg-refact.png"),
    category: 'Aseo',
    stock: 15,
  },
    {
    id: 3,
    name: 'Arena Sanitaria para Gato Calabaza',
    description: 'Arena aglomerante ultra absorbente con control de olores aroma de vainilla de 25kg.',
    price: 60.000,
    image: require("./images/Arena-Vainilla-25kg-refact.png"),
    category: 'Aseo',
    stock: 15,
  },
    {
    id: 4,
    name: 'Arena Sanitaria para Gato Calabaza',
    description: 'Arena aglomerante ultra absorbente con control de olores aroma de manzana de 25kg.',
    price: 60.000,
    image: require("./images/Arena-Manzana-25kg-refact3.png"),
    category: 'Aseo',
    stock: 15,
  },
    {
    id: 5,
    name: 'Arena Sanitaria para Gato Calabaza',
    description: 'Arena aglomerante ultra absorbente con control de olores aroma de rosa de 25kg.',
    price: 60.000,
    image: require("./images/Arena-Rosa-25kg-refact.png"),
    category: 'Aseo',
    stock: 15,
  },
    {
    id: 6,
    name: 'Arena Sanitaria para Gato Calabaza',
    description: 'Arena aglomerante ultra absorbente con control de olores aroma de coco con carbón activado de 25kg.',
    price: 67.000,
    image: require("./images/Arena-Carbon-25kg-refact.png"),
    category: 'Aseo',
    stock: 15,
  },
  {
    id: 7,
    name: 'Alimento para gato DonKat',
    description: 'Croquetas balanceadas enriquecidas con vitaminas y minerales de 7kg.',
    price: 68.000,
    image: require('./images/DonKat-7kg-refact.png'),
    category: 'Alimentos',
    stock: 8,
  },
  {
    id: 8,
    name: 'Alimento para gato Monello Salmón',
    description: 'Croquetas balanceadas con sabor a pollo enriquecidas con vitaminas y minerales de 7kg.',
    price: 230.000,
    image: require('./images/Monello-Salmon-15kg-refact.png'),
    category: 'Alimentos',
    stock: 8,
  },
    {
    id: 9,
    name: 'Alimento para gato BR for CAT Gatitos',
    description: 'Croquetas balanceadas enriquecidas con vitaminas y minerales de 3kg.',
    price: 70.000,
    image: require('./images/Brforcat-gaticos-3-kg-refact.png'),
    category: 'Alimentos',
    stock: 8,
  },
];

// --- Componente ProductCard ---
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col w-60">
      <img 
        src={product.image} 
        alt={`Imagen de ${product.name}`} 
        className="w-full object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/E2E8F0/4A5568?text=Imagen+No+Disponible"; }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <p className="text-2xl font-bold text-indigo-600">${product.price.toFixed(3)}</p>
          <span className={`text-sm font-medium px-2 py-1 rounded-full ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {product.stock > 0 ? `${product.stock} en stock` : 'Agotado'}
          </span>
        </div>
        {/* <button
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
          className={`w-full py-2 px-4 rounded-md font-semibold text-white transition-colors duration-300 ${
            product.stock > 0 
            ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50' 
            : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {product.stock > 0 ? 'Agregar al Carrito' : 'Agotado'}
        </button> */}
      </div>
    </div>
  );
}

// --- Componente Principal App ---
export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notification, setNotification] = useState(''); // Para notificaciones

  const categories = ['All', ...new Set(initialProducts.map(p => p.category))];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || product.category === selectedCategory)
  );

  const handleAddToCart = (productToAdd) => {
    if (productToAdd.stock === 0) return; // No agregar si no hay stock

    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === productToAdd.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...productToAdd, quantity: 1 }];
    });

    // Actualizar stock (simulado, en una app real sería en backend)
    setProducts(prevProducts => 
      prevProducts.map(p => 
        p.id === productToAdd.id ? {...p, stock: p.stock -1} : p
      )
    );

    setNotification(`${productToAdd.name} agregado al carrito.`);
    setTimeout(() => setNotification(''), 3000); // Ocultar notificación después de 3 segundos
  };

  const handleRemoveFromCart = (productId) => {
    let productToRestoreStock;
    setCart(prevCart => {
      const itemToRemove = prevCart.find(item => item.id === productId);
      productToRestoreStock = initialProducts.find(p => p.id === productId); // Usar stock original para restaurar
      
      if (itemToRemove && itemToRemove.quantity > 1) {
        return prevCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart.filter(item => item.id !== productId);
    });

    // Restaurar stock (simulado)
    if (productToRestoreStock) {
        setProducts(prevProducts => 
          prevProducts.map(p => 
            p.id === productId ? {...p, stock: p.stock + 1} : p // Incrementa el stock actual del producto
          )
        );
    }
  };

  const getTotalCartItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalCartPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Efecto para cerrar el menú móvil si la pantalla se agranda
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Tailwind's md breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Barra de Navegación */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-bold text-2xl text-indigo-600">PetVerso</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    selectedCategory === category 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {category === 'All' ? 'Todos' : category}
                </button>
              ))}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="px-3 py-2 pl-10 border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <ShoppingCartIcon />
                {getTotalCartItems() > 0 && (
                  <span className="absolute top-0 right-0 block h-5 w-5 transform -translate-y-1/2 translate-x-1/2 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                    {getTotalCartItems()}
                  </span>
                )}
              </button>
              <div className="md:hidden ml-2">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-md text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <MenuIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Menú Móvil */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    selectedCategory === category 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {category === 'All' ? 'Todos' : category}
                </button>
              ))}
              <div className="relative px-1 pt-2">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <SearchIcon />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Notificación */}
      {notification && (
        <div className="fixed top-20 right-5 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg z-50 transition-opacity duration-300">
          {notification}
        </div>
      )}

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <img src="https://placehold.co/300x300/E2E8F0/4A5568?text=Sin+Resultados" alt="No hay productos" className="mx-auto mb-4 h-40 w-40 opacity-50" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No se encontraron productos</h2>
            <p className="text-gray-500">Intenta ajustar tu búsqueda o filtros.</p>
          </div>
        )}
      </main>

      {/* Modal del Carrito */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-semibold text-gray-800">Tu Carrito</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="p-8 text-center">
                <ShoppingCartIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 text-lg">Tu carrito está vacío.</p>
                <button 
                  onClick={() => setIsCartOpen(false)} 
                  className="mt-6 bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Seguir Comprando
                </button>
              </div>
            ) : (
              <>
                <div className="p-6 overflow-y-auto flex-grow">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between py-4 border-b last:border-b-0">
                      <div className="flex items-center">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" 
                             onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/E2E8F0/4A5568?text=Img"; }}/>
                        <div>
                          <h4 className="font-semibold text-gray-700">{item.name}</h4>
                          <p className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="font-semibold text-gray-800 mr-4">${(item.price * item.quantity).toFixed(2)}</p>
                        <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 hover:text-red-700">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.56 0c1.153 0 2.243.096 3.222.261m3.222.261L5.84 19.673a2.25 2.25 0 0 0 2.244 2.077h8.828a2.25 2.25 0 0 0 2.244-2.077l3.31-13.883M14.25 9h-4.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-semibold text-gray-700">Total:</p>
                    <p className="text-2xl font-bold text-indigo-600">${getTotalCartPrice().toFixed(2)}</p>
                  </div>
                  <button className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors font-semibold">
                    Proceder al Pago
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />

    </div>
  );
}
