<template>
  <Menu as="div" class="relative inline-block text-left z-10">
    <div>
      <MenuButton class="flex flex-row font-semibold justify-center">
        <LanguageIcon class="h-6 w-5 text-2xl"/>
        <ChevronDownIcon class="h-6 w-5"/>
      </MenuButton>
    </div>

    <transition 
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems class="absolute right-0 z-10 mt-2 w-20 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-focus ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem v-for="locale in availableLocales" v-slot="{ active }" class="z-10">
            <NuxtLink :to="switchLocalePath(locale.code)" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">{{ locale.name }}</NuxtLink>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon, LanguageIcon } from '@heroicons/vue/20/solid'

const switchLocalePath = useSwitchLocalePath()
const { locales } = useI18n()


const availableLocales = computed(() => <LocaleObject[]>locales.value)
</script>