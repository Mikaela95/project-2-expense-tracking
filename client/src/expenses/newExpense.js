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
    <button type="submit" class="btn btn-primary">Create Expense Item</button>
  </form>
`;

const newExpense = () => {
  
  // return html file to be generated/displayed for the ui
  return form;
};

export default newExpense;
