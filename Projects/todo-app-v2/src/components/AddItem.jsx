function AddItem({ todoName, todoDate }) {
  return (
    <div class="container">
      <div className="row items-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger todo-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
