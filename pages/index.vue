<script setup lang="ts">
const { t } = useI18n();

</script>

<template>
  <div class="grid grid-cols-1 justify-items-center">
    <h1 class="text-4xl font-bold">{{ t('welcome_message') }}</h1>
    <h3 class="text-lg font-semibold my-8">{{ t('most_recent_project') }}</h3>
    <div class="w-1/3">
      <ProjectCard image="/Galaga.png" title="galaga_title" description="galaga_description"/>
    </div>
    
  </div> 
</template>