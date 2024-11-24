<script lang="ts">
    import { onMount } from 'svelte';

    let currentDate = new Date();
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    let daysInMonth: number[] = [];
    let firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    function generateCalendar() {
        let daysInCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        daysInMonth = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1);
    }

    onMount(() => {
        generateCalendar();
    });

    function isToday(day: number) {
        let today = new Date();
        return today.getDate() === day && today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear();
    }
</script>

<div class="calendar bg-bg dark:bg-darkBg p-6 rounded-base shadow-light dark:shadow-dark">
    <div class="text-3xl font-heading mb-4 text-text dark:text-darkText">
        {months[currentDate.getMonth()]} {currentDate.getFullYear()}
    </div>
    
    <div class="grid grid-cols-7 gap-2">
        {#each days as day}
            <div class="text-center font-heading text-text dark:text-darkText">{day}</div>
        {/each}
        
        {#each Array(firstDayOfMonth) as _}
            <div></div>
        {/each}
        
        {#each daysInMonth as day}
            <div class="text-center p-2 text-text dark:text-darkText hover:bg-main rounded-base transition-colors {isToday(day) ? 'bg-main text-white' : ''}">
                {day}
            </div>
        {/each}
    </div>
</div>