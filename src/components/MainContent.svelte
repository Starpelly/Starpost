<script>
  	import { onMount } from 'svelte';
	import TuiEditor from './TuiEditor.svelte';

    let fileTitle;
    let fileDate;
    let fileContent;

    const loadMarkdownFile = (filePath) => {
        const markdownContent = window.electron.readFile(filePath);
        const fileParsed = window.electron.parsedFile(markdownContent);
        
        fileContent = fileParsed.content;
        fileTitle = fileParsed.data.title;
        
        console.log(fileParsed.content);
    }

    onMount(() => {
        loadMarkdownFile("D:/starpelly.com/content/blog/2024/10/simulation-theory-is-bullshit/index.md");
    });
</script>

<label for="inputPassword5" class="form-label">Title</label>
<input class="form-control" aria-describedby="passwordHelpBlock">

<br>
<TuiEditor initialValue="{fileContent}"/>