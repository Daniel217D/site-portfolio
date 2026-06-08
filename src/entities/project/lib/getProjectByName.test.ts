import { describe, expect, it } from 'vitest'

import { getProjectByName } from './getProjectByName'

describe('getProjectByName', () => {
  it('returns a project by project_name', () => {
    expect(getProjectByName('sentiment-analysis')?.title).toBe('Sentiment Analysis')
  })

  it('returns undefined for unknown project names', () => {
    expect(getProjectByName('unknown-project')).toBeUndefined()
  })
})

