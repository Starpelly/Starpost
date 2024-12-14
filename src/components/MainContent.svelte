<script>
  	import { onMount } from 'svelte';
	import TuiEditor from './TuiEditor.svelte';

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


<form class="mb-2">

    <fieldset>
        <legend>Editing Post</legend>

        <div class="mt-2 mb-2">
            Permalink:
            <a href="{fileSlug}">{fileSlug}</a>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Draft
            </label>
        </div>

        <div>
            <label for="postTitle" class="col-sm-2 col-form-label">Title</label>
            <input id="postTitle" type="text" class="form-control" bind:value={fileTitle}>
        </div>
        
        <div class="mt-2">
            <button type="submit" class="btn btn-primary">Save</button>
        </div>
    </fieldset>

</form>

<TuiEditor initialValue="{fileContent}"/>