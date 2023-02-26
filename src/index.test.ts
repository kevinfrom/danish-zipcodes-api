import { describe, it, expect } from 'vitest'
import { createZipCodesApi } from './index'

describe('createZipCodeApi', () => {
  it('Should return Ringkøbing from getByName', async () => {
    const api = createZipCodesApi()
    const { data } = await api.getByName('Ringkøbing')
    console.log(data)

    expect(1).toBe(2)
  })

  it.skip('Should return an empty response')
})
