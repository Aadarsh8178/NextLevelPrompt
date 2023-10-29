<script lang="ts">
  import type { Chat } from "../../store/chat";
  import ResponseChart from "./ResponseChart.svelte";
  import ResponseText from "./ResponseText.svelte";

  export let response: Chat;
  export let loading = false;
</script>

<div class="card response-wrapper">
  <svg
    width="38"
    height="38"
    class="bot-icon"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_dd_6021_141178)">
      <path
        d="M3 15.1058C3 8.92767 3 5.8386 4.9193 3.9193C6.8386 2 9.92767 2 16.1058 2H21.8942C28.0723 2 31.1614 2 33.0807 3.9193C35 5.8386 35 8.92767 35 15.1058V20.8942C35 27.0723 35 30.1614 33.0807 32.0807C31.1614 34 28.0723 34 21.8942 34H16.1058C9.92767 34 6.8386 34 4.9193 32.0807C3 30.1614 3 27.0723 3 20.8942V15.1058Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.8942 2.10922H16.1058C13.0136 2.10922 10.7055 2.10945 8.93004 2.34815C7.15771 2.58644 5.9325 3.06055 4.99653 3.99653C4.06055 4.9325 3.58644 6.15771 3.34815 7.93004C3.10945 9.70552 3.10922 12.0136 3.10922 15.1058V20.8942C3.10922 23.9863 3.10945 26.2945 3.34815 28.07C3.58644 29.8423 4.06055 31.0675 4.99653 32.0035C5.9325 32.9394 7.15771 33.4136 8.93004 33.6518C10.7055 33.8906 13.0136 33.8908 16.1058 33.8908H21.8942C24.9863 33.8908 27.2945 33.8906 29.07 33.6518C30.8423 33.4136 32.0675 32.9394 33.0035 32.0035C33.9394 31.0675 34.4136 29.8423 34.6518 28.07C34.8906 26.2945 34.8908 23.9864 34.8908 20.8942V15.1058C34.8908 12.0136 34.8906 9.70552 34.6518 7.93004C34.4136 6.15771 33.9394 4.9325 33.0035 3.99653C32.0675 3.06055 30.8423 2.58644 29.07 2.34815C27.2945 2.10945 24.9864 2.10922 21.8942 2.10922ZM4.9193 3.9193C3 5.8386 3 8.92767 3 15.1058V20.8942C3 27.0723 3 30.1614 4.9193 32.0807C6.8386 34 9.92767 34 16.1058 34H21.8942C28.0723 34 31.1614 34 33.0807 32.0807C35 30.1614 35 27.0723 35 20.8942V15.1058C35 8.92767 35 5.8386 33.0807 3.9193C31.1614 2 28.0723 2 21.8942 2H16.1058C9.92767 2 6.8386 2 4.9193 3.9193Z"
        fill="black"
        fill-opacity="0.06"
      />
      <path
        d="M12.5612 22.1796L13.7306 11.3307H11.063L9.89351 24.6694H15.747L16.0293 22.1796H12.5612Z"
        fill="#FF7D04"
      />
      <path
        d="M25.4618 11.3306L23.9806 24.6688H26.6252L28.1064 11.3306H25.4618Z"
        fill="#FF7D04"
      />
      <path
        d="M21.336 24.6693H23.9807L22.4999 11.3306H19.8548L20.7832 19.6896H18.9253L19.8532 11.3306H17.2086L15.7273 24.6693H18.372L18.6486 22.1795H21.0598L21.336 24.6693Z"
        fill="#FF7D04"
      />
    </g>
    <defs>
      <filter
        id="filter0_dd_6021_141178"
        x="0"
        y="0"
        width="38"
        height="38"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_6021_141178"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_6021_141178"
          result="effect2_dropShadow_6021_141178"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_6021_141178"
          result="shape"
        />
      </filter>
    </defs>
  </svg>

  {#if loading}
    <p>Generating response...</p>
  {:else if response?.type?.toLowerCase() === "bar" || response?.type?.toLowerCase() === "line"}
    <ResponseChart {response} />
  {:else}
    <ResponseText {response} />
  {/if}
</div>

<style>
  .response-wrapper {
    display: flex;
    padding: 24px;
    margin: 24px 0;
  }
  .bot-icon {
    max-width: 30px;
    min-width: 30px;
    margin-right: 24px;
  }
</style>
