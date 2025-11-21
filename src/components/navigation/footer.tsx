import Link from "next/link";
import Image from "next/image";
import Container from "../shared/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <Container>
        <div className="hidden md:grid md:grid-cols-12 gap-12 py-16">
          <div className="md:col-span-5">
            <div className="mb-6">
              <Image
                src="/images/logo.svg" 
                alt="Agro Gubre"
                width={180}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
            <p className="text-sm text-gray-700 leading-relaxed max-w-md">
              Мы — современная аграрная компания, предлагающая удобрения,
              средства защиты растений и агросервисы. Наша цель — помогать
              фермерам повышать урожайность, снижать затраты и сохранять
              природный баланс.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Homepage
                </Link>
              </li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">About us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Products</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Services</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Career</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">Socials</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Instagram</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Facebook</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Twitter</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Linkedin</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Youtube</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Tik Tok</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-semibold text-gray-900 mb-4">Contacts</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-600">
                <Link
                  href="mailto:info@agrogubre.com"
                  className="text-green-700 hover:text-green-800 transition-colors font-medium"
                >
                  info@agrogubre.com
                </Link>
              </p>
              <p className="text-gray-600">
                <Link
                  href="tel:+994122234567"
                  className="text-green-700 hover:text-green-800 transition-colors font-medium"
                >
                  +994 12 123 45 67
                </Link>
              </p>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3 text-lg leading-snug">
                  Layihəniz Üçün Ən Uyğun Həlli Tapın
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Xidmətlərimiz, qiymət təklifi və əməkdaşlıq imkanları ilə
                  maraqlanırsınız? Sadəcə formu doldurun – komandamız qısa
                  zamanda sizinlə əlaqə saxlayacaq.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden py-10">
          <div className="mb-6">
            <div className="mb-4">
              <Image
                src="/images/logo.svg"
                alt="Agro Gubre"
                width={180}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
            <p className="text-sm text-gray-700 leading-relaxed max-w-md">
              Мы — современная аграрная компания, предлагающая удобрения,
              средства защиты растений и агросервисы.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            
            <AccordionItem value="company" className="border-b border-gray-200">
              <AccordionTrigger className="font-semibold text-gray-900 py-4">
                Company
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul className="space-y-3 pl-2">
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Homepage</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">About us</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Products</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Services</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Career</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="socials" className="border-b border-gray-200">
              <AccordionTrigger className="font-semibold text-gray-900 py-4">
                Socials
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul className="space-y-3 pl-2">
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Instagram</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Facebook</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Twitter</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Linkedin</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Youtube</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Tik Tok</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contacts" className="border-b border-gray-200">
              <AccordionTrigger className="font-semibold text-gray-900 py-4">
                Contacts
              </AccordionTrigger>
              <AccordionContent className="pb-4 pl-2">
                <div className="space-y-3 text-sm">
                  <p className="text-gray-600">
                    <Link
                      href="mailto:info@agrogubre.com"
                      className="text-green-700 hover:text-green-800 transition-colors font-medium"
                    >
                      info@agrogubre.com
                    </Link>
                  </p>
                  <p className="text-gray-600">
                    <Link
                      href="tel:+994122234567"
                      className="text-green-700 hover:text-green-800 transition-colors font-medium"
                    >
                      +994 12 123 45 67
                    </Link>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>

        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2025 AGRIMAN Consulting MMC. Bütün hüquqlar qorunur.</p>
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-3">
              <Link href="#" className="hover:text-gray-900 transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-gray-300 hidden md:block">|</span>
              <Link href="#" className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-300 hidden md:block">|</span>
              <Link href="#" className="hover:text-gray-900 transition-colors">
                Agreement
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}