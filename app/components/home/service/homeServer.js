export default class homeServer {
  constructor(basicService) {
    Object.assign(this, {
      basicService
    })
  }
  get(url, data) {
    return this.basicService.get(url, data);
  }
  post(url, data) {
    return this.basicService.post(url, data);
  }

}
homeServer.$inject = ['basicService']