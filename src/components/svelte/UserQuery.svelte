<script lang="ts">
  import type { Chat } from "../../store/chat";

  export let query: Chat;
</script>

<div class="query-wrapper">
  <p class="query-text">
    {query.text}
  </p>
  <div class="user-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      ><path
        fill="#5EEAD4"
        d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"
      /></svg
    >
  </div>
</div>

<style>
  .query-wrapper {
    display: flex;
    align-items: baseline;
    justify-content: flex-end;
    width: 100%;
    padding-right: 16px;
    margin: 32px 0;
  }
  .query-text {
    margin: 0 16px;
    max-width: 600px;
    font-size: 16px;
    color: var(--secondary-text-color);
  }
  .user-icon {
    min-width: 40px;
    min-height: 40px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    background-color: var(--badge-bg);
    transform: translateY(6px);
  }
</style>
