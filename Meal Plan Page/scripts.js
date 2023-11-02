document.getElementById('addColumn').addEventListener('click', function () {
    const mealTable = document.getElementById('mealTable');
    const headerRow = mealTable.rows[0];
    
    const newColumnName = prompt('Enter the name for the new column:');
    if (newColumnName === null) return;

    let newPosition = parseInt(prompt('Enter the position to add the column (2 - ' + (headerRow.cells.length + 1) + '):'));
    if (isNaN(newPosition) || newPosition < 2 || newPosition > headerRow.cells.length + 1) {
      alert('Invalid position. Column not added.');
      return;
    }
    newPosition--;

    const newHeaderCell = document.createElement('th');
    newHeaderCell.textContent = newColumnName;

    headerRow.insertBefore(newHeaderCell, headerRow.cells[newPosition]);

    for (let i = 1; i < mealTable.rows.length; i++) {
      const newRowCell = document.createElement('td');
      newRowCell.textContent = '';
      mealTable.rows[i].insertBefore(newRowCell, mealTable.rows[i].cells[newPosition]);
    }
  });

  document.getElementById('removeColumn').addEventListener('click', function () {
    const mealTable = document.getElementById('mealTable');
    const headerRow = mealTable.rows[0];
    
    const removeColumnName = prompt('Enter the name of the column to remove:');
    if (removeColumnName === null) return;

    for (let i = 0; i < headerRow.cells.length; i++) {
      if (headerRow.cells[i].textContent === removeColumnName) {
        headerRow.deleteCell(i);
        for (let j = 1; j < mealTable.rows.length; j++) {
          mealTable.rows[j].deleteCell(i);
        }
        break;
      }
    }
  });