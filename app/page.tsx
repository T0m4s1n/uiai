import React from 'react';
import { ChevronDown, CreditCard, ShoppingCart, Monitor, Laptop } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-yellow-300 flex items-center justify-between px-4 py-3 md:px-8">
      <div className="flex items-center">
        <img 
          src="/api/placeholder/150/40" 
          alt="Mercado Pago" 
          className="h-8"
        />
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <div className="relative group">
          <button className="flex items-center text-sm font-medium">
            Para ti
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
        <div className="relative group">
          <button className="flex items-center text-sm font-medium">
            Para tu negocio
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-sm font-medium">Iniciar sesión</button>
        <button className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm font-medium">
          Abrir cuenta gratis
        </button>
        <button className="text-sm font-medium">Ayuda</button>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="bg-yellow-300 pt-8 pb-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="inline-block bg-white rounded-full px-4 py-1 text-sm font-medium mb-4">
            CHECKOUT
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Cobra con Mercado Pago en tu sitio web
          </h1>
          <p className="text-lg mb-6">
            Más medios de pago para tus clientes. Más pagos aprobados para ti.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="bg-blue-400 rounded-full w-64 h-64 md:w-96 md:h-96 absolute top-0 right-0"></div>
            <img 
              src="/api/placeholder/400/400" 
              alt="Man using laptop and phone" 
              className="relative z-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Features Section Component
const FeaturesSection = () => {
  return (
    <div className="bg-white px-4 md:px-8 -mt-16 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-2 rounded-md mr-2">
              <CreditCard size={20} />
            </div>
            <span className="text-sm">Puedes tener tu dinero al instante</span>
          </div>
          <div className="flex items-center">
            <div className="bg-yellow-100 p-2 rounded-md mr-2">
              <CreditCard size={20} />
            </div>
            <span className="text-sm">Acepta tarjetas y cuotas sin interés</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<ShoppingCart size={32} />}
            title="Checkout con más medios de pago"
          />
          <FeatureCard 
            icon={<Laptop size={32} />}
            title="Checkout con tu marca e identidad"
          />
          <FeatureCard 
            icon={<Monitor size={32} />}
            title="Checkout para vender en un e-commerce"
          />
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <div className="bg-white border border-gray-200 rounded-md p-4 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className="mt-auto pt-4">
        <button className="text-blue-500 flex items-center justify-center w-full">
          <ChevronDown size={20} />
        </button>
      </div>
    </div>
  );
};

// Wave Divider Component
const WaveDivider = () => {
  return (
    <div className="bg-yellow-300">
      <svg viewBox="0 0 1440 100" className="fill-white w-full">
        <path d="M0,0 C240,95 480,95 720,48 C960,0.5 1200,0.5 1440,48 L1440,100 L0,100 Z" />
      </svg>
    </div>
  );
};

// Main Page Component
export default function MercadoPagoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <WaveDivider />
      <FeaturesSection />
    </div>
  );
}