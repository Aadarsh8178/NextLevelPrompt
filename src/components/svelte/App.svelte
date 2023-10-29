<script lang="ts">
  import EmptyScreen from "./EmptyScreen.svelte";
  import PromptInput from "./PromptInput.svelte";
  import TrendingPrompt from "./TrendingPrompt.svelte";
  import { chatStore, type Chat } from "../../store/chat";
  import ChatScreen from "./ChatScreen.svelte";
  import { fade } from "svelte/transition";
  import { initPusher } from "../../pusher";
  import { onMount } from "svelte";
  import Notification from "./ToastNotification.svelte";
  let showChat = false;

  onMount(() => {
    initPusher();
  });

  chatStore.subscribe((_chats) => {
    showChat = Boolean(_chats.length);
  });
</script>

<div class="app-wrapper">
  <Notification />
  <div class="center logo" style="justify-content: flex-start;">
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      class="mr-2"
      ><path
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 16v-5m4 5V8m4 8v-2M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6M19 2v3m0 3V5m0 0h3m-3 0h-3"
      /></svg
    >
    <h1 class="my-2" style="color: white">
      Analytics<strong style="color: #FF7D04; margin-left: 2px">GPT</strong>
    </h1>
  </div>

  <div class="grid">
    <div class="flex flex-grow flex-column" style="position: relative;">
      {#if showChat}
        <ChatScreen />
      {:else}
        <div transition:fade={{ duration: 300 }} class="empty-container">
          <EmptyScreen />
        </div>
      {/if}
      <div class="prompt-input">
        <PromptInput />
      </div>
    </div>
    <div class="trending-prompt">
      <TrendingPrompt />
    </div>
  </div>
</div>

<style>
  .logo h1 {
    font-weight: 400;
  }
  .app-wrapper {
    padding: 24px;
    max-width: 1300px;
    min-height: 100svh;
    margin: auto;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
  }
  .empty-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  .grid {
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 40px;
  }
  .gradient-text {
    background: linear-gradient(to right, #5eead4, rgba(45, 212, 191, 0.1));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 24px;
  }
  .trending-prompt {
    width: 350px;
    display: flex;
    align-items: center;
    align-self: center;
  }

  .prompt-input {
    justify-self: flex-end;
    margin-top: auto;
    width: 100%;
  }
</style>
