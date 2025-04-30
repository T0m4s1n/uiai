import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function MercadoPagoClone() {
  return (
    <div className="min-h-screen bg-[#FFE600] flex flex-col">
      {/* Navigation Bar */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M35.5 20C35.5 28.5 28.5 35.5 20 35.5C11.5 35.5 4.5 28.5 4.5 20C4.5 11.5 11.5 4.5 20 4.5C28.5 4.5 35.5 11.5 35.5 20Z"
                fill="#009EE3"
                stroke="#009EE3"
              />
              <path
                d="M23.5 15C21.5 13 18.5 13 16.5 15C14.5 17 14.5 20 16.5 22C18.5 24 21.5 24 23.5 22C25.5 20 25.5 17 23.5 15Z"
                fill="#FFFFFF"
                stroke="#FFFFFF"
              />
              <path d="M45 15H55M45 20H52M45 25H50" stroke="#0C1241" strokeWidth="2" strokeLinecap="round" />
              <path d="M60 15H70M60 20H67M60 25H65" stroke="#0C1241" strokeWidth="2" strokeLinecap="round" />
              <path d="M75 15H85M75 20H82M75 25H80" stroke="#0C1241" strokeWidth="2" strokeLinecap="round" />
              <path d="M90 15H100M90 20H97M90 25H95" stroke="#0C1241" strokeWidth="2" strokeLinecap="round" />
              <path d="M105 15H115M105 20H112M105 25H110" stroke="#0C1241" strokeWidth="2" strokeLinecap="round" />
              <path d="M120 15H130M120 20H127M120 25H125" stroke="#0C1241" strokeWidth="2" strokeLinecap="round" />
              <path d="M135 15H145M135 20H142M135 25H140" stroke="#0C1241" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium">Para ti</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium">Para tu negocio</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <Link href="#" className="text-sm font-medium">
              Iniciar sesión
            </Link>
          </div>
          <Link href="#" className="bg-[#009EE3] text-white px-4 py-2 rounded-md text-sm font-medium">
            Abrir cuenta gratis
          </Link>
          <Link href="#" className="text-sm font-medium">
            Ayuda
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block border border-black rounded-full px-4 py-1 text-xs font-medium">CHECKOUT</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Cobra con Mercado Pago
              <br />
              en tu sitio web
            </h1>
            <p className="text-base">Más medios de pago para tus clientes. Más pagos aprobados para ti.</p>

            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="2" fill="white" />
                    <path d="M6 12H18" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M6 8H18" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M6 16H18" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-sm">Puedes tener tu dinero al instante</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="2" fill="white" />
                    <rect x="4" y="6" width="16" height="12" rx="1" stroke="black" strokeWidth="1.5" />
                    <path d="M8 12H16" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-sm">Acepta tarjetas y cuotas sin interés.</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
              <div className="absolute inset-0 bg-[#00B1EA] rounded-full"></div>
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=350&width=350"
                  width={350}
                  height={350}
                  alt="Person using laptop"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Wave Separator */}
      <div className="relative h-16 md:h-24 mt-auto">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,37 C240,74 480,0 720,37 C960,74 1200,0 1440,37 L1440,74 L0,74 Z" fill="white" />
        </svg>
      </div>

      {/* Features Section */}
      <div className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="mb-4">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 32H44" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <path d="M32 20V44" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="32" cy="32" r="16" stroke="black" strokeWidth="2" />
                  <path d="M32 16C23.2 16 16 23.2 16 32C16 40.8 23.2 48 32 48" stroke="black" strokeWidth="2" />
                  <path d="M48 32C48 23.2 40.8 16 32 16" stroke="black" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Checkout con más medios de pago</h3>
              <div className="mt-4 text-[#009EE3]">
                <ChevronDown className="h-5 w-5 mx-auto" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="mb-4">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="16" y="16" width="32" height="32" rx="2" stroke="black" strokeWidth="2" />
                  <path d="M24 28H40" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <path d="M24 36H36" stroke="black" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Checkout con tu marca e identidad</h3>
              <div className="mt-4 text-[#009EE3]">
                <ChevronDown className="h-5 w-5 mx-auto" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="mb-4">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="16" y="16" width="32" height="24" rx="2" stroke="black" strokeWidth="2" />
                  <rect x="22" y="32" width="20" height="8" rx="1" fill="#FFE600" stroke="black" strokeWidth="2" />
                  <path d="M22 24H42" stroke="black" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Checkout para vender en un e-commerce</h3>
              <div className="mt-4 text-[#009EE3]">
                <ChevronDown className="h-5 w-5 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
