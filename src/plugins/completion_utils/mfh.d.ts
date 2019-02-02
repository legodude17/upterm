interface Package {
  name: string,
  version: string,
  description: string
}

interface RequestBody {
  objects: {package: Package}[]
}

interface FetchResults {
  json: () => Promise<RequestBody>
}

interface mfhOpts {
  cacheManager: string
}

declare module "make-fetch-happen" {
  let defaults: (opts: mfhOpts) => ((url: string) => Promise<FetchResults>)
}
