const form = `
  <form id="form-expense">
    <div class="form-group">
      <label for="name">Expense Type (an option to select category is todo..)</label>
      <input type="text" class="form-control" id="name" placeholder="Enter expense name" name="name">
    </div>
    <div class="form-group">
      <label for="projectedExpense">Projected Expense</label>
      <input type="text" class="form-control" id="projected" placeholder="Enter how much you think you'll spend" name="projected">
    </div>
    <div class="form-group">
      <label for="actualExpense">Actually Spent</label>
      <input type="text" class="form-control" id="actual" placeholder="Enter how much you spent" name="projected">
    </div>
    <fieldset class="form-group">
      <legend class="col-form-label">Not relevant</legend>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" id="readyToEatYes" name ="readyToEat" value="true">
        <label class="form-check-label" for="readyToEatYes">Yes</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" id="readyToEatNo" name ="readyToEat" value="false">
        <label class="form-check-label" for="readyToEatNo">No</label>
      </div>
    </fieldset>
    <div class="form-group">
      <label for="categoryId">Category</label>
      <select name="categoryId" id="categories">
        <option value="1"></option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Create Expense Item</button>
  </form>
`;

const newExpense = () => {
  // return html file to be generated/displayed for the ui
  return form;
};

export default newExpense;
