import { describe, it, expect, assert } from 'vitest'
import { createZipCodesApi } from './index'

describe('createZipCodeApi', () => {
  it('Should return Ringkøbing from getByName', async () => {
    const api = createZipCodesApi()
    const { data } = await api.getByName('Ringkøbing')

    expect.assertions(4)

    expect(data[0].navn).toBe('Ringkøbing')
    expect(data[0].nr).toBe('6950')
    expect(data[0].navn).toBeTypeOf('string')
    expect(data[0].nr).toBeTypeOf('string')

    assert.hasAllDeepKeys(data, {
      0: [
        'href',
        'nr',
        'navn',
        'stormodtageradresser',
        'bbox',
        'visueltcenter',
        'kommuner',
        'ændret',
        'geo_ændret',
        'geo_version',
        'dagi_id'
      ]
    })
  })

  it('Should return an empty response from getByZip', async () => {
    const api = createZipCodesApi()
    const { data } = await api.getByZip(1000)

    expect.assertions(1)
    expect(data[0]).toBeUndefined()
  })

  it('Should return 6950 from getByZip', async () => {
    const api = createZipCodesApi()
    const { data } = await api.getByZip(6950)

    expect.assertions(4)

    expect(data[0].nr).toBeTypeOf('string')
    expect(data[0].navn).toBeTypeOf('string')
    expect(data[0].navn).toBe('Ringkøbing')
    expect(data[0].nr).toBe('6950')
  })

  it('Should throw an Error if ZIP is not exactly 4 digits', async () => {
    const api = createZipCodesApi()

    expect.assertions(3)
    expect(async () => api.getByZip(1)).rejects.toThrow()
    expect(async () => api.getByZip(12345)).rejects.toThrow()
    expect(async () => api.getByZip(6950)).rejects.not.toThrow()
  })

  it('Should return an empty response from getByName if provided name is not found', async () => {
    const api = createZipCodesApi()

    expect.assertions(2)
    expect(api.getByName('')).resolves.not.toThrow()
    expect(api.getByName('')).resolves.toBeUndefined()
  })
})
