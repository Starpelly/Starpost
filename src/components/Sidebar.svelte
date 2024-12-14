<script>
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';

    const routes = [
      {
        label: 'Posts',
        href: '/posts'
      },
      {
        label: 'Tags',
        href: '/tags'
      }
    ];

    let app = {
        name: 'Flowbite-Svelte',
        href: '/',
        img: 'https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg'
    };

    const myaction = (label) => {
      console.log('Hello ', label);
    };
</script>
  
<nav class="h-full">
  <Sidebar class="h-full">
    <SidebarWrapper class="h-full">
      <SidebarGroup>

        {#each routes as {label, href}}
        <SidebarItem {label} {href} action={myaction(label)}/>
        {/each}
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</nav>