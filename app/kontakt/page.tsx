import { getOfficeBySlug } from "@/lib/cpt-service";

export default async function Page() {
    const office = await getOfficeBySlug('polnocna')

    return (
        <div>
            <h1>evercast</h1>
            <div>{office.meta.address}</div>
            <div>{office.meta.phone}</div>
            <div>{office.meta.email}</div>
            <div>{office.meta.hours}</div>
            <div>{office.meta.company_name}</div>
            <div>{office.meta.registered_address}</div>
            <div>{office.meta.krs}</div>
            <div>{office.meta.nip}</div>
            <div>{office.meta.regon}</div>
        </div>
    );
}