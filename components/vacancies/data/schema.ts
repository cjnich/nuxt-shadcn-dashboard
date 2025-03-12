import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const vacancySchema = z.object({
  id: z.string(),
  company: z.string(),
  title: z.string(),
  label: z.string(),
  status: z.string(),
  priority: z.string(),
})

export type Vacancies = z.infer<typeof vacancySchema>
