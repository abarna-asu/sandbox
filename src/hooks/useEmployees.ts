import { useCallback, useState } from "react"
import { Employee } from "../utils/types"
import { useCustomFetch } from "./useCustomFetch"
import { EmployeeResult } from "./types"

export function useEmployees(): EmployeeResult {
  const { fetchWithCache, loading: fetchLoading } = useCustomFetch(); // Rename the variable to avoid naming conflict
  const [employees, setEmployees] = useState<Employee[] | null>(null);
  const [loading, setLoading] = useState(false); // Add the loading state here

  const fetchAll = useCallback(async () => {
    setLoading(true); // Set loading to true when fetching
    const response = await fetchWithCache<Employee[]>("employees");
    
    setEmployees(response);
    setLoading(false); // Set loading back to false after fetching
  }, [fetchWithCache]);

  const invalidateData = useCallback(() => {
    setEmployees(null);
  }, []);

  return { data: employees, loading, fetchAll, invalidateData };
}
