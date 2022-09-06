const getTasks = (req, res) => {
    return res.send('All items');
  };

    const getTask = (req, res) => {
    return res.send('Get single item');
    }

  const createTask = (req, res) => {
    return res.send('Create item');
  };

    const updateTask = (req, res) => {
    return res.send('Update item');
  
    };

    const deleteTask = (req, res) => {
    return res.send('Delete item');
    }



  module.exports = {getTasks, getTask, createTask, updateTask, deleteTask};