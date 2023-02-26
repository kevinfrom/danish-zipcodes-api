interface ZipCodesApiRequestParams {
  nr: number
  navn: string
}

interface ZipCodesApiErrorDetails {
  [index: number]: string[]
}

interface ZipCodesApiError {
  type: string
  title: string
  details: ZipCodesApiErrorDetails[]
}

interface ZipCodesApiResultMunicipality {
  href: string
  kode: string
  navn: string
}

interface ZipCodesApiResult {
  href: string
  nr: string
  navn: string
  bbox: {
    0: number
    1: number
    2: number
    3: number
  }
  visueltcenter: {
    0: number
    1: number
  }
  kommuner: ZipCodesApiResultMunicipality[]
  ændret: string
  geo_ændret: string
  geo_version: number
  dagi_id: string
}
