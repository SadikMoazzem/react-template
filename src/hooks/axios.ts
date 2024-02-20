import { Options } from 'axios-hooks';

import { useExampleAxios, defaultOptions } from 'src/exampleAxios';
import { GenericAPI } from 'src/types/base-types';

const defaultParams = {
    per_page: 10,
};

// Not using this hook as we are mocking the data for now

export function useImages(params?: any, options?: Options) {
    return useExampleAxios<GenericAPI>(
        {
            url: '/example',
            method: 'GET',
            params: { ...defaultParams, ...params },
        },
        { ...defaultOptions, ...options },
    );
}
