import { get } from "@/lib/api";
import type { ContactsResponse } from "@/types/types";

const getContacts = async (locale?: string): Promise<ContactsResponse> => {
  const response = await get<{ data: ContactsResponse[] }>("/contacts", { locale });
  return response.data[0]!;
};

export { getContacts };