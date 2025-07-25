document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('taskInput1');
  const dateInput = document.getElementById('dueDateInput');
  const list = document.getElementById('tasklist');
  const addButton = document.getElementById("addBtn");

  if (addButton && input && list && dateInput) {
    addButton.addEventListener("click", function () {
      const taskText = input.value.trim();
      const dateValue = dateInput.value;

      if (taskText !== "") {
        const li = document.createElement('li');

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => li.remove());

        // Task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.className = 'task-text';

        // Date badge
        let dateBadge = null;
        if (dateValue) {
          const [yyyy, mm, dd] = dateValue.split("-");
          const formattedDate = `${dd}-${mm}-${yyyy}`;

          dateBadge = document.createElement('span');
          dateBadge.className = 'date-badge';
          dateBadge.innerHTML = `<i class="calendar-icon">📅</i> ${formattedDate}`;
        }

        // Build list item
        li.appendChild(deleteBtn);
        li.appendChild(taskSpan);
        if (dateBadge) li.appendChild(dateBadge);

        list.appendChild(li);

        // Clear inputs
        input.value = '';
        dateInput.value = '';
      }
    });
  } else {
    console.error("One or more elements were not found in the DOM");
  }
});
