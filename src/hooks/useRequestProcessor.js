import { useQuery, useMutation, useQueryClient } from 'react-query';

// reference: https://medium.com/@amavictor/how-to-use-react-query-axios-and-a-custom-request-processor-to-transform-your-data-2a9f0c9f5bf0
export function useRequestProcessor() {
  const queryClient = useQueryClient();

  function query(key, queryFunction, options = {}) {
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
    });
  }

  function mutate(key, mutationFunction, options = {}) {
    return useMutation({
      mutationKey: key,
      mutationFn: mutationFunction,
      onSettled: () => queryClient.invalidateQueries(key),
      ...options,
    });
  }

  return { query, mutate };
}