<script>
  	import { onMount } from 'svelte';
	import TuiEditor from '../components/TuiEditor.svelte';

    const fileLocation = "D:/starpelly.com/content/blog/2024/07/motionmelody-plus-lua/index.md";

    let fileTitle;
    let fileDate;
    let fileContent;
    let fileSlug = "/blog/" + fileLocation;

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

<div class="d-flex flex-column flex-grow-1 gap-3">

    <!--Top-->
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <span class="navbar-brand">Editing Post</span>

                <div>
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </div>
        </nav>

        <div class="mt-2 mb-2">
            Permalink:
            <a href="{fileSlug}">{fileSlug}</a>
        </div>
    </div>

    <!--Bottom-->
    <div class="d-flex flex-grow-1 gap-3">

        <!--Left side editors-->
        <div class="d-flex flex-grow-1 card border-secondary">
            <div class="card-header">Editor</div>
            <div class="card-body d-flex flex-column gap-3">
                <form>
                    <fieldset>
                        <div>
                            <label for="postTitle" class="col-sm-2 col-form-label">Title</label>
                            <input id="postTitle" type="text" class="form-control" bind:value={fileTitle}>
                        </div>
                        
                    </fieldset>
                </form>
                
                <TuiEditor id="postContent" initialValue="{fileContent}"/>
            </div>
        </div>

        <!--Right side-->
        <div class="d-flex flex-column card border-secondary">
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

    </div>
</div>

