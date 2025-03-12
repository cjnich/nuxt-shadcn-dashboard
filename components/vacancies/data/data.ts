import { Icon } from '#components'
import { h } from 'vue'

export const labels = [
  {
    value: 'frontend',
    label: 'Frontend',
  },
  {
    value: 'backend',
    label: 'Backend',
  },
  {
    value: 'full-stack',
    label: 'Full Stack',
  },
]

export const statuses = [
  {
    value: 'new',
    label: 'New',
    icon: h(Icon, { name: 'i-radix-icons-question-mark-circled' }),
  },
  {
    value: 'open',
    label: 'Open',
    icon: h(Icon, { name: 'i-radix-icons-circle' }),
  },
  {
    value: 'pending',
    label: 'Pending',
    icon: h(Icon, { name: 'i-radix-icons-stopwatch' }),
  },
  {
    value: 'applied',
    label: 'Applied',
    icon: h(Icon, { name: 'i-radix-icons-check-circled' }),
  },
  {
    value: 'closed',
    label: 'Closed',
    icon: h(Icon, { name: 'i-radix-icons-plus-circled' }),
  },
]

export const priorities = [
  {
    value: 'low',
    label: 'Low',
    icon: h(Icon, { name: 'i-radix-icons-arrow-down' }),
  },
  {
    value: 'medium',
    label: 'Medium',
    icon: h(Icon, { name: 'i-radix-icons-arrow-right' }),
  },
  {
    value: 'high',
    label: 'High',
    icon: h(Icon, { name: 'i-radix-icons-arrow-up' }),
  },
]
