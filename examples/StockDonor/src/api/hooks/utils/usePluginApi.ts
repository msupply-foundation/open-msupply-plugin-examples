import { useAuthContext, useGql } from '@openmsupply-client/common';
import { getPluginQueries } from '../../api';
import { getSdk } from '../../operations.generated';

export const usePluginApi = () => {
  const keys = {
    base: () => ['plugin-stock-donor'] as const,
    data: (id: string) => [...keys.base(), storeId, id] as const,
  };

  const { client } = useGql();
  const { storeId } = useAuthContext();
  const queries = getPluginQueries(getSdk(client), storeId);

  return { ...queries, storeId, keys };
};
