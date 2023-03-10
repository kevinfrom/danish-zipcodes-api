import axios from 'axios'
import { ZipCodesApiResult, ZipCodesApiRequestParams } from './types'

export const createZipCodesApi = () => {
  const executeApiRequest = (params: Partial<ZipCodesApiRequestParams>) => {
    return axios.get<ZipCodesApiResult[]>('https://api.dataforsyningen.dk/postnumre', { params })
  }

  return {
    getByZip(zip: number) {
      if (zip.toString().length !== 4) {
        throw new Error('ZIP must be exactly 4 digits')
      }

      return executeApiRequest({ nr: zip })
    },
    getByName(name: string) {
      return executeApiRequest({ navn: name })
    }
  }
}
