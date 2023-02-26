# Danish Zipcodes API

A simple Axios wrapper for quickly looking up cities and municipalities in Denmark by searching via name or ZIP code.

## Installation

```bash
npm install @kevinfrom/danish-zipcodes-api
```

**Remember axios!**

```bash
npm install axios
```

## Usage

```typescript
import { createZipCodesApi } from '@kevinfrom/danish-zipcodes-api'

const api = createZipCodesApi()


// Search by ZIP (ZIP must be exactly 4 digits long)
api.searchByZip(6950).then(data => console.log(data))

// Search by name
api.searchByName('Ringkøbing').then(data => console.log(data))
```
