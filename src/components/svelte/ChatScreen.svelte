<script lang="ts">
  import { afterUpdate } from "svelte";
  import { fly } from "svelte/transition";
  import { chatStore, type Chat } from "../../store/chat";
  import Response from "./Response.svelte";
  import UserQuery from "./UserQuery.svelte";
  let chats: Chat[] = [];
  let chatWindowElement: HTMLDivElement;
  const scrollToBottom = async (node: HTMLElement) => {
    node.scroll({ top: node.scrollHeight, behavior: "smooth" });
  };

  chatStore.subscribe((_chats) => (chats = [..._chats]));
  afterUpdate(() => {
    scrollToBottom(chatWindowElement);
  });
</script>

<div class="chat-wrapper">
  <div class="flex-grow" />
  <div class="bottom-content" bind:this={chatWindowElement}>
    {#each chats as chat}
      <div transition:fly={{ y: 40, duration: 400 }}>
        {#if chat.isResponse}
          <Response response={chat} />
        {:else}
          <UserQuery query={chat} />
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .chat-wrapper {
    flex-grow: 1;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .bottom-content {
    width: 100%;
    overflow-y: auto;
    max-height: calc(100svh - 225px);
    padding-right: 10px;
    position: relative;
  }
</style>
