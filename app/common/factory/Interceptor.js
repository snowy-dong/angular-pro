
export default function Interceptor($q) {
  return {
    // 可选，拦截成功的请求
    request: function (config) {
      // 进行预处理
      // ...
      return config || $q.when(config);
    },

    // 可选，拦截失败的请求
    requestError: function (rejection) {
      // 对失败的请求进行处理
      // ...
      return $q.reject(rejection);
    },
    // 可选，拦截成功的响应
    response: function (response) {
      // 进行预处理
      // ....
      return response || $q.when(reponse);
    },

    // 可选，拦截失败的响应
    responseError: function (rejection) {
      // 对失败的响应进行处理
      // ...
      return $q.reject(rejection);
    }
  };
};
Interceptor.$inject = ['$q'];
  