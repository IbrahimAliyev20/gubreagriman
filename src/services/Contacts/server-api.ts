import { serverGet } from "@/lib/api/server";
import {  ContactsResponse } from "@/types/types";

export const getContacts = async (locale?: string) => {
    const response = await serverGet<{ data: ContactsResponse[] }>("/contacts", locale);
    return response.data[0]!;
};

