<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-0 container">
      <h2 class="text-center font-bold tracking-wide uppercase mb-4">Introducing</h2>
      <img class="max-w-full mb-8" src="/images/laravue3-logo.png" alt="Laravue logo" />
      <h1 class="text-2xl text-gray-700 text-center mb-12">
        {{appName}}
        </h1>
      <div class="flex justify-center mb-16">
        <div class="flex flex-col">
          <p>
            {{appName}} Data
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center">
        <div class="flex justify-center space-x-10 -mt-10">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data: () => {
    return {
      appName: appData.appName
    }
  }
};
</script>

<style scoped></style>