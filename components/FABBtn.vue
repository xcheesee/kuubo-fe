<script setup>
async function triggerRipple(e) {
  const element = e.currentTarget;
  const span = document.createElement("span");
  const diameter = Math.max(element.clientWidth, element.clientHeight);
  const radius = diameter / 2;

  span.style.width = span.style.height = `${diameter}px`;
  span.style.left = `${e.clientX - (element.offsetLeft + radius)}px`;
  span.style.top = `${e.clientY - (element.offsetTop + radius)}px`;
  span.classList.add("ripple");

  const ripple = element.getElementsByClassName("ripple")[0];
  if (ripple) {
    ripple.remove();
  }

  element.appendChild(span);
}

onMounted(() => {
  const btn = document.getElementById("fab-btn");
  btn.addEventListener("click", triggerRipple);
});
</script>

<template>
  <button
    id="fab-btn"
    class="mx-4 my-2 h-16 w-16 overflow-hidden rounded-full bg-gradient-to-br from-[#c621e5] to-[#7d7cf9]"
  >
    <CIcon name="lucide:plus" class="h-full w-full px-2 py-2" color="white" />
  </button>
</template>

<style>
.ripple {
  position: absolute;
  border-radius: 50%;
  opacity: 70%;
  animation: ripple 500ms linear;
  animation-fill-mode: forwards;
  background-color: white;
}

@keyframes ripple {
  to {
    transform: scale(10);
    opacity: 0;
  }
}
</style>
