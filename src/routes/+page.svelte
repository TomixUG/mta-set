<script lang="ts">
  var opened: boolean = false;
</script>

<div class="bg-gray-50 font-[sans-serif] text-[#333] min-h-screen">
  <header class="flex flex-row justify-between items-center px-6 py-4">
    <div class="flex flex-row gap-4">
      <img src="/logo-1.svg" alt="logo" class="w-40" />
    </div>
    <nav class="flex flex-row">
      <a href="" class="px-3 py-2 hover:text-blue-500">Administrace</a>
      <a href="" class="px-3 py-2 hover:text-blue-500">Učitelé</a>
      <a href="/logout" class="px-3 py-2 hover:text-blue-500">Odhlásit se</a>
    </nav>
  </header>

  <main class="container mx-auto px-4 py-16 flex flex-col items-center">
    <h2 class="text-4xl font-bold mb-4">Vítejte!</h2>
    <p class="text-xl text-gray-700 mb-8">
      Nyní jste přihlášeni do admin panelu MTA.
    </p>
    <button
      on:click={() => {
        opened = true;
      }}
      class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded"
      >Zjisti tajný kód</button
    >
    {#if opened}
      <div
        class="relative leading-normal text-green-700 bg-gray-200 rounded-lg mt-5 pt-2 pb-2 pl-4 pr-4"
        role="alert"
      >
        <div class="flex flex-col items-center justify-center">
          <p class="text-xl font-bold">Tajný kód:</p>
          <p class="text-xl font-bold text-blue-500">mta-je-cool</p>
        </div>
      </div>
    {/if}
  </main>

  <footer
    class="text-center py-4 flex justify-center items-center fixed bottom-0 w-full"
  >
    &copy; {new Date().getFullYear()} Naše společnost
  </footer>
</div>
