<template>
  <Html>
    <Body>
      <div>
        <NuxtLoadingIndicator
          color="repeating-linear-gradient(to right,#EF4135 0%,#EF4135 50%,#ffffff 100%)"
        />

        <main>
          <slot />
        </main>
      </div>
    </Body>
  </Html>
</template>
