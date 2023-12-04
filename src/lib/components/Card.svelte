<script>
	import Card from "../lib/components/Card.svelte";
// Unsure if we use this part??
const obj = [
    { title: "TBD", author: "TBD", published:'TBD.png', body:"TBD", summary:"TBD", tags:"TBD" },
  ];
  //copy and paste to add more you can also add more to the array
</script>


<div class="card-container">
  {#each obj as { title, author, published, body, summary, tags } (title)}
    <Card title={title} author={author} published={published} body={body} summary={summary} />
  {/each}
</div>

<style>
  .card-container {
    padding-top: 15rem;
    display: flex;
    justify-content: space-around; /* or space-between */
    flex-wrap: wrap;
    max-width: 1000px; /* Adjust as needed */
    margin: 0 auto; /* Center the cards */
  }
</style>