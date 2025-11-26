import { useLocale } from "next-intl";
import { getContacts } from "./api";
import { queryKeys } from "@/lib/query-keys";
import { useQuery } from "@tanstack/react-query";

const useContacts = () => {
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.contacts.contacts(locale),
        queryFn: () => getContacts(locale),
        staleTime: 10 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
    });
};

export { useContacts };