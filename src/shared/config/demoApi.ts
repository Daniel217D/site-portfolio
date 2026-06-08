export function useDemoApiConfig() {
  const config = useRuntimeConfig()

  return {
    url: config.public.demoApiUrl,
    key: config.public.demoApiKey
  }
}

