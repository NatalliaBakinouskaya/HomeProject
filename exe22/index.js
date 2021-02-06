/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) 
{
  var promises =[];
  for(var i=0; i<operations.length;i++)
  {
    var operation = operations[i];
    var promise = new Promise(function (resolve,reject)
    {
       operation(function(err,data)
       {
         if(err)
         reject(err);
         else
         resolve(data);
       });
    });
    promises.push(promise); 

  }
  let p = Promise.all(promises);
      
        p.catch(error => callback(error))
        p.then(data => callback(null, data))


};

