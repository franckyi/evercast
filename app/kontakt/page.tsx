import ContactForm from "@/components/ui/contact-form";
import { fontSecondary } from "@/components/ui/fonts";
import { getOfficeBySlug } from "@/lib/cpt-service";

export default async function Page() {
    const office = await getOfficeBySlug('polnocna')

    return (
        <div className="min-h-[800px] lg:relative flex items-center">

            <div className={`boxed-content lg:absolute z-10 left-0 right-0 mx-auto sm:p-8 p-6 lg:py-0 lg:pl-0 h-full max-w-5xl lg:flex items-center gap-24 ${fontSecondary.className} `}>
                <div className="lg:w-3/5 mb-16 lg:mb-0">
                    <div className={`text-5xl ${fontSecondary.className} font-bold`}>evercast</div>
                    <div className={`mt-4 mb-16 text-5xl tracking-wide text-accent dark:text-accent ${fontSecondary.className} font-bold`}>
                        Rozwiązania dla transmisji
                    </div>
                    <ContactForm />
                </div>
                <div className="text-container lg:w-2/5 pl-2 xl:pl-16 min-h-full flex flex-col justify-center bg-white font-bold">
                    <div className="mb-8 text-accent text-4xl">evercast</div>
                    <div className="max-w-[300px] text-stone-900 text-3xl dark:text-white">{office.meta.address}</div>
                    <a href={`tel:${office.meta.phone}`} className="phone-number text-stone-900 text-3xl">{office.meta.phone}</a>
                    <div className="mt-8 text-accent text-xl">Pracujemy</div>
                    <div className="text-stone-900 text-3xl dark:text-white">{office.meta.hours}</div>
                    <div className="mt-8 text-accent text-xl">Dane rejestrowe</div>
                    <div className="text-stone-900 text-3xl dark:text-white">{office.meta.company_name}</div>
                    <div className="max-w-[300px] text-stone-900 text-3xl dark:text-white">{office.meta.registered_address}</div>
                    <div className="mt-4">
                        <div className="text-stone-900 text-2xl dark:text-white">KRS: {office.meta.krs}</div>
                        <div className="text-stone-900 text-2xl dark:text-white">NIP: {office.meta.nip}</div>
                    </div>
                </div>
            </div>

            {/* background image */}
            <div className="lg:absolute w-full h-full lg:flex gap-24">
                <div className="w-3/5 h-full bg-contact bg-cover opacity-60 bg-no-repeat"></div>
                <div className="w-2/5"></div>
            </div>
        </div>
    );
}