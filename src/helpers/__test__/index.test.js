import {
  getLocalizedPath,
  getLocalizedFromRouterAsPath
} from '../index'

describe('getLocalizedPath', () => {
  it('should convert path to desired language', () => {
    const localizeToPt = getLocalizedPath({
      pathname: '/en/about'
    }, 'pt')

    const localizeRootToPt = getLocalizedPath({
      pathname: '/'
    }, 'pt')

    expect(localizeToPt).toBe('/pt/about')
    expect(localizeRootToPt).toBe('/pt/')
  })
})

describe('getLocalizedFromRouterAsPath', () => {
  it('should convert href param based on router asPath property', () => {
    const localizeToPt = getLocalizedFromRouterAsPath({
      pathname: '/about',
      asPath: '/pt/about'
    }, '/about')

    const localizeRootToPt = getLocalizedFromRouterAsPath({
      pathname: '/',
      asPath: '/pt'
    }, '/')

    expect(localizeToPt).toBe('/pt/about')
    expect(localizeRootToPt).toBe('/pt/')
  })
})
