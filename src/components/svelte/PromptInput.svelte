<script lang="ts">
  import { onDestroy } from "svelte";
  import { promptInput } from "../../store/promptInput";
  import { sendRequestAndAddChat, responseLoading } from "../../store/chat";

  let value = "";
  let disableInput = false;
  responseLoading.subscribe((loading) => (disableInput = loading));
  const unsubscribe = promptInput.subscribe((text) => {
    value = text as string;
  });
  function sendText() {
    if (!value) return;
    sendRequestAndAddChat({
      text: value,
      isResponse: false,
    });
    value = "";
  }

  onDestroy(unsubscribe);
</script>

<div class="card py-2 px-3 mr-2">
  <form
    on:submit|preventDefault={sendText}
    class="flex align-items-center justify-content-between"
  >
    <input
      class="flex-grow"
      type="text"
      placeholder={disableInput ? "Loading..." : "How can i help you?"}
      required
      disabled={disableInput}
      bind:value
    />
    <button class="icon-wrapper">
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector"
          d="M17.4996 10.9653C18.7411 10.3831 18.7411 8.61593 17.499 8.03454L2.32496 0.921317C1.07897 0.337641 -0.280005 1.47534 0.0740003 2.80451L1.57166 8.42106L7.92456 8.42089C8.20746 8.4258 8.47711 8.54162 8.67542 8.74342C8.87374 8.94521 8.98486 9.21683 8.98485 9.49977C8.98485 9.78271 8.87371 10.0543 8.67538 10.2561C8.47705 10.4579 8.2074 10.5738 7.9245 10.5787L1.5716 10.5789L0.0743978 16.1963C-0.280443 17.5247 1.07923 18.6616 2.32449 18.0786L17.4996 10.9653Z"
          fill="#5EEAD4"
        />
      </svg>
    </button>
  </form>
</div>

<style>
  input {
    background: transparent;
    -webkit-appearance: none;
    outline: none;
    border: none;
    color: white;
    font-size: 16px;
    margin-right: 10px;
    text-wrap: wrap;
  }
  input::placeholder {
    color: var(--secondary-text-color);
    font-size: 16px;
  }
  .icon-wrapper {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: var(--badge-bg);
    display: grid;
    place-content: center;
    border: none;
    cursor: pointer;
  }
</style>
