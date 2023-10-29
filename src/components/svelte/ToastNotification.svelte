<script>
  import { fly } from "svelte/transition";
  import { initPusher } from "../../pusher";

  let message = "";
  let visible = false;
  let timeout;

  const { channel } = initPusher();
  channel.bind("notification", (data) => {
    timeout && clearTimeout(timeout);
    message = data?.message || "";
    visible = true;
    timeout = setTimeout(() => {
      visible = false;
    }, 3000);
  });
</script>

{#if visible}
  <div class="notification" transition:fly={{ x: 100, duration: 500 }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      class="mr-3"
      ><path
        fill="#5eead4"
        d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"
      /></svg
    >
    <p class="mr-2">{message}</p>
  </div>
{/if}

<style>
  .notification {
    position: fixed;
    top: 0;
    right: 0;
    padding: 24px;
    margin: 32px;
    border-radius: 8px;
    display: flex;
    background-color: var(--badge-bg);
    align-items: center;
  }

  .notification p {
    color: var(--badge-text);
  }
</style>
