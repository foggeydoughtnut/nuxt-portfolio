<template>
  <Head>
    <Title>Portfolio</Title>
    <Meta name="description" content="This is Jeff Anderson's portfolio website built out in Nuxt" />
  </Head>
  <div
    class="flex flex-col min-h-screen bg-background"
  >
    <NavBar />
    <main class="grow">
      <NuxtPage />
    </main>
  </div>
</template>
