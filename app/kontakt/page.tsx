import { Container } from "@/components/craft";
import { fontSecondary } from "@/components/ui/fonts";
import { getOfficeBySlug } from "@/lib/cpt-service";

export default async function Page() {
    const office = await getOfficeBySlug('polnocna')

    return (
        <Container className={`max-w-5xl flex px-16 gap-4 flex-col pt-8 ${fontSecondary.className}`}>
            <h1 className="text-accent">evercast</h1>
            <div className="max-w-[300px] text-stone-900 text-3xl">{office.meta.address}</div>
            <a href={`tel:${office.meta.phone}`} className="text-stone-900 text-3xl">{office.meta.phone}</a>
            <a href={`mailto:${office.meta.email}`} className="text-stone-900 text-3xl">{office.meta.email}</a>
            <div className="text-accent text-xl">Pracujemy</div>
            <div className="text-stone-900 text-3xl">{office.meta.hours}</div>
            <div className="text-accent text-xl">Dane rejestrowe</div>
            <div className="text-stone-900 text-3xl">{office.meta.company_name}</div>
            <div className="text-stone-900 text-3xl">{office.meta.registered_address}</div>
            <div>
                <div className="text-stone-900 text-2xl">KRS: {office.meta.krs}</div>
                <div className="text-stone-900 text-2xl">NIP: {office.meta.nip}</div>
                <div className="text-stone-900 text-2xl">REGON: {office.meta.regon}</div>
            </div>
        </Container>
    );
}