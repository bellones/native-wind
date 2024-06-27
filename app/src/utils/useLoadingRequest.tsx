
import { useCallback, useState } from 'react';

interface useLoadingRequestProps {
  apiFunc: () => Promise<void>;
  errorFunc?: (err: unknown) => void;
}

interface useLoadingReturnProps {
  isLoading: boolean;
  hasError?: boolean;
  apiRequest: () => void;
}

export const useLoadingRequest = ({
  apiFunc,
  errorFunc,
}: useLoadingRequestProps): useLoadingReturnProps => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const apiRequest = useCallback(async () => {
    try {
      setIsLoading(true);

      await apiFunc();

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setHasError(true);

      if (errorFunc) {
        errorFunc(err);
      }
    }
  }, [apiFunc, errorFunc]);

  return {
    isLoading,
    hasError,
    apiRequest,
  };
};
