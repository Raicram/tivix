import { getFigParts, getMinifigs } from '@/services/rebrickableService';
import '@testing-library/jest-dom';

describe('RebickableService', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ }),
        }),
        ) as jest.Mock;
    })

    it('should call api get All minifigs', async () => {
        const fetchMock = jest.spyOn(global, 'fetch');
        await getMinifigs();
        expect(fetchMock).toHaveBeenCalled();
    })

    it('should call api get All getFigParts', async () => {
        const fetchMock = jest.spyOn(global, 'fetch');
        await getFigParts('id');
        expect(fetchMock).toHaveBeenCalled();
    })
})