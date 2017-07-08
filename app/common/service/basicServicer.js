export default class basicService {
  constructor($q, $http) {
    Object.assign(this, {
      $q,
      $http
    })
  }
   defer = (configinfo) =>{
    var config = {
    'headers':{
      'Content-Type':'application/json'
      }
    };
    Object.assign(config,configinfo);
    var deferred = this.$q.defer();
    this.$http(config).then(
      (success) => {
        deferred.resolve(success.data);
      },
      (err) => {
        deferred.reject(err)
      }
    )
    return deferred.promise;
  }
  get(config) {
    config.method ='GET';
   return this.defer(config);
  }
  post(config) {
     config.method ='POST';
     return this.defer(config);
  }
  put(config) {
     config.method ='PUT';
    return this.defer(config);
  }
  delete(config) {
    config.method ='DELETE';
    return this.defer(config);
  }
 

}
basicService.$inject = ['$q', '$http'];

