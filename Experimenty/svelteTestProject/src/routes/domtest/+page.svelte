<script>
    let items = [];

    function addItem() {
        items = [...items, `Item ${items.length + 1}`];
    }
</script>

<main>
    <button on:click={addItem}>Přidat prvek</button>
    {#each items as item, index (index)}
        <div>{item}</div>
    {/each}
</main>