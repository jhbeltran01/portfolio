$(document).ready(function() {
    /******************* ADD NEW TODO *******************/
    const ADD_TASK_BTN = $(".textbox__add-task").on("click", checkIfInputFieldHasValue);

    const TODOS = $(".todo");
    const INPUT_FIELD = $(".textbox__input-field");

    function checkIfInputFieldHasValue() {
        const inputFieldValue = INPUT_FIELD.val();
        const inputFieldValueIsNotNull = inputFieldValue != "";

        if(inputFieldValueIsNotNull) {
            addTask(inputFieldValue);

            // clear input field value
            INPUT_FIELD.val("");

            const increase = true;
            updateNumberOfUncompletedTask(increase);
        }
        
    }

    var markAsDoneBtns = $(".btn-radio");
    var deleteBtns = $(".btn-del");

    function addTask(inputFieldValue) {
        const newTodo = `<li class="todo__task">
                            <button class="btn-radio"><img class="todo__img" src="images/icon-check.svg" alt=""></button>
                            <span>${inputFieldValue}</span>
                            <button class="btn-del"><img class="cross-icon" src="images/icon-cross.svg" alt=""></button>
                        </li>`;
        // append task to the todo list
        TODOS.append(newTodo);
        
        markAsDoneBtns = $(".btn-radio");
        deleteBtns = $(".btn-del");

        markAsDoneBtns.off().on("click", markTodoAsDone);
        deleteBtns.off().on("click", deleteTodo);
    }



    // UPDATE NUMBER OF ITEMS LEFT
    const UNCOMPLETED_TASK_ELEMENT = $(".uncompleted-task");
    let numberOfUncompletedTask = 0;

    function updateNumberOfUncompletedTask(toIncrement) {
        numberOfUncompletedTask = toIncrement ? numberOfUncompletedTask + 1 : numberOfUncompletedTask - 1;
        UNCOMPLETED_TASK_ELEMENT.text(numberOfUncompletedTask);
    }
    // END OF UPDATE NUMBER OF ITEMS LEFT


    /******************* END OF ADD NEW TODO *******************/

    function todoIsMarkedAsDone(todoTask) {
        const isMarkAsDone = todoTask.classList.contains("done");

        return isMarkAsDone;
    }

    /******************* DELETE TODO *******************/
    let a = 0;
    function deleteTodo(target) {
        const btnElement = target.currentTarget;
        const listItemElement = btnElement.parentElement;
        
        listItemElement.remove();
        console.log(a);
        const todoIsNotMarkAsDone = !todoIsMarkedAsDone(listItemElement);

        if(todoIsNotMarkAsDone) {

            decrementNumberOfUncompletedTask();
        }
    }
    /******************* END OF DELETE TODO *******************/

    /******************* MARK AS DONE *******************/
    function markTodoAsDone(target) {
        const markAsDoneBtn = target.currentTarget
        const listItemElement = markAsDoneBtn.parentElement;
        const isNotMarkedAsDone = !todoIsMarkedAsDone(listItemElement); 

        if (isNotMarkedAsDone) {
            const todoText = markAsDoneBtn.nextElementSibling;
            const checkIcon = markAsDoneBtn.firstElementChild;

            listItemElement.classList.add("done");
            todoText.classList.add("complete");
            checkIcon.style.display = "block";
            markAsDoneBtn.style.background = "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))";

            decrementNumberOfUncompletedTask()
        }
    }
    /******************* END OF MARK AS DONE *******************/

    
    function decrementNumberOfUncompletedTask() {
        const toIncrement = false;
        updateNumberOfUncompletedTask(toIncrement);
    }

    /******************* END OF MARK AS DONE AND DELETE TODO *******************/



    /******************* CLEAR COMPLETED *******************/
    const CLEAR_BTN = $(".btn-clear").on("click", removeCompletedTask);

    function removeCompletedTask() {
        $(".done").remove();
    }
    /******************* END OF CLEAR COMPLETED *******************/



    /******************** ALL FILTER *******************/ 
    const ALL_FILTER_BTN = $(".all").on("click", showAllTask);

    function showAllTask() {
        $(".todo__task").css("display", "flex");
        
        const categoryName = "all";
        updateActiveCategory(categoryName);
    }
    /******************** END OF ALL FILTER *******************/


    
    /******************* ACTIVE FILTER *******************/
    const ACTIVE_FILTER_BTN = $(".active").on("click", onlyShowTaskThatIsNotCompleted);

    function onlyShowTaskThatIsNotCompleted() {
       const todo = new Todo();
       
       todo.showNotCompletedTask();

       const categoryName = "active";
       updateActiveCategory(categoryName);
    }
    /******************* END OF ACTIVE FILTER *******************/


    
    /******************* COMPLETED FILTER *******************/
    const COMPLETED_FILTER_BTN = $(".completed").on("click", onlyShowTaskThatIsCompleted)

    function onlyShowTaskThatIsCompleted() {
        const todo = new Todo();
        
        todo.showCompletedTask();

        const categoryName = "completed";
        updateActiveCategory(categoryName);
    }
    /******************* END OF COMPLETED FILTER *******************/



    /******************* TODO CLASS *******************/
     class Todo {
       constructor () {
        this.task = $(".todo__task");
        this.listLength = this.task.length;
        this.listItem;
       }

        showCompletedTask() {
            let isCompleted = false;
            for(let i = 0; i < this.listLength; ++i) {
                this.listItem = this.task[i];
                isCompleted = this.listItem.classList.contains("done");
                this.displayOrHideTodo(isCompleted, this.listItem);
            }
        }

        showNotCompletedTask() {
            let isNotCompleted = false;
            for(let i = 0; i < this.listLength; ++i) {
                this.listItem = this.task[i];
                isNotCompleted = !(this.listItem.classList.contains("done"));
                this.displayOrHideTodo(isNotCompleted, this.listItem);
            }
        }
        
        displayOrHideTodo(toDisplayTodo, listItem) {
            if(toDisplayTodo) {
                listItem.style.display = "flex";
            } else {
                listItem.style.display = "none";
            }
        }
    }
    /******************* END OF TODO CLASS *******************/


    /******************* CHANGE ACTIVE FILTER *******************/
    let previousActiveCategory = $(".all");

    function updateActiveCategory(categoryName) {
        const newActiveCategory = $(`.${categoryName}`);

        previousActiveCategory.removeClass("active-category");
        newActiveCategory.addClass("active-category");
        previousActiveCategory = newActiveCategory;

    }
    /******************* END OF CHANGE ACTIVE FILTER *******************/
});