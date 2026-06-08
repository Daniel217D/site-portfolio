export interface DemoRequestState {
  status: 'idle' | 'loading' | 'success' | 'error'
  result: string
  error: string
}

