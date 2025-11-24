"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Container from "../shared/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-white border-t border-gray-200 mt-5 md:mt-20">
      <Container>
        <div className="bg-[#FAFAFA] hidden md:grid md:grid-cols-12 gap-12 p-10 rounded-t-3xl">
          <div className="md:col-span-5">
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Agro Gubre"
                width={1000}
                height={1000}
                className="h-10 w-auto"
                priority
              />
            </div>
            <p className="text-sm text-gray-700 leading-relaxed max-w-md">
              Biz gübrələr, bitki mühafizəsi məhsulları və kənd təsərrüfatı
              xidmətləri təklif edən müasir kənd təsərrüfatı şirkətiyik.
              Məqsədimiz fermerlərə məhsuldarlığı artırmaqda, xərcləri
              azaltmaqda və təbii tarazlığı qorumaqda kömək etməkdir.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">{t("company")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                >
                  {t("homepage")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                >
                  {t("products")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                >
                  {t("career")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">{t("socials")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                >
                  {t("instagram")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                >
                  {t("facebook")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                >
                  {t("twitter")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                >
                  {t("linkedin")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                >
                  {t("youtube")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                >
                  {t("tiktok")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-semibold text-gray-900 mb-4">{t("contacts")}</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-600">
                <Link
                  href="mailto:info@agrogubre.com"
                  className="text-green-700 hover:text-green-800 transition-all duration-300 ease-in-out cursor-pointer font-medium"
                >
                  info@agrogubre.com
                </Link>
              </p>
              <p className="text-gray-600">
                <Link
                  href="tel:*8899"
                  className="text-[#4CA900] transition-all duration-300 ease-in-out cursor-pointer text-4xl font-bold hover:scale-105 active:scale-95"
                >
                  *8899
                </Link>
              </p>
              <div className=" pt-2 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3 text-lg leading-snug">
                  {t("findSolution")}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {t("findSolutionDesc")}
                </p>
              </div>
            </div>
          </div>
          
        </div>

        <div className="block md:hidden py-10">
          <div className="mb-6">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Agro Gubre"
                width={1000}
                height={1000}
                className="h-10 w-auto"
                priority
              />
            </div>
            <p className="text-sm text-gray-700 leading-relaxed max-w-md">
              Biz gübrələr, bitki mühafizəsi məhsulları və kənd təsərrüfatı
              xidmətləri təklif edən müasir kənd təsərrüfatı şirkətiyik.
              Məqsədimiz fermerlərə məhsuldarlığı artırmaqda, xərcləri
              azaltmaqda və təbii tarazlığı qorumaqda kömək etməkdir.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="company" className="border-b border-gray-200">
              <AccordionTrigger className="font-semibold text-gray-900 py-4">
                {t("company")}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul className="space-y-3 pl-2">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                    >
                      {t("homepage")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                    >
                      {t("about")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                    >
                      {t("products")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                    >
                      {t("services")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/career"
                      className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                    >
                      {t("career")}
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="socials" className="border-b border-gray-200">
              <AccordionTrigger className="font-semibold text-gray-900 py-4">
                {t("socials")}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul className="space-y-3 pl-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                    >
                      {t("instagram")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                    >
                      {t("facebook")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                    >
                      {t("twitter")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                    >
                      {t("linkedin")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                    >
                      {t("youtube")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                    >
                      {t("tiktok")}
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="contacts"
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="font-semibold text-gray-900 py-4">
                {t("contacts")}
              </AccordionTrigger>
              <AccordionContent className="pb-4 pl-2">
                <div className="space-y-3 text-sm">
                  <p className="text-gray-600">
                    <Link
                      href="mailto:info@agrogubre.com"
                      className="text-green-700 hover:text-green-800 transition-all duration-300 ease-in-out cursor-pointer font-medium"
                    >
                      info@agrogubre.com
                    </Link>
                  </p>
                  <p className="text-gray-600">
                    <Link
                      href="tel:*8899"
                      className="text-[#4CA900] transition-all duration-300 ease-in-out cursor-pointer text-4xl font-bold hover:scale-105 active:scale-95"
                    >
                      *8899
                    </Link>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="border-t bg-[#FAFAFA] p-10 border-gray-200 py-2 rounded-b-3xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>{t("allRightsReserved")}</p>
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-3">
              <Link href="#" className="hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer">
                {t("termsConditions")}
              </Link>
              <span className="text-gray-300 hidden md:block">|</span>
              <Link href="#" className="hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer">
                {t("privacyPolicy")}
              </Link>
              <span className="text-gray-300 hidden md:block">|</span>
              <Link href="#" className="hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer">
                {t("agreement")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
