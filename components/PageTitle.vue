<template>
  <div class="flex items-center justify-center text-center">
    <div class="w-1/3">
      <h1 class="text-6xl font-bold">{{ t(title) }}</h1>
      <h3 v-if="description" class="text-lg font-semibold my-8">{{ t(description) }}</h3>    
    </div>
  </div>


</template>

<script setup lang="ts">
  const { t } = useI18n();

  const props = defineProps<{
    title: string,
    description?: string
  }>()

  const { title, description } = toRefs(props);
</script>