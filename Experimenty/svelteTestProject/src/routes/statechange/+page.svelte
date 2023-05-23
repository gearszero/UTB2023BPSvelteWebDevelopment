<script>
    let count = 0;

    function increment() {
        count += 1;
    }
</script>

<div>
    <p>You clicked {count} times</p>
    <button on:click={increment}>
        Click me
    </button>
</div>
