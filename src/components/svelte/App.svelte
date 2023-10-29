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

  <h1 class="gradient-text my-2">Next Level Prompt</h1>
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
