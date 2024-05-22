function AddItem1() {
  return (
    <div class="container">
      <div className="row items-row">
        <div class="col-6">Buy Milk</div>
        <div class="col-4">04/10/2024</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger todo-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem1;
