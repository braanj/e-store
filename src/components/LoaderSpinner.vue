<template>
  <div class="loader-spinner">
    <div class="loader"></div>
  </div>
</template>

<style>
.loader-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.loader {
  border: 4px solid var(--item-color);
  border-left-color: var(--element-bg-color);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  opacity: .5;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
