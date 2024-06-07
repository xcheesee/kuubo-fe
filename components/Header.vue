<script setup>
import DrawerBtn from "@/components/DrawerBtn.vue";
import TagBtn from "@/components/TagBtn.vue";

onMounted(() => {
  const menuBtn = document.getElementById("menu-btn");
  const menuDrawer = document.getElementById("menu-drawer");
  const closeBtn = document.getElementById("close-drawer");
  menuBtn?.addEventListener("click", () => {
    menuDrawer?.classList.remove("translate-x-full");
    menuDrawer?.classList.add("translate-x-0");
    document.body.classList.add("w-screen", "overflow-hidden");
  });
  closeBtn?.addEventListener("click", () => {
    document.body.classList.remove("w-screen", "overflow-hidden");
    menuDrawer?.classList.remove("translate-x-0");
    menuDrawer?.classList.add("translate-x-full");
  });
});
</script>

<template>
  <header
    class="grid w-screen grid-cols-[min-content_1fr_min-content] content-center bg-white"
  >
    <div class="m-2 h-8 w-8 overflow-hidden rounded-xl">
      <img src="/logo.jpg" class="object-fit h-full w-full" />
    </div>

    <div class="m-2 inline justify-self-center">
      <form
        class="relative box-border flex h-8 w-52 rounded-xl border border-black py-1 shadow-xl focus-within:border-[2px] focus-within:border-blue-300"
      >
        <input
          type="text"
          placeholder="Pesquisar"
          class="bg-transparent px-2 active:rounded-xl"
        />
        <button
          class="absolute inset-y-0 right-0 my-1 mr-1 flex items-center rounded-full bg-white"
          type="button"
        >
          <CIcon name="lucide:search" color="black" />
        </button>
      </form>
    </div>
    <button class="m-2" id="menu-btn">
      <CIcon name="lucide:menu" class="h-8 w-8" />
    </button>
    <div class="scrollbar col-span-3 flex gap-4 overflow-x-auto px-2 pb-2 pt-4">
      <TagBtn title="Art"><CIcon name="lucide:brush" size="24" /></TagBtn>
      <TagBtn title="Travel"><CIcon name="lucide:luggage" size="24" /></TagBtn>
      <TagBtn title="Games"><CIcon name="lucide:joystick" size="24" /></TagBtn>
      <TagBtn title="Programming"
        ><CIcon name="lucide:code-2" size="24"
      /></TagBtn>
      <TagBtn title="Programming"
        ><CIcon name="lucide:code-2" size="24"
      /></TagBtn>
      <TagBtn title="Programming"
        ><CIcon name="lucide:code-2" size="24"
      /></TagBtn>
    </div>
  </header>
  <div
    class="fixed top-0 z-50 h-screen w-screen translate-x-full bg-white transition-all"
    id="menu-drawer"
  >
    <button id="close-drawer" class="absolute right-0 hover:cursor-pointer">
      <CIcon name="lucide:plus" class="h-8 w-8 rotate-45" />
    </button>
    <div class="flex flex-col gap-8 px-4 py-8 text-xl">
      <DrawerBtn title="Amigos">
        <CIcon name="lucide:users" />
      </DrawerBtn>
      <DrawerBtn title="Feed">
        <CIcon name="lucide:newspaper" />
      </DrawerBtn>
      <DrawerBtn title="Chat">
        <CIcon name="lucide:message-square" />
      </DrawerBtn>
      <DrawerBtn title="Perfil">
        <CIcon name="lucide:user" />
      </DrawerBtn>
      <DrawerBtn title="Configuracoes">
        <CIcon name="lucide:cog" />
      </DrawerBtn>
    </div>
  </div>
</template>

<style scoped>
input {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  border: 0;
}

.scrollbar {
  scrollbar-color: transparent transparent;
  scrollbar-width: 1px;
}

.scrollbar::-webkit-scrollbar {
  background: transparent;
  height: 0px;
  width: 0px;
}

::-webkit-scrollbar-thumb {
  background: #999;
}

::-webkit-scrollbar-track {
  background: transparent;
}
</style>
