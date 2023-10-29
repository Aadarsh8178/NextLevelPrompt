<script>
  import { sendRequestAndAddChat, responseLoading } from "../../store/chat";
  let disabled = false;
  const prompts = [
    "create alert on conversation tag legal threat and email it to divij@thelevel.ai",
    "how many conversations inserted this week group by agent in bar format?",
    "how many conversations inserted this week group by conversation tags in line format?",
    "I want an agent to be alerted if their QA score goes below 70% and send it to the agents emailId",
  ];

  responseLoading.subscribe((value) => (disabled = value));
</script>

<div class="center flex-column">
  <h3 class="semibold m-3">Browse Trending Prompts</h3>
  {#each prompts as prompt}
    <button
      class="card mb-3 btn-prompt p-3"
      {disabled}
      class:disabled
      on:click={() => {
        sendRequestAndAddChat({ text: prompt, isResponse: false });
      }}
    >
      {prompt}
    </button>
  {/each}
</div>

<style>
  .btn-prompt {
    border: none;
    font-size: 16px;
    color: var(--secondary-text-color);
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }
  .disabled {
    cursor: not-allowed;
  }
</style>
