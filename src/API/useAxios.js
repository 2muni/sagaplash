/* eslint-disable react-hooks/exhaustive-deps */
import axiosInstance from 'axios';
import { useState, useEffect } from 'react';

export default opts => {
  if (!opts.url) return;

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    axiosInstance(opts)
      .then(({ data }) => {
        setState({ ...state, loading: false, data });
      })
      .catch(error => {
        setState({ ...state, loading: false, error });
      });
  }, []);

  return [state, setState];
};
