export default class basicService {
  constructor($q, $http) {
    Object.assign(this, {
      $q,
      $http
    })
  }
  getRequestConfig(url, method, data) {
    var config = {};
    config.url = url;
    config.method = method;
    if (method === 'get') {
      config.parame = data;
    } else {
      config.data = data;
    }
    return config;
  }
  //get
  get(url) {
    var deferred = this.$q.defer();
    this.$http(this.getRequestConfig(url, 'GET')).then(
      (success) => {
        deferred.resolve(success);
        // console.log(success)
      },
      (err) => {
        deferred.reject(err)
        console.log(err)
      }
    )
    return deferred.promise;
  }
  post(url, data) {
    var deferred = this.$q.defer();
    this.$http(this.getRequestConfig(url, 'POST', data)).then(
      (success) => {
        deferred.resolve(success);
        console.log(success)
      },
      (err) => {
        deferred.reject(err)
        console.log(err)
      }
    )
    return deferred.promise;
  }
  put(url, data) {
    var deferred = this.$q.defer();
    this.$http(this.getRequestConfig(url, 'PUT', data)).then(
      (success) => {
        deferred.resolve(success);
        console.log(success)
      },
      (err) => {
        deferred.reject(err)
        console.log(err)
      }
    )
    return deferred.promise;
  }
  delete(url, data) {
    var deferred = this.$q.defer();
    this.$http(this.getRequestConfig(url, 'DELETE', data)).then(
      (success) => {
        deferred.resolve(success);
        console.log(success)
      },
      (err) => {
        deferred.reject(err)
        console.log(err)
      }
    )
    return deferred.promise;
  }

}
basicService.$inject = ['$q', '$http'];