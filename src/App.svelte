<script>
	import MainContent from './views/MainContent.svelte';
    import Sidebar from './components/Sidebar.svelte';

    import { Alert } from 'flowbite-svelte';

</script>

<div class="h-screen flex">
    <div>
        <Sidebar/>
    </div>
    <div class="p-3 h-100 flex grow flex-column">
        <MainContent />
    </div>
</div>
