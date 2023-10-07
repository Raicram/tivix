import { handleFigName } from '@/helpers/helpers';
import '@testing-library/jest-dom';


describe('Helpers', () => {
    it('should provide figure name before second comma', () => {
        const text = 'Name,second,text';
        expect(handleFigName(text)).toEqual("Name, second");
    })

    it('should provide figure name without comma', () => {
        const text = 'Name';
        expect(handleFigName(text)).toEqual("Name");
    })

})