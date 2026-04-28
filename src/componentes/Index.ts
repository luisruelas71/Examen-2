//Index.ts
export type Patient = {
    id: string;
    name: string;
    age: string;
    rfc: string;
    curp: string;
    birthdate: string;
    birthCountry: string;
}


export type DraftPatient = Omit<Patient, 'id'>;