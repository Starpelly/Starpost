<script>
  	import { onMount } from 'svelte';

	import TuiEditor from '../components/TuiEditor.svelte';
    import { Label, Input, Button, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

    const fileLocation = "D:/starpelly.com/content/blog/2024/07/motionmelody-plus-lua/index.md";

    let fileTitle;
    let fileDate;
    let fileContent;
    let fileSlug = "/blog/2024/07/motionmelody-plus-lua";

    const loadMarkdownFile = (filePath) => {
        const markdownContent = window.electron.readFile(filePath);
        const fileParsed = window.electron.parsedFile(markdownContent);
        
        fileContent = fileParsed.content;
        fileTitle = fileParsed.data.title;
    }

    onMount(() => {
        loadMarkdownFile(fileLocation);
    });
</script>

<div class="flex flex-col grow gap-0">

    <!--Top-->
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">

                <Breadcrumb aria-label="Solid background breadcrumb example" solid>
                    <BreadcrumbItem href="/" home>Posts</BreadcrumbItem>
                    <BreadcrumbItem href="/">{fileTitle}</BreadcrumbItem>

                    <Button color="alternative">Preview</Button>
                    <Button>Save</Button>
                </Breadcrumb>

            </div>
        </nav>

        <div class="mt-2 mb-2">
            Permalink:
            <a href="{fileSlug}">{fileSlug}</a>
        </div>
    </div>

    <!--Bottom-->
    <div class="flex grow gap-3">

        <!--Left side editors-->
        <div class="flex grow">
            <div class="card-body flex flex-col grow gap-3">
                <form>
                    <fieldset>
                        <div>
                            <Label for="post-title" class="block mb-2">Title</Label>
                            <Input id="post-title" placeholder="Large input" bind:value={fileTitle} />
                        </div>
                        
                    </fieldset>
                </form>
                
                <TuiEditor id="postContent" initialValue="{fileContent}"/>
            </div>
        </div>

        <!--Right side-->
        <div class="flex flex-col gap-2">

            <div class="card border-secondary">
                <div class="card-header">Metadata</div>
                <div class="card-body">
    
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                        Draft
                        </label>
                    </div>
                </div>
            </div>

            <div class="card border-secondary">
                <div class="card-header">Tags</div>
                <div class="card-body">

                    Select yo tags!!!!!!!!!!!!!!!!!!!!!

                </div>
            </div>

        </div>

    </div>
</div>

