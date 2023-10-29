<script>
  import { sendRequestAndAddChat, responseLoading } from "../../store/chat";
  let disabled = false;
  const prompts = [
    "how many conversations inserted this week group by agent in bar format?",
    "how many conversations inserted this week group by day in bar format?",
    "how many conversations inserted this week group by conversation tags in bar format?",
    "create alert on conversation tag legal threat and email it to divij@thelevel.ai",
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
        console.log("button lcick send request");
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
  }
  .disabled {
    cursor: not-allowed;
  }
</style>
