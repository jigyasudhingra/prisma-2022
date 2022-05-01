import { useEffect, useState } from 'react';

const useAppInit = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initialize();
  }, []);
  const updateloading = () => {
    setLoading(false);
  };
  const initialize = async () => {
    setTimeout(updateloading, 1500);
  };

  return {
    loading,
  };
};
export default useAppInit;
