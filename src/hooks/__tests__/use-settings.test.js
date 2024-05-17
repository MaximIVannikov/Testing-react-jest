import { useSettings } from '../use-settings';
import { renderHookWithProviders } from '../../utils/renderWithProviders';

describe('useSettings', () => {
  it('should return showSpecialFeature as true when theme is dark', () => {
    const { result } = renderHookWithProviders(useSettings, {
      theme: 'dark',
    });

    expect(result.current.showSpecialFeature).toBe(true);
  });

  it('should return showSpecialFeature as false when theme is light', () => {
    const { result } = renderHookWithProviders(useSettings);

    expect(result.current.showSpecialFeature).toBe(false);
  });
});
