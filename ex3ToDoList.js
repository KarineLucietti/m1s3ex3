let dailyTasks = ["Passear com Hachiko e Floki", "Ir ao Mercado", "Estudar", "Trabalhar", "Organizar a Casa", "Preparar as Refeições"];
let task;

//em teste

//1.Busca a tarefa na lista

function lookForTasks(task) {
  task = dailyTasks.find(function (element) {
    return element === task;
  });

  if (task) {
    return "A tarefa " + task + " existe na lista.";
  } else {
    return "A tarefa não existe na lista.";
  }
}
//2.Altera um item da lista 

function changeTask(oldTask, newTask) {
  let index = dailyTasks.indexOf(oldTask);
  if (index != -1) {
    dailyTasks[index] = newTask
  }
}
//3.Deleta um item da lista

function deleteTask(task) {
  return dailyTasks.filter(function (element) {
    return element !== task;

  })
}
//4.Adiciona um item na lista

function addTasks(task) {
  dailyTasks.push(task);
  console.log(dailyTasks);

}