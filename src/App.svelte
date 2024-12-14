<script>
	import MainContent from './views/MainContent.svelte';
    import Sidebar from './components/Sidebar.svelte';
</script>

<div class="vh-100 d-flex">
    <div class="h-100">
        <Sidebar/>
    </div>
    <div class="p-3 h-100 d-flex flex-grow-1 flex-column">
        <MainContent />
    </div>
</div>
