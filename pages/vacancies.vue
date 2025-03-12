<script setup lang="ts">
import { columns } from '@/components/vacancies/components/columns'
import DataTable from '@/components/vacancies/components/DataTable.vue'
import vacancies from '@/components/vacancies/data/vacancies.json'
</script>

<template>
  <div class="w-full flex flex-col items-stretch gap-4">
    <div class="flex flex-wrap items-end justify-between gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Vacancies
        </h2>
        <p class="text-muted-foreground">
          Here&apos;s a list of your vacancies for this month!
        </p>
      </div>
    </div>
    <DataTable :data="vacancies.data" :columns="columns" />
  </div>
</template>

<style scoped>

</style>
