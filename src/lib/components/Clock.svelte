<script lang="ts">
    import { onMount } from 'svelte';
    
    let time = new Date();
    
    onMount(() => {
      const interval = setInterval(() => {
        time = new Date();
      }, 1000);
      
      return () => {
        clearInterval(interval);
      };
    });
    
    $: hours = time.getHours().toString().padStart(2, '0');
    $: minutes = time.getMinutes().toString().padStart(2, '0');
    $: seconds = time.getSeconds().toString().padStart(2, '0');
  </script>
  
  <div class="clock bg-bg dark:bg-darkBg p-8 rounded-base shadow-light dark:shadow-dark">
    <div class="text-7xl font-mono font-bold text-text dark:text-darkText">
      {hours}:{minutes}:{seconds}
    </div>
  </div>