const knex = require("./knex")

function createTask(task)
{
    return knex("tasktable").insert(task);
}

function getAllTask()
{
    return knex("tasktable").select("*").where("completed",1);
}

function deleteCar(id)
{
    return knex("tasktable").where("primkey",id).del();   
}

function updateTask(id,task)
{
    return knex("tasktable").where("primkey",id).update(task)
}

module.exports = {
    createTask,
    getAllTask,
    deleteCar,
    updateTask
}