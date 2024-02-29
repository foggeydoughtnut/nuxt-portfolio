<template>
  <div class="flex justify-center items-center">
    <div class="grid grid-cols-5 w-2/3">
      <div class="col-span-3 px-4">
        <h1 class="text-6xl font-bold">{{ $t("about_title") }}</h1>
        <div class="py-4">
          <p class="text-lg leading-8 text-gray-600">{{ $t('bio') }}</p>
          <div class="w-2/3 border-t border-y-secondary-dark border-opacity-45 my-4" />
          <div>
            <h2 class="text-xl font-semibold">{{ t('notable_works') }}</h2>
            <p><NuxtLink to="https://www.softwareimpacts.com/article/S2665-9638(23)00126-4/pdf" target="_blank" class="font-semibold text-secondary-dark">Charger Reservation Web Application</NuxtLink> - Journal of Software Impacts, Elseview (2023)</p>
            <p class="text-sm">Ryan Anderson, Jeffrey Anderson, Taylor Anderson, Mario Harper</p>
          </div>
        </div>
        <div class="w-2/3 border-t border-y-secondary-dark border-opacity-45 mb-4" />
        <div class="flex flex-row gap-4">
          <!-- <button class="bg-primary hover:bg-primary-dark px-4 py-3 rounded-lg font-semibold text-sm transition-all ease-in-out">{{ t('japanese_resume') }}</button> -->
          <NuxtLink to="/Resume.pdf" target="_blank" external class="bg-primary hover:bg-primary-dark px-4 py-3 rounded-lg font-semibold text-sm transition-all ease-in-out">{{ t('american_resume') }}</NuxtLink>
          <NuxtLink to="/Japanese-Resume.pdf" target="_blank" external class="bg-primary hover:bg-primary-dark px-4 py-3 rounded-lg font-semibold text-sm transition-all ease-in-out">{{ t('japanese_resume') }}</NuxtLink>
        </div>
      </div>
      <NuxtImg src="MyPicture.webp" sizes="md:25vw" :placeholder="[400, 500, 75, 5]" class="col-span-2" width="400" height="500"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

</script>